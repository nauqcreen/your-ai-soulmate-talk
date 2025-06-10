import { ChevronDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import ParallaxSection from './ParallaxSection';
import FloatingElements from './FloatingElements';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
  const [showScrollHint, setShowScrollHint] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const mainTitle = "Ý tưởng của bạn thực sự trị giá bao nhiêu?";
  const subtitle = "Khi nó được trình bày một cách thuyết phục";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollHint(true);
    }, 3000);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollHint(false);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <AnimatedBackground />
      <FloatingElements />
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-primary/5 rounded-full blur-3xl animate-float-slow"
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
            filter: 'blur(40px)',
          }}
        ></div>
        <div 
          className="absolute top-3/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-secondary/30 rounded-full blur-3xl animate-float-delayed-slow"
          style={{
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
            filter: 'blur(60px)',
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 w-24 h-24 md:w-48 md:h-48 bg-primary/10 rounded-full blur-2xl animate-pulse-slow"
          style={{
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
            filter: 'blur(30px)',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl relative z-10">
        <ParallaxSection speed={0.2}>
          <div className="relative">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold font-crimson mb-6 md:mb-8 text-foreground leading-tight relative">
              <div className="inline-block w-full relative">
                {mainTitle.split('').map((char, index) => (
                  <span
                    key={index}
                    className="inline-block animate-char-fade-in-enhanced opacity-0 hover:text-primary transition-all duration-500 hover:scale-110 hover:drop-shadow-glow relative z-10"
                    style={{
                      animationDelay: `${index * 0.05}s`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </div>
            </h1>
          </div>
        </ParallaxSection>
        
        <ParallaxSection speed={0.4}>
          <p 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up-enhanced opacity-0 font-source hover:text-foreground transition-all duration-700 hover:scale-105" 
            style={{ animationDelay: '2s', animationFillMode: 'forwards' }}
          >
            {subtitle}
          </p>
        </ParallaxSection>
      </div>
      
      {/* Enhanced scroll hint with advanced micro-interactions */}
      <div 
        className={`absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 cursor-pointer group ${
          showScrollHint ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="relative">
          <div className="w-6 h-10 md:w-8 md:h-12 border-2 border-muted-foreground rounded-full flex justify-center group-hover:border-primary transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:scale-110">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-scroll-bounce-enhanced group-hover:bg-primary transition-all duration-500"></div>
          </div>
          <ChevronDown 
            size={20} 
            className="text-muted-foreground animate-gentle-bounce-enhanced stroke-1 mt-2 mx-auto group-hover:text-primary transition-all duration-500 group-hover:scale-125" 
          />
          <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 blur-md opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
