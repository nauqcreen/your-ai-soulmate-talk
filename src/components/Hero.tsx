
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6 animate-fade-in">
          <Sparkles size={16} />
          <span className="text-sm font-medium">AI-Powered Personal Communication</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate-fade-in">
          Your AI Communication
          <br />
          Companion, Personalized
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
          Experience the future of communication with an AI companion that learns your style, 
          understands your needs, and adapts to help you connect better with the world.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-3 hover-scale"
          >
            Start Your Journey
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-3 hover-scale"
          >
            Watch Demo
          </Button>
        </div>
        
        <div className="mt-12 relative">
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-200">
            <div className="bg-background rounded-xl p-6 shadow-lg">
              <div className="text-left space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold text-sm">AI</span>
                  </div>
                  <div className="bg-muted rounded-lg p-3 max-w-sm">
                    <p className="text-sm">Hi! I'm your personal AI companion. I've learned your communication style and I'm here to help you express yourself better. What would you like to work on today?</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-3 max-w-sm">
                    <p className="text-sm">Help me write a professional email to my team about our project update.</p>
                  </div>
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">You</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
