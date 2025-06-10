
import { Brain, MessageSquare, Zap } from "lucide-react";

const ValuePillars = () => {
  const pillars = [
    {
      icon: Brain,
      title: "Tư Duy Cấu Trúc",
      description: "Rèn luyện khả năng biến ý tưởng phức tạp thành những luận điểm rõ ràng, câu chuyện lôi cuốn và nội dung thuyết phục."
    },
    {
      icon: MessageSquare,
      title: "Biểu Đạt Tinh Tế",
      description: "Nâng cao ngôn ngữ, giọng điệu và thần thái để tạo ấn tượng sâu sắc với người nghe."
    },
    {
      icon: Zap,
      title: "Phản Xạ Linh Hoạt",
      description: "Phát triển khả năng ứng biến nhanh và tự tin trong mọi tình huống giao tiếp."
    }
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-crimson text-foreground mb-4">
            Phương pháp của Tinktalk.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-lg border-2 border-transparent transition-all duration-300 ease-out hover:border-primary hover:-translate-y-1 cursor-pointer"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <pillar.icon className="text-primary" size={40} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold font-crimson text-foreground mb-4">
                  {pillar.title}
                </h3>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-source">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;
