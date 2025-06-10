
import { useState } from "react";
import TextReveal from './TextReveal';

const TheArena = () => {
  const [activeContext, setActiveContext] = useState(0);

  const contexts = [
    {
      title: "Thuyết trình & Bảo vệ",
      description: "Bạn bảo vệ dự án tâm huyết mà mình đã chuẩn bị hàng tháng trời. Làm thế nào để màn trình diễn cuối cùng xứng tầm tất cả công sức đó?"
    },
    {
      title: "Phỏng vấn & Gặp gỡ",
      description: "Năng lực của bạn được thể hiện hoàn hảo trên giấy tờ. Nhưng trong 30 phút đối thoại, làm sao để bộc lộ hết được tiềm năng con người bạn?"
    },
    {
      title: "Họp nhóm & Tranh luận",
      description: "Một ý kiến trái chiều bất ngờ xuất hiện. Làm thế nào để biến khoảnh khắc não bộ \"đứng hình\" thành một luận điểm phản biện thông minh và tức thì?"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <TextReveal>
            <h2 className="text-3xl md:text-5xl font-bold font-crimson text-foreground mb-4">
              Những khoảnh khắc quyết định
            </h2>
          </TextReveal>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Context Tabs */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {contexts.map((context, index) => (
              <button
                key={index}
                onClick={() => setActiveContext(index)}
                className={`flex-1 p-4 text-left border-2 transition-all duration-300 hover-lift ${
                  activeContext === index
                    ? 'border-primary bg-background text-foreground'
                    : 'border-transparent bg-background/50 text-muted-foreground hover:border-primary/30'
                }`}
              >
                <h3 className="font-crimson font-semibold text-lg mb-2">
                  {context.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Active Context Content */}
          <div className="bg-background p-8 md:p-12 border border-border">
            <div 
              key={activeContext}
              className="animate-cross-fade"
            >
              <p className="text-lg md:text-xl text-foreground leading-relaxed font-source">
                {contexts[activeContext].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheArena;
