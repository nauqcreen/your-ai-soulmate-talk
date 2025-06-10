
import { useRef, useEffect, useState } from 'react';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

const InteractiveCard = ({ children, className = '', intensity = 0.1 }: InteractiveCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered) return;
      
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const rotateX = (y / rect.height) * intensity * 20;
      const rotateY = -(x / rect.width) * intensity * 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      card.style.transition = 'transform 0.1s ease-out';
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      card.style.transition = 'transform 0.3s ease-out';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovered, intensity]);

  return (
    <div
      ref={cardRef}
      className={`interactive-card transform-gpu will-change-transform ${className}`}
    >
      {children}
    </div>
  );
};

export default InteractiveCard;
