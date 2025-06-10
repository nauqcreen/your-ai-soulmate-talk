
import { useEffect, useRef } from 'react';

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

const FloatingElements = ({ count = 6, className = '' }: FloatingElementsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.children;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      Array.from(elements).forEach((element, index) => {
        const htmlElement = element as HTMLElement;
        const speed = (index + 1) * 0.02;
        const x = (clientX / innerWidth - 0.5) * 100 * speed;
        const y = (clientY / innerHeight - 0.5) * 100 * speed;
        
        htmlElement.style.transform = `translate(${x}px, ${y}px) rotate(${x * 0.1}deg)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`} style={{ zIndex: 1 }}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 bg-primary/20 rounded-full blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
