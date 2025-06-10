
import { useEffect, useRef, useState } from "react";

const PainPoint = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-5xl font-bold font-crimson text-foreground mb-8 leading-tight">
            Dành cho những "Người Chinh Phục Thầm Lặng".
          </h2>
          
          <p className="text-lg md:text-xl text-foreground leading-relaxed font-source">
            Có phải bạn sở hữu những ý tưởng tuyệt vời, nhưng luôn cảm thấy lời nói chưa bao giờ đuổi kịp dòng suy nghĩ? Bạn không đơn độc. Đó là khoảng cách mà những người thông minh, cầu tiến thường xuyên đối mặt.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPoint;
