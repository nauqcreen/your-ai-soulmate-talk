
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-3xl p-12 text-center text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-background/20 text-primary-foreground px-4 py-2 rounded-full mb-6">
              <Sparkles size={16} />
              <span className="text-sm font-medium">Bắt Đầu Hành Trình Thay Đổi</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold font-lora mb-6">
              Sẵn Sàng Giải Phóng Tiềm Năng Giao Tiếp?
            </h2>
            
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
              Hãy cùng hàng nghìn người đã khám phá ra sức mạnh của giao tiếp tự tin. 
              Phiên bản tốt nhất của bạn đang chờ đợi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-background text-primary hover:bg-background/90 text-lg px-8 py-3 hover-scale"
              >
                Trải Nghiệm Miễn Phí
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-background text-primary-foreground hover:bg-background/10 text-lg px-8 py-3 hover-scale"
              >
                Tìm Hiểu Thêm
              </Button>
            </div>
            
            <p className="text-sm opacity-75 mt-6">
              Không cần thẻ tín dụng • Dùng thử 7 ngày miễn phí • Hủy bất cứ lúc nào
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
