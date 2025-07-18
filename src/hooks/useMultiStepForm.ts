import { useState, useRef, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

type Step = "email" | "age" | "address" | "submitted";

export const useMultiStepForm = () => {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const typingTimer = useRef<NodeJS.Timeout>();
  const { toast } = useToast();

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidAge = ["under 23", "23 to 30", "upper 30"].includes(age);
  const isValidAddress = address.trim().length >= 3;

  const isFormValid = isValidEmail && isValidAge && isValidAddress;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    resetTyping();
  };

  const handleAgeChange = (value: string) => {
    setAge(value);
  };

  const handleAddressChange = (
    e: React.ChangeEvent<HTMLInputElement> | string
  ) => {
    if (typeof e === "string") {
      // Trường hợp người dùng chọn trong Select
      if (e === "others") {
        setAddress(""); // Show input text field, bắt đầu với rỗng
      } else {
        setAddress(e); // Chọn địa chỉ cố định (VD: "hanoi")
      }
    } else {
      // Trường hợp người dùng gõ tay trong input
      const value = e.target.value;
      setAddress(value);
    }
  };

  const resetTyping = () => {
    setIsTyping(true);
    if (typingTimer.current) clearTimeout(typingTimer.current);
    typingTimer.current = setTimeout(() => setIsTyping(false), 800);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    // Tạm thời chỉ cần email, bỏ qua age và address steps
    if (step === "email" && isValidEmail) {
      setIsLoading(true);

      try {
        const { error } = await supabase
          .from("email_subscribers")
          .insert([
            {
              email: email.toLowerCase().trim(),
              // age: parseInt(age, 10), // Tạm thời comment out
              // address: address.trim(), // Tạm thời comment out
              source: "empowerment-section",
            },
          ]);

        if (error) {
          if (error.code === "23505") {
            toast({
              title: "Chúng tôi đã ghi nhận email này",
              description: "Bạn sẽ nhận được thông tin ngay khi Tinktalk ra mắt.",
              variant: "default"
            });
          } else throw error;
        } else {
          setStep("submitted");
          toast({
            title: "Chào mừng bạn đến với cộng đồng Tinktalk",
            description: "Chúng tôi sẽ gửi thông tin độc quyền cho bạn sớm nhất.",
          });
        }
      } catch (err) {
        toast({
          title: "Không thể hoàn tất đăng ký",
          description: "Xin lỗi vì sự bất tiện. Vui lòng thử lại sau ít phút.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
      return;
    }

    // Tạm thời comment out age và address steps
    // if (step === "age" && isValidAge) {
    //   setIsLoading(true);
    //   setTimeout(() => {
    //     setStep("address");
    //     setIsLoading(false);
    //   }, 500);
    //   return;
    // }

    // if (step === "address" && isFormValid) {
    //   setIsLoading(true);

    //   try {
    //     const { error } = await supabase
    //       .from("email_subscribers")
    //       .insert([
    //         {
    //           email: email.toLowerCase().trim(),
    //           age: parseInt(age, 10),
    //           address: address.trim(),
    //           source: "empowerment-section",
    //         },
    //       ]);

    //     if (error) {
    //       if (error.code === "23505") {
    //         toast({
    //           title: "Chúng tôi đã ghi nhận email này",
    //           description: "Bạn sẽ nhận được thông tin ngay khi Tinktalk ra mắt.",
    //           variant: "default"
    //         });
    //       } else throw error;
    //     } else {
    //       setStep("submitted");
    //       toast({
    //         title: "Chào mừng bạn đến với cộng đồng Tinktalk",
    //         description: "Chúng tôi sẽ gửi thông tin độc quyền cho bạn sớm nhất.",
    //       });
    //     }
    //   } catch (err) {
    //     toast({
    //       title: "Không thể hoàn tất đăng ký",
    //       description: "Xin lỗi vì sự bất tiện. Vui lòng thử lại sau ít phút.",
    //       variant: "destructive",
    //     });
    //   } finally {
    //     setIsLoading(false);
    //   }
    // }
  };

  useEffect(() => {
    return () => {
      if (typingTimer.current) clearTimeout(typingTimer.current);
    };
  }, []);

  return {
    step,
    email,
    age,
    address,
    isFocused,
    isTyping,
    isLoading,
    isValidEmail,
    isValidAge,
    isValidAddress,
    isFormValid,
    setIsFocused,
    handleEmailChange,
    handleAgeChange,
    handleAddressChange,
    handleSubmit,
  };
};