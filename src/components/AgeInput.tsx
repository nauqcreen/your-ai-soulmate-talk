
import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { User, Check } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface AgeInputProps {
  age: string;
  isValidAge: boolean;
  isFocused: boolean;
  isTyping: boolean;
  isLoading: boolean;
  onAgeChange: (e: string) => void;
  onFocus: () => void;
  onBlur: () => void;
}

const AgeInput = ({
  age,
  isValidAge,
  isFocused,
  isTyping,
  isLoading,
  onAgeChange,
  onFocus,
  onBlur
}: AgeInputProps) => {
  const { t } = useLanguage();
  const handleSelectChange = (value: string) => {
    onAgeChange(value);
  };

  return (
    <div className="flex-1 relative group">
      <div className={`absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg blur-lg opacity-0 transition-all duration-700 ${
        isFocused || isValidAge ? 'opacity-100 scale-110' : ''
      }`}></div>
      <div className="relative w-full">        
        <Select onValueChange={handleSelectChange} value={age}>
          <SelectTrigger className={`relative appearance-none w-full h-12 pl-10 text-lg bg-background/80 backdrop-blur-sm border-2 rounded-lg transition-all duration-500 font-source border-input ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm
            ${isFocused ? 'border-primary shadow-lg shadow-primary/20 bg-background' : 'border-border'}
            ${isValidAge ? 'border-green-500 shadow-lg shadow-green-500/20' : ''}
            hover:border-primary/50 hover:shadow-md group-hover:scale-[1.02] disabled:opacity-60`} onFocus={onFocus} onBlur={onBlur}>
            {/* Icon đặt tuyệt đối bên trái */}
            <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 
                    ${isFocused ? 'text-primary scale-110' : 'text-muted-foreground'} ${isTyping ? 'animate-pulse' : ''}`} size={18} />
            
            <SelectValue placeholder={t('form.age.placeholder')} />
          </SelectTrigger>
          <SelectContent className="z-50 bg-background border border-border shadow-lg">
            <SelectItem value="under 23">{t('form.age.under23')}</SelectItem>
            <SelectItem value="23 to 30">{t('form.age.23to30')}</SelectItem>
            <SelectItem value="upper 30">{t('form.age.over30')}</SelectItem>
          </SelectContent>
        </Select>
        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
          isTyping ? 'w-full opacity-100' : 'w-0 opacity-0'
        }`}></div>
      </div>
    </div>
  );
};

export default AgeInput;
