
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [showScrollHint, setShowScrollHint] = useState(false);
  const mainTitle = "Trí tuệ của bạn xứng đáng có một giọng nói tương xứng.";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollHint(true);
      } else {
        setShowScrollHint(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-lora mb-8 text-foreground leading-tight">
          {mainTitle.split('').map((char, index) => (
            <span
              key={index}
              className="inline-block animate-fade-in opacity-0"
              style={{
                animationDelay: `${index * 0.05}s`,
                animationFillMode: 'forwards'
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
          Tinktalk là người bạn đồng hành AI, giúp bạn biến những suy nghĩ sắc bén thành sức mạnh giao tiếp thuyết phục.
        </p>
      </div>
      
      {/* Scroll hint arrow */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
          showScrollHint ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <ArrowDown 
          size={20} 
          className="text-muted-foreground animate-bounce" 
        />
      </div>
    </section>
  );
};

export default Hero;
