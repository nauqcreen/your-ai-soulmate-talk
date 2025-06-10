
import TextReveal from './TextReveal';

const TheGap = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <TextReveal className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-crimson text-foreground leading-tight">
              "Khoảng trống" tốn kém nhất
            </h2>
          </TextReveal>
          
          <p className="text-lg md:text-xl text-foreground leading-relaxed font-source">
            Giữa một ý tưởng xuất sắc trong đầu và một bài trình bày tầm thường trước đám đông là một "khoảng trống". Đó là nơi tiềm năng bị đánh mất, cơ hội bị bỏ lỡ, và giá trị không được công nhận
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheGap;
