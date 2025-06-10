
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
  type: 'normal' | 'star' | 'triangle';
  pulse: number;
  trail: Array<{ x: number; y: number; opacity: number }>;
}

const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const mouseVelocityRef = useRef({ x: 0, y: 0 });
  const lastMouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.min(60, Math.floor(window.innerWidth / 25));
      
      for (let i = 0; i < particleCount; i++) {
        const types: Array<'normal' | 'star' | 'triangle'> = ['normal', 'star', 'triangle'];
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 2.5 + 1.5,
          opacity: Math.random() * 0.6 + 0.3,
          hue: Math.random() * 60 + 10, // Warmer orange/yellow range
          type: types[Math.floor(Math.random() * types.length)],
          pulse: Math.random() * Math.PI * 2,
          trail: []
        });
      }
      return particles;
    };

    const drawParticle = (particle: Particle) => {
      // Update trail
      particle.trail.push({ x: particle.x, y: particle.y, opacity: particle.opacity });
      if (particle.trail.length > 8) {
        particle.trail.shift();
      }

      // Draw trail
      particle.trail.forEach((point, index) => {
        const trailOpacity = (index / particle.trail.length) * point.opacity * 0.3;
        const trailSize = particle.size * (index / particle.trail.length) * 0.5;
        
        ctx.beginPath();
        ctx.arc(point.x, point.y, trailSize, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 70%, 50%, ${trailOpacity})`;
        ctx.fill();
      });

      // Pulse effect
      particle.pulse += 0.1;
      const pulseSize = particle.size + Math.sin(particle.pulse) * 0.5;
      const pulseOpacity = particle.opacity + Math.sin(particle.pulse) * 0.2;

      // Draw main particle based on type
      ctx.save();
      ctx.translate(particle.x, particle.y);
      
      switch (particle.type) {
        case 'star':
          drawStar(ctx, 0, 0, 5, pulseSize * 1.2, pulseSize * 0.6);
          ctx.fillStyle = `hsla(${particle.hue}, 80%, 60%, ${pulseOpacity})`;
          ctx.fill();
          break;
          
        case 'triangle':
          drawTriangle(ctx, 0, 0, pulseSize * 1.5);
          ctx.fillStyle = `hsla(${particle.hue}, 70%, 55%, ${pulseOpacity})`;
          ctx.fill();
          break;
          
        default:
          // Normal circle with glow
          ctx.beginPath();
          ctx.arc(0, 0, pulseSize, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${particle.hue}, 75%, 55%, ${pulseOpacity})`;
          ctx.fill();
          
          // Outer glow
          ctx.beginPath();
          ctx.arc(0, 0, pulseSize * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${particle.hue}, 80%, 60%, ${pulseOpacity * 0.2})`;
          ctx.fill();
      }
      
      ctx.restore();
    };

    const drawStar = (ctx: CanvasRenderingContext2D, cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number) => {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);

      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }

      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
    };

    const drawTriangle = (ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number) => {
      ctx.beginPath();
      ctx.moveTo(cx, cy - size);
      ctx.lineTo(cx - size, cy + size);
      ctx.lineTo(cx + size, cy + size);
      ctx.closePath();
    };

    const connectParticles = (particles: Particle[]) => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const opacity = (150 - distance) / 150 * 0.5;
            const gradient = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
            gradient.addColorStop(0, `hsla(${particles[i].hue}, 70%, 50%, ${opacity})`);
            gradient.addColorStop(1, `hsla(${particles[j].hue}, 70%, 50%, ${opacity})`);
            
            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = Math.max(0.5, (150 - distance) / 150 * 2);
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate mouse velocity
      mouseVelocityRef.current.x = mouseRef.current.x - lastMouseRef.current.x;
      mouseVelocityRef.current.y = mouseRef.current.y - lastMouseRef.current.y;
      lastMouseRef.current = { ...mouseRef.current };
      
      particlesRef.current.forEach(particle => {
        // Mouse attraction with repulsion when moving fast
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const mouseSpeed = Math.sqrt(mouseVelocityRef.current.x ** 2 + mouseVelocityRef.current.y ** 2);
        
        if (distance < 200) {
          const force = (200 - distance) / 200 * 0.05;
          const repulsion = mouseSpeed > 10 ? 2 : 1;
          
          if (mouseSpeed > 10) {
            // Repel when mouse moves fast
            particle.vx -= (dx / distance) * force * repulsion;
            particle.vy -= (dy / distance) * force * repulsion;
          } else {
            // Attract when mouse moves slow
            particle.vx += (dx / distance) * force * 0.5;
            particle.vy += (dy / distance) * force * 0.5;
          }
        }
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Smooth boundary bouncing
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.8;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.8;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }
        
        // Gentle drift towards center
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        particle.vx += (centerX - particle.x) * 0.0002;
        particle.vy += (centerY - particle.y) * 0.0002;
        
        // Friction
        particle.vx *= 0.995;
        particle.vy *= 0.995;
        
        // Slight hue shift over time
        particle.hue += 0.1;
        if (particle.hue > 70) particle.hue = 10;
        
        drawParticle(particle);
      });
      
      connectParticles(particlesRef.current);
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleClick = (e: MouseEvent) => {
      // Add burst effect on click
      for (let i = 0; i < 8; i++) {
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 8,
          size: Math.random() * 3 + 2,
          opacity: 0.8,
          hue: Math.random() * 60 + 10,
          type: Math.random() > 0.7 ? 'star' : 'normal',
          pulse: 0,
          trail: []
        });
      }
      
      // Remove excess particles
      if (particlesRef.current.length > 100) {
        particlesRef.current.splice(0, particlesRef.current.length - 100);
      }
    };

    resizeCanvas();
    particlesRef.current = createParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default ParticleField;
