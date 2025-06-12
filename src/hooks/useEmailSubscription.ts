
import { useState, useRef, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const useEmailSubscription = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const typingTimer = useRef<NodeJS.Timeout>();
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
    setIsTyping(true);
    
    // Clear existing timer
    if (typingTimer.current) {
      clearTimeout(typingTimer.current);
    }
    
    // Set new timer
    typingTimer.current = setTimeout(() => {
      setIsTyping(false);
    }, 800);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail || isLoading) return;

    setIsLoading(true);
    
    try {
      const { error } = await supabase
        .from('email_subscribers')
        .insert([
          { 
            email: email.toLowerCase().trim(),
            source: 'empowerment-section'
          }
        ]);

      if (error) {
        if (error.code === '23505') { // Duplicate email
          toast({
            title: "Chúng tôi đã ghi nhận email này",
            description: "Bạn sẽ nhận được thông tin ngay khi Tinktalk ra mắt.",
            variant: "default",
          });
        } else {
          throw error;
        }
      } else {
        setIsSubmitted(true);
        toast({
          title: "Chào mừng bạn đến với cộng đồng Tinktalk",
          description: "Chúng tôi sẽ gửi thông tin độc quyền cho bạn sớm nhất.",
        });
      }
    } catch (error) {
      console.error('Error saving email:', error);
      toast({
        title: "Không thể hoàn tất đăng ký",
        description: "Xin lỗi vì sự bất tiện. Vui lòng thử lại sau ít phút.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (typingTimer.current) {
        clearTimeout(typingTimer.current);
      }
    };
  }, []);

  return {
    email,
    isSubmitted,
    isValidEmail,
    isFocused,
    setIsFocused,
    isTyping,
    isLoading,
    handleEmailChange,
    handleSubmit
  };
};
