
import { useRef, useState } from "react";
import { Input } from "./ui/input";
import { Check, MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface AddressInputProps {
  address: string;
  isValidAddress: boolean;
  isFocused: boolean;
  isTyping: boolean;
  isLoading: boolean;
  onAddressChange: (e: React.ChangeEvent<HTMLInputElement> | string) => void;
  onFocus: () => void;
  onBlur: () => void;
}

const AddressInput = ({
  address,
  isValidAddress,
  isFocused,
  isTyping,
  isLoading,
  onAddressChange,
  onFocus,
  onBlur
}: AddressInputProps) => {
  const [showOtherInput, setShowOtherInput] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSelectChange = (value: string) => {
    requestAnimationFrame(() => {
      if (value === "others") {
        setShowOtherInput(true);
        onAddressChange(""); // Clear the address when showing "others" input
      } else {
        setShowOtherInput(false);
        onAddressChange(value);
      }
    });
  };

  return (
    <div className="flex-1 relative group mr-2">
      <div className={`absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg blur-lg opacity-0 transition-all duration-700 ${isFocused || isValidAddress ? 'opacity-100 scale-110' : ''
        }`}></div>
      <div className="relative w-full mb-3">
        <Select onValueChange={handleSelectChange} value={showOtherInput ? "others" : address}>
          <SelectTrigger className={`relative appearance-none w-full h-12 pl-10 text-lg bg-background/80 backdrop-blur-sm border-2 rounded-lg transition-all duration-500 font-source border-input ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm
            ${isFocused ? 'border-primary shadow-lg shadow-primary/20 bg-background' : 'border-border'}
            ${isValidAddress ? 'border-green-500 shadow-lg shadow-green-500/20' : ''}
            hover:border-primary/50 hover:shadow-md group-hover:scale-[1.02] disabled:opacity-60`} onFocus={onFocus} onBlur={onBlur}>
            {/* Icon đặt tuyệt đối bên trái */}
            <MapPin className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 
                    ${isFocused ? 'text-primary scale-110' : 'text-muted-foreground'}`} size={18} />
            
            <SelectValue placeholder="Chọn địa chỉ" />
          </SelectTrigger>
          <SelectContent className="z-50 bg-background border border-border shadow-lg">
            <SelectItem value="hanoi">Hà Nội</SelectItem>
            <SelectItem value="others">Khác</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {showOtherInput && (
        <div className="relative w-ful">
          <MapPin className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 
            ${isFocused ? 'text-primary scale-110' : 'text-muted-foreground'} 
            ${isTyping ? 'animate-pulse' : ''}`} size={18} />

          <Input
            ref={inputRef}
            type="text"
            placeholder="Nhập địa chỉ của bạn..."
            value={address}
            onChange={onAddressChange}
            onFocus={onFocus}
            onBlur={onBlur}
            disabled={isLoading}
            className={`pl-10 pr-10 h-12 text-lg bg-background/80 backdrop-blur-sm border-2 transition-all duration-500 font-source
            ${isFocused ? 'border-primary shadow-lg shadow-primary/20 bg-background' : 'border-border'}
            ${isValidAddress ? 'border-green-500 shadow-lg shadow-green-500/20' : ''}
            hover:border-primary/50 hover:shadow-md group-hover:scale-[1.02]
          `}
            required
          />

          <MapPin className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 
            ${isFocused ? 'text-primary scale-110' : 'text-muted-foreground'} 
            ${isTyping ? 'animate-pulse' : ''}`} size={18} />

          <div className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${isValidAddress ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}>
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
              <Check size={12} className="text-white" />
            </div>
          </div>

          {/* Typing indicator */}
          <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${isTyping ? 'w-full opacity-100' : 'w-0 opacity-0'
            }`}></div>
        </div>
      )}
    </div>
  );
};

export default AddressInput;
