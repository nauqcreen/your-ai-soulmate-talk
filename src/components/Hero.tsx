
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in">
          <Sparkles size={16} />
          <span className="text-sm font-medium">Biến Tư Duy Thành Sức Mạnh Giao Tiếp</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-lora mb-6 text-foreground animate-fade-in">
          Từ Thông Minh Thầm Lặng
          <br />
          Đến Thuyết Phục Tự Tin
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in leading-relaxed">
          Dành cho những người có tư duy sắc bén nhưng vẫn cảm thấy chưa thể hiện hết tiềm năng trong giao tiếp. 
          Tinktalk giúp bạn xây dựng cầu nối từ ý tưởng đến tác động thực sự.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3 hover-scale"
          >
            Khám Phá Ngay
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-3 hover-scale border-muted-foreground text-foreground hover:bg-muted"
          >
            Xem Demo
          </Button>
        </div>
        
        <div className="mt-12 relative">
          <div className="bg-primary/5 rounded-2xl p-8 backdrop-blur-sm border border-primary/20">
            <div className="bg-background rounded-xl p-6 shadow-lg border border-border">
              <div className="text-left space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">AI</span>
                  </div>
                  <div className="bg-muted rounded-lg p-3 max-w-sm">
                    <p className="text-sm text-foreground">Tôi hiểu bạn có nhiều ý tưởng tuyệt vời trong đầu. Hãy cùng tôi biến chúng thành những lời nói thuyết phục và tự tin nhé!</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-sm">
                    <p className="text-sm">Giúp tôi chuẩn bị cho buổi thuyết trình quan trọng tuần sau.</p>
                  </div>
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">You</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
