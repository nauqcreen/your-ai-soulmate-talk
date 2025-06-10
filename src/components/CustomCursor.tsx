
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners for mouse movement
    window.addEventListener('mousemove', updateMousePosition);

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], .hover-cursor');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      id="custom-cursor"
      className={`fixed pointer-events-none z-50 rounded-full transition-all duration-150 ease-out ${
        isHovering ? 'w-10 h-10 bg-primary/10 border-2 border-primary/60' : 'w-5 h-5 bg-primary/30'
      }`}
      style={{
        left: mousePosition.x - (isHovering ? 20 : 10),
        top: mousePosition.y - (isHovering ? 20 : 10),
      }}
    />
  );
};

export default CustomCursor;
