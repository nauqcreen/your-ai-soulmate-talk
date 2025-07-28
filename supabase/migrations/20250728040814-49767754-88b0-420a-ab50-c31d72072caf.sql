-- Create scheduled email reports table
CREATE TABLE public.scheduled_email_reports (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  recipient_email TEXT NOT NULL,
  report_type TEXT NOT NULL DEFAULT 'analytics_summary',
  frequency_days INTEGER NOT NULL DEFAULT 3,
  last_sent_at TIMESTAMP WITH TIME ZONE NULL,
  next_send_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (now() + interval '3 days'),
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.scheduled_email_reports ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Admins can manage scheduled emails" 
ON public.scheduled_email_reports 
FOR ALL 
USING (is_admin());

-- Insert the email record
INSERT INTO public.scheduled_email_reports (recipient_email, report_type, frequency_days)
VALUES ('manhquan03tn@gmail.com', 'analytics_summary', 3);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_scheduled_email_reports_updated_at
BEFORE UPDATE ON public.scheduled_email_reports
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();