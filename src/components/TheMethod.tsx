
import { Brain, MessageSquare, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import TextReveal from './TextReveal';
import InteractiveCard from './InteractiveCard';
import ParallaxSection from './ParallaxSection';

const TheMethod = () => {
  const [animateIcons, setAnimateIcons] = useState([false, false, false]);
  const sectionRef = useRef<HTMLElement>(null);

  const pillars = [
    {
      icon: Brain,
      title: "Tư Duy Kiến Trúc",
      description: "Xây dựng nền tảng tư duy phản biện, biến ý tưởng thô thành những cấu trúc lập luận không thể bị bẻ gãy."
    },
    {
      icon: MessageSquare,
      title: "Biểu Đạt Chủ Đích",
      description: "Làm chủ ngôn ngữ và phi ngôn ngữ để mọi lời nói đều có mục tiêu, mọi biểu cảm đều có sức nặng."
    },
    {
      icon: Zap,
      title: "Đối Thoại Bản Lĩnh",
      description: "Rèn luyện phản xạ tức thì và sự linh hoạt trong môi trường áp lực cao để dẫn dắt mọi cuộc hội thoại."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          pillars.forEach((_, index) => {
            setTimeout(() => {
              setAnimateIcons(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 200);
          });
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <TextReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-crimson text-foreground mb-4 leading-tight">
              Mài Sắc Công Cụ Của Bạn.
            </h2>
          </TextReveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <ParallaxSection key={index} speed={0.3}>
              <InteractiveCard className="h-full">
                <div className="group p-6 md:p-8 lg:p-10 border-2 border-transparent rounded-2xl transition-all duration-500 ease-out hover:border-primary hover:shadow-2xl hover:shadow-primary/10 bg-gradient-to-br from-background to-secondary/30 backdrop-blur-sm h-full flex flex-col">
                  <div className="text-center flex-1 flex flex-col">
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 md:mb-8 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
                      <pillar.icon 
                        className={`text-primary transition-all duration-1000 relative z-10 group-hover:scale-110 ${
                          animateIcons[index] ? 'animate-pulse-once opacity-100' : 'opacity-0'
                        }`}
                        size={window.innerWidth < 768 ? 32 : 40} 
                        strokeWidth={1.5} 
                      />
                    </div>
                    
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-crimson text-foreground mb-4 md:mb-6 group-hover:text-primary transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed font-source flex-1 group-hover:text-foreground/90 transition-colors duration-300">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </InteractiveCard>
            </ParallaxSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheMethod;
