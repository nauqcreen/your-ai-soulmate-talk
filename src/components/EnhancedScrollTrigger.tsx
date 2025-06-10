
import { useEffect, useRef, useState } from 'react';

interface EnhancedScrollTriggerProps {
  children: React.ReactNode;
  className?: string;
  triggerOnce?: boolean;
  threshold?: number;
  rootMargin?: string;
  staggerDelay?: number;
  animationType?: 'slide' | 'fade' | 'scale' | 'rotate' | 'flip';
}

const EnhancedScrollTrigger = ({ 
  children, 
  className = '', 
  triggerOnce = true,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  staggerDelay = 0,
  animationType = 'slide'
}: EnhancedScrollTriggerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
          setTimeout(() => {
            setIsVisible(true);
            setHasTriggered(true);
          }, staggerDelay);
        } else if (!triggerOnce && !entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, hasTriggered, staggerDelay]);

  const getAnimationClasses = () => {
    const baseClass = 'transition-all duration-1000 ease-out transform-gpu';
    
    if (!isVisible) {
      switch (animationType) {
        case 'slide':
          return `${baseClass} opacity-0 translate-y-12 blur-sm scale-95`;
        case 'fade':
          return `${baseClass} opacity-0 blur-md`;
        case 'scale':
          return `${baseClass} opacity-0 scale-75 blur-sm`;
        case 'rotate':
          return `${baseClass} opacity-0 rotate-12 scale-90 blur-sm`;
        case 'flip':
          return `${baseClass} opacity-0 rotateX-90 scale-95 blur-sm`;
        default:
          return `${baseClass} opacity-0`;
      }
    }
    
    return `${baseClass} opacity-100 translate-y-0 scale-100 rotate-0 blur-0`;
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        willChange: 'transform, opacity, filter',
        backfaceVisibility: 'hidden',
        perspective: '1000px'
      }}
    >
      {children}
    </div>
  );
};

export default EnhancedScrollTrigger;
