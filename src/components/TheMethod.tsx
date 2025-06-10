
const TheMethod = () => {
  const pillars = [
    {
      title: "Tư Duy Kiến Trúc",
      description: "Xây dựng nền tảng tư duy phản biện, biến ý tưởng thô thành những cấu trúc lập luận không thể bị bẻ gãy."
    },
    {
      title: "Biểu Đạt Chủ Đích",
      description: "Làm chủ ngôn ngữ và phi ngôn ngữ để mọi lời nói đều có mục tiêu, mọi biểu cảm đều có sức nặng."
    },
    {
      title: "Đối Thoại Bản Lĩnh",
      description: "Rèn luyện phản xạ tức thì và sự linh hoạt trong môi trường áp lực cao để dẫn dắt mọi cuộc hội thoại."
    }
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-lora text-foreground mb-4">
            Mài Sắc Công Cụ Của Bạn.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="group p-8 border-2 border-transparent transition-all duration-300 ease-out hover:border-primary hover-lift cursor-pointer"
            >
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold font-lora text-foreground mb-6">
                  {pillar.title}
                </h3>
                
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheMethod;
