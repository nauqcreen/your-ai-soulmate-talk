
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AddressInputProps {
  value?: string;
  onChange?: (address: string) => void;
  placeholder?: string;
  label?: string;
  required?: boolean;
  maxLength?: number;
  className?: string;
}

const AddressInput = ({
  value,
  onChange,
  placeholder = "Nhập địa chỉ của bạn...",
  label = "Địa chỉ",
  required = false,
  maxLength = 255,
  className
}: AddressInputProps) => {
  const [address, setAddress] = useState<string>(value || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    if (inputValue.length <= maxLength) {
      setAddress(inputValue);
      
      if (onChange) {
        onChange(inputValue);
      }
    }
  };

  return (
    <div className={className}>
      {label && (
        <Label htmlFor="address-input" className="text-sm font-medium text-foreground mb-2 block">
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </Label>
      )}
      <Input
        id="address-input"
        type="text"
        value={address}
        onChange={handleChange}
        placeholder={placeholder}
        maxLength={maxLength}
        required={required}
        className="font-source"
      />
      {address.length > maxLength * 0.9 && (
        <p className="text-sm text-muted-foreground mt-1">
          {maxLength - address.length} ký tự còn lại
        </p>
      )}
    </div>
  );
};

export default AddressInput;
