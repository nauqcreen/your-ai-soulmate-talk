
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, UserPlus, MessageCircle, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up & Personalize",
      description: "Create your account and tell us about your communication preferences and goals."
    },
    {
      icon: MessageCircle,
      title: "Start Conversing",
      description: "Begin chatting with your AI companion and watch it learn your unique style."
    },
    {
      icon: TrendingUp,
      title: "Grow Together",
      description: "Your companion evolves with you, becoming more helpful and personalized over time."
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes and experience personalized AI communication that grows with you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="text-center hover-scale border-0 shadow-lg bg-gradient-to-br from-purple-50 to-blue-50">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-2">
                    <ArrowRight className="text-white" size={16} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
