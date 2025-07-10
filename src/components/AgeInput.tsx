
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AgeInputProps {
  value?: number;
  onChange?: (age: number) => void;
  placeholder?: string;
  label?: string;
  required?: boolean;
  min?: number;
  max?: number;
  className?: string;
}

const AgeInput = ({
  value,
  onChange,
  placeholder = "Nhập tuổi của bạn...",
  label = "Tuổi",
  required = false,
  min = 1,
  max = 120,
  className
}: AgeInputProps) => {
  const [age, setAge] = useState<string>(value?.toString() || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    // Only allow numbers
    if (inputValue === "" || /^\d+$/.test(inputValue)) {
      setAge(inputValue);
      
      if (inputValue !== "" && onChange) {
        const numericAge = parseInt(inputValue);
        if (numericAge >= min && numericAge <= max) {
          onChange(numericAge);
        }
      }
    }
  };

  return (
    <div className={className}>
      {label && (
        <Label htmlFor="age-input" className="text-sm font-medium text-foreground mb-2 block">
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </Label>
      )}
      <Input
        id="age-input"
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={age}
        onChange={handleChange}
        placeholder={placeholder}
        min={min}
        max={max}
        required={required}
        className="font-source"
      />
      {age && (parseInt(age) < min || parseInt(age) > max) && (
        <p className="text-sm text-destructive mt-1">
          Tuổi phải từ {min} đến {max}
        </p>
      )}
    </div>
  );
};

export default AgeInput;
