
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [showScrollHint, setShowScrollHint] = useState(false);
  const mainTitle = "Ý Tưởng Của Bạn Thực Sự Trị Giá Bao Nhiêu?";
  const subtitle = "Khi nó được trình bày một cách thuyết phục.";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollHint(true);
    }, 3000); // Show scroll hint after 3 seconds

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollHint(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-cormorant mb-8 text-foreground leading-tight">
          {mainTitle.split('').map((char, index) => (
            <span
              key={index}
              className="inline-block animate-char-fade-in opacity-0"
              style={{
                animationDelay: `${index * 0.03}s`,
                animationFillMode: 'forwards'
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        
        <p 
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up opacity-0 font-inter" 
          style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}
        >
          {subtitle}
        </p>
      </div>
      
      {/* Scroll hint chevron */}
      <div 
        className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
          showScrollHint ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <ChevronDown 
          size={20} 
          className="text-muted-foreground animate-gentle-bounce stroke-1" 
        />
      </div>
    </section>
  );
};

export default Hero;
