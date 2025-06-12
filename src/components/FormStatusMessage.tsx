
interface FormStatusMessageProps {
  email: string;
  isValidEmail: boolean;
  isLoading: boolean;
}

const FormStatusMessage = ({ email, isValidEmail, isLoading }: FormStatusMessageProps) => {
  return (
    <div className="mt-4 h-6 flex items-center justify-center">
      {isValidEmail && !isLoading && (
        <div className="flex items-center gap-2 text-green-600 animate-fade-in">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-source">Email hợp lệ - sẵn sàng gửi!</span>
        </div>
      )}
      {email && !isValidEmail && !isLoading && (
        <div className="flex items-center gap-2 text-amber-600 animate-fade-in">
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-source">Vui lòng nhập email hợp lệ</span>
        </div>
      )}
      {isLoading && (
        <div className="flex items-center gap-2 text-blue-600 animate-fade-in">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <span className="text-sm font-source">Đang xử lý...</span>
        </div>
      )}
    </div>
  );
};

export default FormStatusMessage;
