
import { useRef, useEffect, useState } from 'react';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glowEffect?: boolean;
}

const InteractiveCard = ({ 
  children, 
  className = '', 
  intensity = 0.15,
  glowEffect = true 
}: InteractiveCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered) return;
      
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      
      const rotateX = (y / rect.height) * intensity * 25;
      const rotateY = -(x / rect.width) * intensity * 25;
      
      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(15px) scale(1.02)`;
      
      if (glowEffect) {
        card.style.boxShadow = `${x * 0.1}px ${y * 0.1}px 30px rgba(184, 115, 51, 0.3)`;
      }
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      card.style.transition = 'transform 0.1s ease-out, box-shadow 0.2s ease-out';
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      card.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.6s ease-out';
      card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)';
      card.style.boxShadow = 'none';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovered, intensity, glowEffect]);

  return (
    <div
      ref={cardRef}
      className={`interactive-card transform-gpu will-change-transform relative overflow-hidden ${className}`}
    >
      {glowEffect && isHovered && (
        <div 
          className="absolute pointer-events-none opacity-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, rgba(184, 115, 51, 0.3), transparent)`,
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
          }}
        />
      )}
      {children}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

export default InteractiveCard;
