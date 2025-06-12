
import { useState } from "react";
import { Send } from "lucide-react";
import MagneticButton from './MagneticButton';

interface SubmitButtonProps {
  isValidEmail: boolean;
  isLoading: boolean;
}

const SubmitButton = ({ isValidEmail, isLoading }: SubmitButtonProps) => {
  const [buttonHovered, setButtonHovered] = useState(false);

  return (
    <div className="relative group">
      <div className={`absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-lg blur-lg opacity-0 transition-all duration-700 ${
        buttonHovered || isValidEmail ? 'opacity-60 scale-110' : ''
      }`}></div>
      
      <MagneticButton 
        type="submit"
        disabled={!isValidEmail || isLoading}
        onMouseEnter={() => setButtonHovered(true)}
        onMouseLeave={() => setButtonHovered(false)}
        className={`relative z-10 bg-primary text-primary-foreground text-lg px-8 py-3 h-12 whitespace-nowrap transition-all duration-500 font-source overflow-hidden group/btn
          ${isValidEmail && !isLoading ? 'hover:bg-primary/90 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-primary/30' : 'opacity-50 cursor-not-allowed'}
          ${buttonHovered && isValidEmail && !isLoading ? 'animate-pulse' : ''}
        `}
      >
        <div className="flex items-center gap-2 relative z-10">
          <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
            {isLoading ? 'Đang xử lý...' : 'Nhận thông tin dự án'}
          </span>
          {!isLoading && (
            <Send className={`transition-all duration-300 ${
              buttonHovered && isValidEmail ? 'translate-x-1 scale-110' : ''
            }`} size={16} />
          )}
        </div>
        
        {/* Button glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 ${
          isValidEmail && !isLoading ? '' : 'hidden'
        }`}></div>
        
        {/* Particle burst effect on hover */}
        <div className={`absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 ${
          isValidEmail && !isLoading ? '' : 'hidden'
        }`}>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/60 rounded-full animate-ping"
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1s'
              }}
            ></div>
          ))}
        </div>
      </MagneticButton>
    </div>
  );
};

export default SubmitButton;
