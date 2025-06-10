
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail || isLoading) return;

    setIsLoading(true);
    
    try {
      const { error } = await supabase
        .from('email_subscribers')
        .insert([
          { 
            email: email.toLowerCase().trim(),
            source: 'cta-section'
          }
        ]);

      if (error) {
        if (error.code === '23505') { // Duplicate email
          toast({
            title: "Email đã được đăng ký",
            description: "Email này đã có trong danh sách của chúng tôi rồi.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        setIsSubmitted(true);
        toast({
          title: "Đăng ký thành công!",
          description: "Cảm ơn bạn đã đăng ký nhận thông tin sớm.",
        });
      }
    } catch (error) {
      console.error('Error saving email:', error);
      toast({
        title: "Có lỗi xảy ra",
        description: "Vui lòng thử lại sau.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-3xl p-12 text-center text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="relative z-10">
            {!isSubmitted ? (
              <>
                <h2 className="text-3xl md:text-5xl font-bold font-crimson mb-6 text-white">
                  Sẵn sàng để tiếng nói của bạn có trọng lượng tương xứng?
                </h2>
                
                <p className="text-xl mb-8 max-w-2xl mx-auto text-white leading-relaxed font-source">
                  Trở thành người đầu tiên trải nghiệm Tinktalk và nhận lộ trình cá nhân hóa được thiết kế riêng cho tiềm năng của bạn.
                </p>
                
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="email"
                      placeholder="Nhập email của bạn..."
                      value={email}
                      onChange={handleEmailChange}
                      className="flex-1 bg-white text-foreground border-0 h-12 text-lg font-source"
                      required
                      disabled={isLoading}
                    />
                    <Button 
                      type="submit"
                      size="lg" 
                      disabled={!isValidEmail || isLoading}
                      className={`bg-background text-primary hover:bg-background/90 text-lg px-8 py-3 h-12 whitespace-nowrap transition-all duration-300 font-source ${
                        isValidEmail && !isLoading ? 'animate-pulse' : ''
                      }`}
                    >
                      {isLoading ? 'Đang gửi...' : 'Nhận lời mời sớm'}
                    </Button>
                  </div>
                </form>
              </>
            ) : (
              <div className="py-8">
                <h2 className="text-3xl md:text-4xl font-crimson italic text-white leading-relaxed">
                  Cảm ơn bạn. Chúng tôi rất mong chờ được đồng hành cùng bạn.
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
