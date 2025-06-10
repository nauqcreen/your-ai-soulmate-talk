
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

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
              <h2 className="text-3xl md:text-5xl font-bold font-lora text-foreground mb-8 leading-tight">
                Biến Trí Tuệ Thành Tầm Ảnh Hưởng.
              </h2>
              
              <p className="text-xl mb-12 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Tinktalk không dạy bạn những gì cần nói. Nó giúp bạn giải phóng khả năng nói ra những điều tuyệt vời mà bạn vốn đã biết.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-lora font-semibold text-foreground mb-4">
                  Đăng Ký Truy Cập Sớm & Nhận "Báo Cáo Năng Lực Giao Tiếp" Đầu Tiên Của Bạn.
                </h3>
                
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="email"
                      placeholder="Nhập email của bạn..."
                      value={email}
                      onChange={handleEmailChange}
                      className="flex-1 bg-background text-foreground border-border h-12 text-lg focus:ring-primary"
                      required
                    />
                    <Button 
                      type="submit"
                      size="lg" 
                      disabled={!isValidEmail}
                      className={`bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3 h-12 whitespace-nowrap transition-all duration-300 hover-lift ${
                        isValidEmail ? 'shadow-lg' : ''
                      }`}
                    >
                      Nhận Báo Cáo
                    </Button>
                  </div>
                </form>
                
                <p className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
                  Báo cáo được AI phân tích dựa trên một bài tập ngắn do bạn thực hiện, giúp bạn hiểu rõ điểm mạnh và tiềm năng cải thiện của mình.
                </p>
              </div>
            </>
          ) : (
            <div className="py-16">
              <h2 className="text-3xl md:text-4xl font-lora text-foreground leading-relaxed">
                Cảm ơn bạn. Chúng tôi sẽ liên hệ sớm để gửi báo cáo đầu tiên của bạn.
              </h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TheEmpowerment;
