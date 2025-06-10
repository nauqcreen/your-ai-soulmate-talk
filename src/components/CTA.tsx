
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const CTA = () => {
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
                    />
                    <Button 
                      type="submit"
                      size="lg" 
                      disabled={!isValidEmail}
                      className={`bg-background text-primary hover:bg-background/90 text-lg px-8 py-3 h-12 whitespace-nowrap transition-all duration-300 font-source ${
                        isValidEmail ? 'animate-pulse' : ''
                      }`}
                    >
                      Nhận Lời Mời Sớm
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
