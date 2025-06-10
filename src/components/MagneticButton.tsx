
import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const MagneticButton = ({ children, className = '', onClick, type = 'button', disabled = false }: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (disabled) return;
      
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const distance = Math.sqrt(x * x + y * y);
      
      const magneticRadius = 80;
      
      if (distance < magneticRadius && isHovered) {
        const force = (magneticRadius - distance) / magneticRadius;
        const translateX = x * force * 0.4;
        const translateY = y * force * 0.4;
        
        button.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.05)`;
      } else if (!isHovered) {
        button.style.transform = 'translate(0px, 0px) scale(1)';
      }
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      button.style.transition = 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      button.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      button.style.transform = 'translate(0px, 0px) scale(1)';
    };

    const handleClick = (e: MouseEvent) => {
      if (disabled) return;
      
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const newRipple = { id: Date.now(), x, y };
      setRipples(prev => [...prev, newRipple]);
      
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 600);
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
  }, [isHovered, disabled]);

  return (
    <Button
      ref={buttonRef}
      className={`magnetic-button relative overflow-hidden ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute pointer-events-none animate-ripple"
          style={{
            left: ripple.x - 25,
            top: ripple.y - 25,
            width: 50,
            height: 50,
          }}
        />
      ))}
    </Button>
  );
};

export default MagneticButton;
