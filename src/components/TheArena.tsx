
import { useState } from "react";
import TextReveal from './TextReveal';

const TheArena = () => {
  const [activeContext, setActiveContext] = useState(0);

  const contexts = [
    {
      title: "Thuyết trình & Bảo vệ",
      description: "Bảo vệ dự án tâm huyết mà mình đã chuẩn bị hàng tháng trời. Làm thế nào để màn trình diễn cuối cùng xứng tầm tất cả công sức đó?"
    },
    {
      title: "Phỏng vấn & Gặp gỡ",
      description: "Năng lực đã được thể hiện hoàn hảo trên giấy tờ. Nhưng trong 30 phút đối thoại, làm sao để bộc lộ hết được tiềm năng con người bạn?"
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
                className={`flex-1 p-6 text-center border-2 rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-lg group relative overflow-hidden ${
                  activeContext === index
                    ? 'border-primary bg-background text-foreground shadow-primary/20 shadow-lg scale-105'
                    : 'border-transparent bg-background/70 text-muted-foreground hover:border-primary/50 hover:bg-background/90'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="font-crimson font-semibold text-lg mb-2 relative z-10 flex items-center justify-center min-h-[3rem]">
                  {context.title}
                </h3>
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-primary transition-all duration-300 ${
                  activeContext === index ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </button>
            ))}
          </div>

          {/* Active Context Content */}
          <div className="bg-background p-8 md:p-12 border border-border rounded-lg shadow-lg">
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
