
import { useState, useEffect, useRef } from "react";
import TextReveal from './TextReveal';

const TheArena = () => {
  const [activeContext, setActiveContext] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const contexts = [
    {
      title: "Thuyết trình & Bảo vệ",
      description: "Bảo vệ dự án tâm huyết mà mình đã chuẩn bị hàng tháng trời. Làm thế nào để màn trình diễn cuối cùng xứng tầm tất cả công sức đó?",
      icon: "🎯"
    },
    {
      title: "Phỏng vấn & Gặp gỡ",
      description: "Năng lực đã được thể hiện hoàn hảo trên giấy tờ. Nhưng trong 30 phút đối thoại, làm sao để bộc lộ hết được tiềm năng con người bạn?",
      icon: "💼"
    },
    {
      title: "Họp nhóm & Tranh luận",
      description: "Một ý kiến trái chiều bất ngờ xuất hiện. Làm thế nào để biến khoảnh khắc não bộ \"đứng hình\" thành một luận điểm phản biện thông minh và tức thì?",
      icon: "🧠"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveContext((prev) => (prev + 1) % contexts.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isVisible, contexts.length]);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-br from-secondary/50 via-background to-secondary/30 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/6 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-float-delayed-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <TextReveal>
            <h2 className="text-3xl md:text-5xl font-bold font-crimson text-foreground mb-6 leading-tight">
              Những khoảnh khắc quyết định
            </h2>
          </TextReveal>
          <TextReveal>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Khi áp lực thời gian gặp phải sự phức tạp của tư duy
            </p>
          </TextReveal>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Context Tabs */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            {contexts.map((context, index) => (
              <button
                key={index}
                onClick={() => setActiveContext(index)}
                onMouseEnter={() => setActiveContext(index)}
                className={`group flex-1 p-6 md:p-8 text-center border-2 rounded-2xl transition-all duration-700 transform relative overflow-hidden ${
                  activeContext === index
                    ? 'border-primary bg-gradient-to-br from-background via-background to-primary/5 text-foreground shadow-2xl shadow-primary/20 scale-105 -translate-y-2'
                    : 'border-border/30 bg-background/70 text-muted-foreground hover:border-primary/40 hover:bg-background/90 hover:scale-102 hover:-translate-y-1'
                }`}
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                  activeContext === index ? 'opacity-30' : ''
                }`}></div>
                
                {/* Icon with animation */}
                <div className={`text-4xl mb-4 transition-all duration-500 relative z-10 ${
                  activeContext === index ? 'scale-125 animate-gentle-bounce-enhanced' : 'scale-100 group-hover:scale-110'
                }`}>
                  {context.icon}
                </div>
                
                <h3 className="font-crimson font-semibold text-lg md:text-xl mb-3 relative z-10 transition-all duration-300 group-hover:text-primary">
                  {context.title}
                </h3>
                
                {/* Enhanced progress indicator */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent transition-all duration-700 ${
                  activeContext === index ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-1/3 group-hover:opacity-60'
                }`}></div>
                
                {/* Subtle corner accents */}
                <div className={`absolute top-4 right-4 w-2 h-2 bg-primary rounded-full transition-all duration-500 ${
                  activeContext === index ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}></div>
                <div className={`absolute bottom-4 left-4 w-1 h-1 bg-accent rounded-full transition-all duration-700 delay-150 ${
                  activeContext === index ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}></div>
              </button>
            ))}
          </div>

          {/* Enhanced Active Context Content */}
          <div className="relative">
            <div className="bg-gradient-to-br from-background/95 via-background to-primary/5 p-8 md:p-12 border border-border/50 rounded-2xl shadow-2xl backdrop-blur-sm relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-xl"></div>
              
              <div 
                key={activeContext}
                className="relative z-10 animate-fade-in-up-enhanced"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl animate-gentle-bounce-enhanced">
                    {contexts[activeContext].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-crimson font-bold text-foreground mb-2">
                      {contexts[activeContext].title}
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  </div>
                </div>
                
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-source">
                  {contexts[activeContext].description}
                </p>
                
                {/* Progress dots */}
                <div className="flex justify-center gap-3 mt-8">
                  {contexts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveContext(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-500 ${
                        activeContext === index
                          ? 'bg-primary scale-125 shadow-lg shadow-primary/50'
                          : 'bg-border hover:bg-primary/50 hover:scale-110'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheArena;
