
import { Input } from "@/components/ui/input";
import { useState } from "react";
import MagneticButton from './MagneticButton';
import TextReveal from './TextReveal';

const TheEmpowerment = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidEmail) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {!isSubmitted ? (
            <>
              <TextReveal className="mb-8">
                <h2 className="text-3xl md:text-5xl font-bold font-crimson text-foreground leading-tight">
                  Biến trí tuệ thành tầm ảnh hưởng.
                </h2>
              </TextReveal>
              
              <p className="text-xl mb-12 text-muted-foreground leading-relaxed max-w-3xl mx-auto font-source">
                Tinktalk không dạy bạn những gì cần nói. Nó giúp bạn giải phóng khả năng nói ra những điều tuyệt vời mà bạn vốn đã biết.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-crimson font-semibold text-foreground mb-4">
                  Đăng ký nhận thông tin sớm, truy cập sớm, và nhận báo cáo năng lực đầu tiên
                </h3>
                
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="email"
                      placeholder="Nhập email của bạn..."
                      value={email}
                      onChange={handleEmailChange}
                      className="flex-1 bg-background text-foreground border-border h-12 text-lg focus:ring-primary font-source"
                      required
                    />
                    <MagneticButton 
                      type="submit"
                      disabled={!isValidEmail}
                      className={`bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3 h-12 whitespace-nowrap transition-all duration-300 hover-lift font-source ${
                        isValidEmail ? 'shadow-lg' : ''
                      }`}
                    >
                      Nhận Báo Cáo
                    </MagneticButton>
                  </div>
                </form>
                
                <p className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed font-source">
                  Báo cáo được AI phân tích dựa trên một bài tập ngắn do bạn thực hiện, giúp bạn hiểu rõ điểm mạnh và tiềm năng cải thiện của mình.
                </p>
              </div>
            </>
          ) : (
            <div className="py-16">
              <h2 className="text-3xl md:text-4xl font-crimson text-foreground leading-relaxed">
                Cảm ơn bạn. Chúng tôi sẽ liên hệ sớm để gửi thông tin đầu tiên cho bạn.
              </h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TheEmpowerment;
