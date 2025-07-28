
import { Check, Sparkles, Heart } from "lucide-react";

const SuccessMessage = () => {
  return (
    <div className="text-center py-12 animate-fade-in">
      {/* Success Icon */}
      <div className="relative mx-auto w-20 h-20 mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
        <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 rounded-full w-full h-full flex items-center justify-center shadow-lg shadow-green-500/25">
          <Check className="text-white w-10 h-10 animate-scale-in" strokeWidth={3} />
        </div>
        {/* Floating sparkles */}
        <Sparkles className="absolute -top-2 -right-2 text-yellow-400 w-6 h-6 animate-bounce" style={{ animationDelay: '0.5s' }} />
        <Sparkles className="absolute -bottom-1 -left-2 text-yellow-400 w-4 h-4 animate-bounce" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main Message */}
      <h3 className="text-3xl md:text-4xl font-crimson font-bold text-foreground mb-4 leading-tight">
        Chào mừng bạn đến với{" "}
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Tinktalk
        </span>
      </h3>
      
      {/* Subtitle */}
      <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed font-source">
        Cảm ơn bạn đã tin tưởng và đồng hành cùng chúng tôi trong hành trình này!
      </p>

      {/* Promise Card */}
      <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-primary/20 rounded-2xl p-6 max-w-md mx-auto mb-6 backdrop-blur-sm">
        <Heart className="text-red-500 w-6 h-6 mx-auto mb-3 animate-pulse" />
        <p className="text-foreground font-medium mb-2 font-source">
          Chúng tôi sẽ gửi cho bạn:
        </p>
        <ul className="text-sm text-muted-foreground space-y-1 font-source">
          <li>• Thông tin độc quyền về sản phẩm</li>
          <li>• Quyền truy cập sớm khi ra mắt</li>
          <li>• Báo cáo năng lực cá nhân đầu tiên</li>
        </ul>
      </div>

      {/* Bottom Note */}
      <p className="text-sm text-muted-foreground font-source italic">
        Hãy theo dõi email của bạn để không bỏ lỡ tin tức mới nhất nhé! ✨
      </p>
    </div>
  );
};

export default SuccessMessage;
