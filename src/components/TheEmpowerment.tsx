import { Input } from "@/components/ui/input";
import { useState, useRef, useEffect } from "react";
import MagneticButton from './MagneticButton';
import TextReveal from './TextReveal';
import { Mail, Send, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const TheEmpowerment = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const typingTimer = useRef<NodeJS.Timeout>();
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
    setIsTyping(true);
    
    // Clear existing timer
    if (typingTimer.current) {
      clearTimeout(typingTimer.current);
    }
    
    // Set new timer
    typingTimer.current = setTimeout(() => {
      setIsTyping(false);
    }, 800);
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
            source: 'empowerment-section'
          }
        ]);

      if (error) {
        if (error.code === '23505') { // Duplicate email
          toast({
            title: "Chúng tôi đã ghi nhận email này",
            description: "Bạn sẽ nhận được thông tin ngay khi Tinktalk ra mắt.",
            variant: "default",
          });
        } else {
          throw error;
        }
      } else {
        setIsSubmitted(true);
        toast({
          title: "Chào mừng bạn đến với cộng đồng Tinktalk",
          description: "Chúng tôi sẽ gửi thông tin độc quyền cho bạn sớm nhất.",
        });
      }
    } catch (error) {
      console.error('Error saving email:', error);
      toast({
        title: "Không thể hoàn tất đăng ký",
        description: "Xin lỗi vì sự bất tiện. Vui lòng thử lại sau ít phút.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (typingTimer.current) {
        clearTimeout(typingTimer.current);
      }
    };
  }, []);

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {!isSubmitted ? (
            <>
              <TextReveal className="mb-8">
                <h2 className="text-3xl md:text-5xl font-bold font-crimson text-foreground leading-tight">
                  Biến trí tuệ thành tầm ảnh hưởng
                </h2>
              </TextReveal>
              
              <p className="text-xl mb-12 text-muted-foreground leading-relaxed max-w-3xl mx-auto font-source">
                Tinktalk không dạy những gì cần nói. Tinktalk giúp bạn giải phóng khả năng nói ra những điều tuyệt vời mà bạn vốn đã biết.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-crimson font-semibold text-foreground mb-4">
                  Đăng ký nhận thông tin sớm, truy cập sớm, và nhận báo cáo năng lực đầu tiên
                </h3>
                
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Enhanced Email Input */}
                    <div className="flex-1 relative group">
                      <div className={`absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg blur-lg opacity-0 transition-all duration-700 ${
                        isFocused || isValidEmail ? 'opacity-100 scale-110' : ''
                      }`}></div>
                      
                      <div className="relative">
                        <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                          isFocused ? 'text-primary scale-110' : 'text-muted-foreground'
                        } ${isTyping ? 'animate-pulse' : ''}`} size={18} />
                        
                        <Input
                          ref={inputRef}
                          type="email"
                          placeholder="Nhập email của bạn..."
                          value={email}
                          onChange={handleEmailChange}
                          onFocus={() => setIsFocused(true)}
                          onBlur={() => setIsFocused(false)}
                          disabled={isLoading}
                          className={`pl-10 pr-10 h-12 text-lg bg-background/80 backdrop-blur-sm border-2 transition-all duration-500 font-source
                            ${isFocused ? 'border-primary shadow-lg shadow-primary/20 bg-background' : 'border-border'}
                            ${isValidEmail ? 'border-green-500 shadow-lg shadow-green-500/20' : ''}
                            hover:border-primary/50 hover:shadow-md group-hover:scale-[1.02]
                          `}
                          required
                        />
                        
                        <div className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                          isValidEmail ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                        }`}>
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                            <Check size={12} className="text-white" />
                          </div>
                        </div>
                        
                        {/* Typing indicator */}
                        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                          isTyping ? 'w-full opacity-100' : 'w-0 opacity-0'
                        }`}></div>
                      </div>
                    </div>

                    {/* Enhanced Submit Button */}
                    <div className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-lg blur-lg opacity-0 transition-all duration-700 ${
                        buttonHovered || isValidEmail ? 'opacity-60 scale-110' : ''
                      }`}></div>
                      
                      <MagneticButton 
                        type="submit"
                        disabled={!isValidEmail || isLoading}
                        onMouseEnter={() => setButtonHovered(true)}
                        onMouseLeave={() => setButtonHovered(false)}
                        className={`relative z-10 bg-primary text-primary-foreground text-lg px-8 py-3 h-12 whitespace-nowrap transition-all duration-500 font-source overflow-hidden group/btn
                          ${isValidEmail && !isLoading ? 'hover:bg-primary/90 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-primary/30' : 'opacity-50 cursor-not-allowed'}
                          ${buttonHovered && isValidEmail && !isLoading ? 'animate-pulse' : ''}
                        `}
                      >
                        <div className="flex items-center gap-2 relative z-10">
                          <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                            {isLoading ? 'Đang xử lý...' : 'Nhận thông tin dự án'}
                          </span>
                          {!isLoading && (
                            <Send className={`transition-all duration-300 ${
                              buttonHovered && isValidEmail ? 'translate-x-1 scale-110' : ''
                            }`} size={16} />
                          )}
                        </div>
                        
                        {/* Button glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 ${
                          isValidEmail && !isLoading ? '' : 'hidden'
                        }`}></div>
                        
                        {/* Particle burst effect on hover */}
                        <div className={`absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 ${
                          isValidEmail && !isLoading ? '' : 'hidden'
                        }`}>
                          {[...Array(6)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-1 h-1 bg-white/60 rounded-full animate-ping"
                              style={{
                                left: `${20 + i * 10}%`,
                                top: `${30 + (i % 2) * 40}%`,
                                animationDelay: `${i * 0.1}s`,
                                animationDuration: '1s'
                              }}
                            ></div>
                          ))}
                        </div>
                      </MagneticButton>
                    </div>
                  </div>
                  
                  {/* Enhanced status message */}
                  <div className="mt-4 h-6 flex items-center justify-center">
                    {isValidEmail && !isLoading && (
                      <div className="flex items-center gap-2 text-green-600 animate-fade-in">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-source">Email hợp lệ - sẵn sàng gửi!</span>
                      </div>
                    )}
                    {email && !isValidEmail && !isLoading && (
                      <div className="flex items-center gap-2 text-amber-600 animate-fade-in">
                        <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-source">Vui lòng nhập email hợp lệ</span>
                      </div>
                    )}
                    {isLoading && (
                      <div className="flex items-center gap-2 text-blue-600 animate-fade-in">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                        <span className="text-sm font-source">Đang xử lý...</span>
                      </div>
                    )}
                  </div>
                </form>
                
                <p className="text-sm text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed font-source">
                  Báo cáo được AI phân tích dựa trên một bài tập ngắn do bạn thực hiện, giúp hiểu rõ điểm mạnh & tiềm năng cải thiện
                </p>
              </div>
            </>
          ) : (
            <div className="py-16">
              <h2 className="text-3xl md:text-4xl font-crimson text-foreground leading-relaxed">
                Cảm ơn bạn! Chúng tôi sẽ email sớm để gửi thông tin đầu tiên cho bạn.
              </h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TheEmpowerment;
