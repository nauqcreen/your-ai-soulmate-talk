
import { Sparkles } from 'lucide-react';

const SupportingEcosystemHeader = () => {
  return (
    <div className="mb-8 space-y-4">
      <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-6 backdrop-blur-sm">
        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
        <span className="text-sm font-medium text-primary">Hệ sinh thái đối tác</span>
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      </div>
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-crimson text-foreground mb-6 leading-tight animate-fade-in-up-enhanced">
        Tự hào là một phần của hệ sinh thái{' '}
        <span className="bg-gradient-to-r from-primary via-orange-500 to-accent bg-clip-text text-transparent animate-gradient-shift">
          Vườn ươm VISI
        </span>{' '}
      </h2>
    </div>
  );
};

export default SupportingEcosystemHeader;
