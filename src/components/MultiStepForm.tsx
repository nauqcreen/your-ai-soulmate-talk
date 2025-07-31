import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import { useLanguage } from "@/contexts/LanguageContext";
import EmailInput from "./EmailInput";
import AgeInput from "./AgeInput";
import AddressInput from "./AddressInput";
import SubmitButton from "./SubmitButton";
import FormStatusMessage from "./FormStatusMessage";
import SuccessMessage from "./SuccessMessage";

const MultiStepForm = () => {
  const { t } = useLanguage();
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
        {t('form.title')}
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
        <SuccessMessage />
      )}
      </div>
    </form>
    <p className="text-sm text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed font-source">
        {t('form.reportNote')}
      </p>
      </>
  );
};

export default MultiStepForm;