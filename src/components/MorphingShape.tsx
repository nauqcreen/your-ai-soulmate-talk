
import { useEffect, useRef } from 'react';

const MorphingShape = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    let time = 0;
    
    const animate = () => {
      time += 0.02;
      
      if (pathRef.current) {
        const amplitude = 50;
        const frequency = 0.02;
        
        const path = `
          M 100,200 
          C ${150 + Math.sin(time) * amplitude},${100 + Math.cos(time * 1.5) * 30} 
            ${250 + Math.cos(time * 1.2) * amplitude},${100 + Math.sin(time * 0.8) * 30} 
            300,200
          C ${250 + Math.sin(time * 0.9) * amplitude},${300 + Math.cos(time * 1.1) * 30}
            ${150 + Math.cos(time * 1.3) * amplitude},${300 + Math.sin(time * 1.4) * 30}
            100,200 Z
        `;
        
        pathRef.current.setAttribute('d', path);
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed top-1/4 right-1/4 w-64 h-64 opacity-20 pointer-events-none z-[1]">
      <svg width="400" height="400" viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          <linearGradient id="morphGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path
          ref={pathRef}
          fill="url(#morphGradient)"
          filter="url(#glow)"
          className="animate-pulse-slow"
        />
      </svg>
    </div>
  );
};

export default MorphingShape;
