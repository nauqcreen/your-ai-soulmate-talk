import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Starting periodic email check...");

    // Get emails that need to be sent
    const { data: pendingEmails, error: fetchError } = await supabase
      .from('scheduled_email_reports')
      .select('*')
      .eq('is_active', true)
      .lte('next_send_at', new Date().toISOString());

    if (fetchError) {
      console.error("Error fetching pending emails:", fetchError);
      throw fetchError;
    }

    console.log(`Found ${pendingEmails?.length || 0} pending emails`);

    // Get analytics data for email content
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

    const { data: analyticsData, error: analyticsError } = await supabase
      .from('analytics_events')
      .select('*')
      .gte('timestamp', threeDaysAgo.toISOString());

    if (analyticsError) {
      console.error("Error fetching analytics:", analyticsError);
    }

    // Process analytics data
    const totalEvents = analyticsData?.length || 0;
    const pageViews = analyticsData?.filter(e => e.event_type === 'navigation')?.length || 0;
    const formSubmissions = analyticsData?.filter(e => e.event_name === 'form_submit')?.length || 0;
    const uniqueSessions = new Set(analyticsData?.map(e => e.session_id)).size;

    for (const emailRecord of pendingEmails || []) {
      try {
        console.log(`Sending email to ${emailRecord.recipient_email}`);

        const emailResponse = await resend.emails.send({
          from: "Analytics Report <onboarding@resend.dev>",
          to: [emailRecord.recipient_email],
          subject: "Báo cáo Analytics Website (3 ngày gần đây)",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h1 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
                📊 Báo cáo Analytics Website
              </h1>
              
              <p style="color: #666; margin-bottom: 30px;">
                Báo cáo hoạt động website trong 3 ngày qua (${threeDaysAgo.toLocaleDateString('vi-VN')} - ${new Date().toLocaleDateString('vi-VN')})
              </p>

              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h2 style="color: #007bff; margin-top: 0;">📈 Tổng quan</h2>
                <ul style="list-style: none; padding: 0;">
                  <li style="margin: 10px 0; padding: 10px; background: white; border-radius: 4px;">
                    <strong>Tổng số sự kiện:</strong> ${totalEvents}
                  </li>
                  <li style="margin: 10px 0; padding: 10px; background: white; border-radius: 4px;">
                    <strong>Lượt xem trang:</strong> ${pageViews}
                  </li>
                  <li style="margin: 10px 0; padding: 10px; background: white; border-radius: 4px;">
                    <strong>Form được gửi:</strong> ${formSubmissions}
                  </li>
                  <li style="margin: 10px 0; padding: 10px; background: white; border-radius: 4px;">
                    <strong>Phiên duy nhất:</strong> ${uniqueSessions}
                  </li>
                </ul>
              </div>

              <div style="background: #e8f4fd; padding: 15px; border-radius: 8px; margin-top: 30px;">
                <p style="margin: 0; color: #0056b3;">
                  <strong>Lưu ý:</strong> Đây là báo cáo tự động được gửi mỗi 3 ngày. 
                  Nếu bạn không muốn nhận email này, vui lòng liên hệ quản trị viên.
                </p>
              </div>

              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #888; font-size: 12px;">
                <p>Email được gửi vào: ${new Date().toLocaleString('vi-VN')}</p>
              </div>
            </div>
          `,
        });

        console.log("Email sent successfully:", emailResponse);

        // Update the email record
        const nextSendDate = new Date();
        nextSendDate.setDate(nextSendDate.getDate() + emailRecord.frequency_days);

        await supabase
          .from('scheduled_email_reports')
          .update({
            last_sent_at: new Date().toISOString(),
            next_send_at: nextSendDate.toISOString(),
          })
          .eq('id', emailRecord.id);

        console.log(`Updated email record for ${emailRecord.recipient_email}`);

      } catch (emailError) {
        console.error(`Error sending email to ${emailRecord.recipient_email}:`, emailError);
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        processed: pendingEmails?.length || 0,
        message: "Periodic email check completed"
      }), 
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error("Error in send-periodic-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);