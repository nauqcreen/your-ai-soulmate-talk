
import { useRef, useEffect } from 'react';
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

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const distance = Math.sqrt(x * x + y * y);
      
      // Magnetic effect radius
      const magneticRadius = 60;
      
      if (distance < magneticRadius) {
        const force = (magneticRadius - distance) / magneticRadius;
        const translateX = x * force * 0.3;
        const translateY = y * force * 0.3;
        
        button.style.transform = `translate(${translateX}px, ${translateY}px)`;
      } else {
        button.style.transform = 'translate(0px, 0px)';
      }
    };

    const handleMouseLeave = () => {
      button.style.transform = 'translate(0px, 0px)';
    };

    window.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Button
      ref={buttonRef}
      className={`magnetic-button hover-cursor ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default MagneticButton;
