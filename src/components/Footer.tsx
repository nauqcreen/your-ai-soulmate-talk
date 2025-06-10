
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold font-lora text-foreground mb-4">
              Tinktalk
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Biến tư duy sắc bén thành sức mạnh giao tiếp thuyết phục. Dành cho những người muốn thể hiện hết tiềm năng của bản thân.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold font-lora mb-4 text-foreground">Sản Phẩm</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Tính Năng</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Bảng Giá</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Tài Liệu</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold font-lora mb-4 text-foreground">Công Ty</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Về Chúng Tôi</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Tuyển Dụng</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Liên Hệ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">
            © 2024 Tinktalk. Bảo lưu mọi quyền.
          </p>
          <div className="flex items-center gap-1 text-muted-foreground mt-4 md:mt-0">
            <span>Được tạo với</span>
            <Heart className="w-4 h-4 fill-red-500 text-red-500" />
            <span>cho giao tiếp tốt hơn</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
