
import { useState } from "react";

const TheArena = () => {
  const [activeContext, setActiveContext] = useState(0);

  const contexts = [
    {
      title: "Buổi Pitching Quyết Định",
      description: "Bạn có 15 phút để thuyết phục nhà đầu tư. Mọi slide đều hoàn hảo, nhưng liệu giọng nói của bạn có đủ sức nặng để biến những con số thành niềm tin?"
    },
    {
      title: "Cuộc Họp Chiến Lược",
      description: "Ý tưởng của bạn có thể thay đổi cả dự án, nhưng nó bị lu mờ giữa những ý kiến khác. Làm thế nào để cấu trúc luận điểm và phản xạ tức thì để giành lại sự chú ý?"
    },
    {
      title: "Buổi Thương Thuyết Căng Thẳng",
      description: "Đối tác đang do dự. Sự khéo léo trong từng câu chữ, sự tinh tế trong cách đặt câu hỏi sẽ quyết định kết quả của cả thương vụ."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-lora text-foreground mb-4">
            Nơi "Khoảng Trống" Xuất Hiện.
          </h2>
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
                <h3 className="font-lora font-semibold text-lg mb-2">
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
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
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
