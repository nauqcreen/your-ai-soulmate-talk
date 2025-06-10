
import { useEffect, useRef, useState } from 'react';

interface ScrollTriggerAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn' | 'rotateIn';
  delay?: number;
  duration?: number;
}

const ScrollTriggerAnimation = ({ 
  children, 
  className = '', 
  animation = 'fadeInUp',
  delay = 0,
  duration = 600
}: ScrollTriggerAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible, delay]);

  const getAnimationClasses = () => {
    const baseClasses = `transition-all ease-out`;
    const durationClass = `duration-[${duration}ms]`;
    
    if (!isVisible) {
      switch (animation) {
        case 'fadeInUp':
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8 blur-sm`;
        case 'slideInLeft':
          return `${baseClasses} ${durationClass} opacity-0 -translate-x-8 blur-sm`;
        case 'slideInRight':
          return `${baseClasses} ${durationClass} opacity-0 translate-x-8 blur-sm`;
        case 'scaleIn':
          return `${baseClasses} ${durationClass} opacity-0 scale-95 blur-sm`;
        case 'rotateIn':
          return `${baseClasses} ${durationClass} opacity-0 rotate-3 scale-95 blur-sm`;
        default:
          return `${baseClasses} ${durationClass} opacity-0`;
      }
    }
    
    return `${baseClasses} ${durationClass} opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0 blur-0`;
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollTriggerAnimation;
