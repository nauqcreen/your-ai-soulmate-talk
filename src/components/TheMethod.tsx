
import { Brain, MessageSquare, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import TextReveal from './TextReveal';

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
          // Trigger icon animations with staggered delays
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
    <section ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <TextReveal>
            <h2 className="text-3xl md:text-5xl font-bold font-cormorant text-foreground mb-4">
              Mài Sắc Công Cụ Của Bạn.
            </h2>
          </TextReveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="group p-8 border-2 border-transparent transition-all duration-300 ease-out hover:border-primary hover-lift hover-cursor"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <pillar.icon 
                    className={`text-primary transition-all duration-1000 ${
                      animateIcons[index] ? 'svg-draw' : 'opacity-0'
                    }`}
                    size={40} 
                    strokeWidth={1.5} 
                  />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold font-cormorant text-foreground mb-6">
                  {pillar.title}
                </h3>
                
                <p className="text-base md:text-lg text-foreground leading-relaxed font-satoshi">
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

export default TheMethod;
