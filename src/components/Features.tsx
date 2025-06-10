
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, MessageSquare, Zap, Shield, Users, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Tư Duy Cấu Trúc",
      description: "Biến những ý tưởng rời rạc thành luận điểm mạch lạc, logic và thuyết phục."
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
    },
    {
      icon: Shield,
      title: "Tự Tin Nội Tại",
      description: "Xây dựng sự tự tin từ bên trong, giúp bạn thể hiện bản thân một cách tự nhiên và chân thực."
    },
    {
      icon: Users,
      title: "Cá Nhân Hóa",
      description: "AI học hỏi và thích nghi với phong cách giao tiếp riêng của bạn, tạo trải nghiệm độc nhất."
    },
    {
      icon: Sparkles,
      title: "Tác Động Thực Sự",
      description: "Đo lường và cải thiện hiệu quả giao tiếp qua từng buổi luyện tập."
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-lora mb-4 text-foreground">
            Ba Trụ Cột Của Sự Thuyết Phục
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Phát triển toàn diện khả năng giao tiếp từ tư duy đến biểu đạt, từ nội tại đến tác động bên ngoài.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover-scale border-border bg-background/60 backdrop-blur-sm shadow-sm hover:shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <CardTitle className="text-xl font-lora text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
