import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Check } from "lucide-react";

interface EmailInputProps {
  email: string;
  isValidEmail: boolean;
  isFocused: boolean;
  isTyping: boolean;
  isLoading: boolean;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
}

const EmailInput = ({
  email,
  isValidEmail,
  isFocused,
  isTyping,
  isLoading,
  onEmailChange,
  onFocus,
  onBlur
}: EmailInputProps) => {
  const { t } = useLanguage();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex-1 relative group">
      <div className={`absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg blur-lg opacity-0 transition-all duration-700 ${
        isFocused || isValidEmail ? 'opacity-100 scale-110' : ''
      }`}></div>
      
      <div className="relative">
        <Input
          ref={inputRef}
          type="email"
          placeholder={t('form.email.placeholder')}
          value={email}
          onChange={onEmailChange}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={isLoading}
          className={`pl-10 pr-10 h-12 text-lg bg-background/80 backdrop-blur-sm border-2 transition-all duration-500 font-source
            ${isFocused ? 'border-primary shadow-lg shadow-primary/20 bg-background' : 'border-border'}
            ${isValidEmail ? 'border-green-500 shadow-lg shadow-green-500/20' : ''}
            hover:border-primary/50 hover:shadow-md group-hover:scale-[1.02]
          `}
          required
        />
        <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
          isFocused ? 'text-primary scale-110' : 'text-muted-foreground'
        } ${isTyping ? 'animate-pulse' : ''}`} size={18} />
        
        <div className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
          isValidEmail ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}>
          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
            <Check size={12} className="text-white" />
          </div>
        </div>
        
        {/* Typing indicator */}
        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
          isTyping ? 'w-full opacity-100' : 'w-0 opacity-0'
        }`}></div>
      </div>
    </div>
  );
};

export default EmailInput;
