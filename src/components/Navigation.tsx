
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold font-crimson text-foreground">
          Tinktalk
        </div>
        
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <div className="flex items-center gap-2">
            <span className={`text-sm font-medium transition-colors ${language === 'vi' ? 'text-foreground' : 'text-muted-foreground'}`}>
              VI
            </span>
            <Switch
              checked={language === 'en'}
              onCheckedChange={(checked) => setLanguage(checked ? 'en' : 'vi')}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`text-sm font-medium transition-colors ${language === 'en' ? 'text-foreground' : 'text-muted-foreground'}`}>
              EN
            </span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            {t('nav.earlyAccess')}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
