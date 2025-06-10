
import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  magneticRadius?: number;
  intensity?: number;
}

const MagneticButton = ({ 
  children, 
  className = '', 
  onClick, 
  onMouseEnter,
  onMouseLeave,
  type = 'button', 
  disabled = false,
  magneticRadius = 100,
  intensity = 0.5
}: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (disabled) return;
      
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const distance = Math.sqrt(x * x + y * y);
      
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      
      if (distance < magneticRadius && isHovered) {
        const force = (magneticRadius - distance) / magneticRadius;
        const translateX = x * force * intensity;
        const translateY = y * force * intensity;
        
        button.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.05) rotateX(${y * 0.1}deg) rotateY(${x * 0.1}deg)`;
        button.style.boxShadow = `${translateX * 0.5}px ${translateY * 0.5}px 20px rgba(0,0,0,0.2)`;
      } else if (!isHovered) {
        button.style.transform = 'translate(0px, 0px) scale(1) rotateX(0deg) rotateY(0deg)';
        button.style.boxShadow = 'none';
      }
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      button.style.transition = 'transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.15s ease-out';
      onMouseEnter?.();
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      button.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.6s ease-out';
      button.style.transform = 'translate(0px, 0px) scale(1) rotateX(0deg) rotateY(0deg)';
      button.style.boxShadow = 'none';
      onMouseLeave?.();
    };

    const handleClick = (e: MouseEvent) => {
      if (disabled) return;
      
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const newRipple = { id: Date.now(), x, y };
      setRipples(prev => [...prev, newRipple]);
      
      // Enhanced click animation
      button.style.transform = 'translate(0px, 0px) scale(0.95) rotateX(0deg) rotateY(0deg)';
      setTimeout(() => {
        if (isHovered) {
          const rect = button.getBoundingClientRect();
          const currentX = mousePosition.x - rect.width / 2;
          const currentY = mousePosition.y - rect.height / 2;
          const distance = Math.sqrt(currentX * currentX + currentY * currentY);
          
          if (distance < magneticRadius) {
            const force = (magneticRadius - distance) / magneticRadius;
            button.style.transform = `translate(${currentX * force * intensity}px, ${currentY * force * intensity}px) scale(1.05) rotateX(${currentY * 0.1}deg) rotateY(${currentX * 0.1}deg)`;
          }
        }
      }, 100);
      
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 800);
    };

    window.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);
    button.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.removeEventListener('click', handleClick);
    };
  }, [isHovered, disabled, magneticRadius, intensity, mousePosition, onMouseEnter, onMouseLeave]);

  return (
    <Button
      ref={buttonRef}
      className={`magnetic-button relative overflow-hidden transform-gpu will-change-transform ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute pointer-events-none animate-ripple-enhanced"
          style={{
            left: ripple.x - 35,
            top: ripple.y - 35,
            width: 70,
            height: 70,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </Button>
  );
};

export default MagneticButton;
