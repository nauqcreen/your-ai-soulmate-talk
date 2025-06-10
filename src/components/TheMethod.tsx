
import { Brain, MessageSquare, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import TextReveal from './TextReveal';
import InteractiveCard from './InteractiveCard';
import ParallaxSection from './ParallaxSection';
import ScrollTriggerAnimation from './ScrollTriggerAnimation';

const TheMethod = () => {
  const [animateIcons, setAnimateIcons] = useState([false, false, false]);
  const sectionRef = useRef<HTMLElement>(null);

  const pillars = [
    {
      icon: Brain,
      title: "Tư duy kiến trúc",
      description: "Xây dựng nền tảng tư duy phản biện, biến ý tưởng thô thành những cấu trúc lập luận không thể bị bẻ gãy.",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: MessageSquare,
      title: "Biểu đạt chủ đích",
      description: "Làm chủ ngôn ngữ và phi ngôn ngữ để mọi lời nói đều có mục tiêu, mọi biểu cảm đều có sức nặng.",
      color: "from-green-500/20 to-blue-500/20"
    },
    {
      icon: Zap,
      title: "Đối thoại bản lĩnh",
      description: "Rèn luyện phản xạ tức thì và sự linh hoạt trong môi trường áp lực cao để dẫn dắt mọi cuộc hội thoại.",
      color: "from-orange-500/20 to-red-500/20"
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
            }, index * 300);
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
    <section ref={sectionRef} className="py-16 md:py-24 lg:py-32 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <ScrollTriggerAnimation animation="fadeInUp" delay={200}>
            <TextReveal>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-crimson text-foreground mb-4 leading-tight">
                Mài sắc bộ công cụ giao tiếp
              </h2>
            </TextReveal>
          </ScrollTriggerAnimation>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <ScrollTriggerAnimation 
              key={index} 
              animation={index % 2 === 0 ? 'slideInLeft' : 'slideInRight'}
              delay={index * 200}
              duration={800}
            >
              <ParallaxSection speed={0.3}>
                <InteractiveCard className="h-full" intensity={0.2} glowEffect={true}>
                  <div className={`group p-6 md:p-8 lg:p-10 border-2 border-transparent rounded-2xl transition-all duration-700 ease-out hover:border-primary hover:shadow-2xl hover:shadow-primary/20 bg-gradient-to-br ${pillar.color} backdrop-blur-sm h-full flex flex-col relative overflow-hidden`}>
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <div className="text-center flex-1 flex flex-col relative z-10">
                      <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 md:mb-8 flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-110 transition-all duration-700 ease-out blur-md"></div>
                        <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-125 transition-all duration-700 ease-out delay-100"></div>
                        <pillar.icon 
                          className={`text-primary transition-all duration-1200 relative z-10 group-hover:scale-125 group-hover:rotate-12 ${
                            animateIcons[index] ? 'animate-icon-entrance opacity-100' : 'opacity-0'
                          }`}
                          size={window.innerWidth < 768 ? 32 : 40} 
                          strokeWidth={1.5} 
                        />
                      </div>
                      
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-crimson text-foreground mb-4 md:mb-6 group-hover:text-primary transition-all duration-500 group-hover:scale-105">
                        {pillar.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed font-source flex-1 group-hover:text-foreground/90 transition-all duration-500">
                        {pillar.description}
                      </p>
                    </div>
                    
                    {/* Subtle border glow effect */}
                    <div className="absolute inset-0 rounded-2xl border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </InteractiveCard>
              </ParallaxSection>
            </ScrollTriggerAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheMethod;
