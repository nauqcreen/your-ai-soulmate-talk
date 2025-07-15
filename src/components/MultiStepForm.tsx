import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import EmailInput from "./EmailInput";
import AgeInput from "./AgeInput";
import AddressInput from "./AddressInput";
import SubmitButton from "./SubmitButton";
import FormStatusMessage from "./FormStatusMessage";

const MultiStepForm = () => {
  const {
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
  } = useMultiStepForm();

  const isFinalStep = step === "address";

  // Kiểm tra hợp lệ theo step hiện tại
  const stepFormValid =
    step === "email"
      ? isValidEmail
      : step === "age"
      ? isValidAge
      : step === "address"
      ? isValidAddress
      : isFormValid; // step khác thì mặc định lấy isFormValid (nếu cần)

  return (
    <>
    <h3 className="text-2xl font-crimson font-semibold text-foreground mb-4">
        Đăng ký nhận thông tin sớm, truy cập sớm, và nhận báo cáo năng lực đầu tiên
      </h3>
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
      {step === "email" && (
        <EmailInput
          email={email}
          isValidEmail={isValidEmail}
          isFocused={isFocused}
          isTyping={isTyping}
          isLoading={isLoading}
          onEmailChange={handleEmailChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      )}

      {step === "age" && (
        <AgeInput
          age={age}
          isValidAge={isValidAge}
          isFocused={isFocused}
          isTyping={isTyping}
          isLoading={isLoading}
          onAgeChange={handleAgeChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      )}

      {step === "address" && (
        <AddressInput
          address={address}
          isValidAddress={isValidAddress}
          isFocused={isFocused}
          isTyping={isTyping}
          isLoading={isLoading}
          onAddressChange={handleAddressChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      )}

      {step !== "submitted" && (
        <SubmitButton
          isFormValid={stepFormValid}
          isLoading={isLoading}
          isFinalStep={isFinalStep}
        />
      )}

      {step === "submitted" && (
        <p className="text-center text-green-600 mt-6 font-medium">
          ✅ Cảm ơn bạn đã đăng ký!
        </p>
      )}
      <FormStatusMessage 
          email={email}
          isValidEmail={isValidEmail}
          isLoading={isLoading}
        />
      </div>
    </form>
    <p className="text-sm text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed font-source">
        Báo cáo được AI phân tích dựa trên 1 bài tập ngắn do bạn thực hiện, giúp hiểu rõ điểm mạnh và tiềm năng cải thiện
      </p>
      </>
  );
};

export default MultiStepForm;