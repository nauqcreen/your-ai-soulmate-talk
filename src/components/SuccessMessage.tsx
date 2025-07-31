
import { Check, Sparkles, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SuccessMessage = () => {
  const { t } = useLanguage();
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
        {t('success.welcome')}{" "}
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Tinktalk
        </span>
      </h3>
      
      {/* Subtitle */}
      <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed font-source">
        {t('success.thanks')}
      </p>

      {/* Promise Card */}
      <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-primary/20 rounded-2xl p-6 max-w-md mx-auto mb-6 backdrop-blur-sm">
        <Heart className="text-red-500 w-6 h-6 mx-auto mb-3 animate-pulse" />
        <p className="text-foreground font-medium mb-2 font-source">
          {t('success.promise')}
        </p>
        <ul className="text-sm text-muted-foreground space-y-1 font-source">
          <li>{t('success.item1')}</li>
          <li>{t('success.item2')}</li>
          <li>{t('success.item3')}</li>
        </ul>
      </div>

      {/* Bottom Note */}
      <p className="text-sm text-muted-foreground font-source italic">
        {t('success.note')}
      </p>
    </div>
  );
};

export default SuccessMessage;
