
import { useState } from "react";

const TheArena = () => {
  const [activeContext, setActiveContext] = useState(0);

  const contexts = [
    {
      title: "Buổi Bảo Vệ & Thuyết Trình",
      description: "Bạn đứng trước hội đồng, khách hàng, hoặc giảng viên, bảo vệ dự án bạn đã dồn tâm sức hàng tháng trời. Mọi dữ liệu nằm trong tay, mọi ý tưởng nằm trong đầu. Nhưng làm thế nào để biến sự chuẩn bị thầm lặng đó thành một màn trình bày đầy sức nặng, tự tin và không thể bị bắt bẻ?"
    },
    {
      title: "Phỏng Vấn & Gặp Gỡ",
      description: "Bạn ngồi đối diện nhà tuyển dụng của công ty mơ ước, hoặc người quản lý trực tiếp của bạn. CV rất ấn tượng, năng lực chuyên môn đã có. Nhưng 30 phút đối thoại trực tiếp mới là bài kiểm tra thực sự. Liệu từng câu trả lời của bạn có thể hiện được hết chiều sâu, sự thông minh và tiềm năng của bạn không?"
    },
    {
      title: "Họp Nhóm & Tranh Luận",
      description: "Trong một buổi họp nhóm, một ý kiến trái chiều đột ngột được đưa ra. Bạn biết mình có lý, nhưng não bộ dường như 'đứng hình' trong vài giây. Khoảnh khắc do dự ngắn ngủi đó đủ để cuộc thảo luận trôi đi, và ý tưởng của bạn bị lướt qua. Làm sao để phản xạ tức thì và bảo vệ quan điểm của mình một cách sắc bén?"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-lora text-foreground mb-4">
            Những Khoảnh Khắc Quyết Định.
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
