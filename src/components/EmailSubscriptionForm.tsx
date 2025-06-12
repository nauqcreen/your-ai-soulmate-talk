
import EmailInput from './EmailInput';
import SubmitButton from './SubmitButton';
import FormStatusMessage from './FormStatusMessage';
import { useEmailSubscription } from '@/hooks/useEmailSubscription';

const EmailSubscriptionForm = () => {
  const {
    email,
    isValidEmail,
    isFocused,
    setIsFocused,
    isTyping,
    isLoading,
    handleEmailChange,
    handleSubmit
  } = useEmailSubscription();

  return (
    <>
      <h3 className="text-2xl font-crimson font-semibold text-foreground mb-4">
        Đăng ký nhận thông tin sớm, truy cập sớm, và nhận báo cáo năng lực đầu tiên
      </h3>
      
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
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
          <SubmitButton 
            isValidEmail={isValidEmail} 
            isLoading={isLoading} 
          />
        </div>
        
        <FormStatusMessage 
          email={email}
          isValidEmail={isValidEmail}
          isLoading={isLoading}
        />
      </form>
      
      <p className="text-sm text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed font-source">
        Báo cáo được AI phân tích dựa trên 1 bài tập ngắn do bạn thực hiện, giúp hiểu rõ điểm mạnh và tiềm năng cải thiện
      </p>
    </>
  );
};

export default EmailSubscriptionForm;
