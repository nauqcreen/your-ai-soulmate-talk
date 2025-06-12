
import TextReveal from './TextReveal';
import EmailSubscriptionForm from './EmailSubscriptionForm';
import SuccessMessage from './SuccessMessage';
import { useEmailSubscription } from '@/hooks/useEmailSubscription';

const TheEmpowerment = () => {
  const { isSubmitted } = useEmailSubscription();

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {!isSubmitted ? (
            <>
              <TextReveal className="mb-8">
                <h2 className="text-3xl md:text-5xl font-bold font-crimson text-foreground leading-tight">
                  Biến trí tuệ thành tầm ảnh hưởng
                </h2>
              </TextReveal>
              
              <p className="text-xl mb-12 text-muted-foreground leading-relaxed max-w-3xl mx-auto font-source">
                Tinktalk không dạy những gì cần nói. Tinktalk giúp bạn giải phóng khả năng nói ra những điều tuyệt vời mà bạn vốn đã biết cùng người bạn AI cá nhân.
              </p>
              
              <div className="mb-8">
                <EmailSubscriptionForm />
              </div>
            </>
          ) : (
            <SuccessMessage />
          )}
        </div>
      </div>
    </section>
  );
};

export default TheEmpowerment;
