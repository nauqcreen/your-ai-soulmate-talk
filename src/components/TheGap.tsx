
import { useEffect, useRef, useState } from "react";

const TheGap = () => {
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
          <h2 className="text-3xl md:text-5xl font-bold font-lora text-foreground mb-12 leading-tight">
            "Khoảng Trống" Tốn Kém Nhất.
          </h2>
          
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            Giữa một ý tưởng xuất sắc trong đầu bạn và một bài trình bày tầm thường trước đám đông là một "khoảng trống". Đó là nơi tiềm năng bị đánh mất, cơ hội bị bỏ lỡ, và giá trị không được công nhận. Đây là chi phí vô hình lớn nhất trong sự nghiệp của mỗi chuyên gia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheGap;
