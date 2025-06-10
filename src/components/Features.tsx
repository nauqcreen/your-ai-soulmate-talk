
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, MessageSquare, Zap, Shield, Users, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Adaptive Learning",
      description: "Your AI companion learns from every interaction, understanding your unique communication patterns and preferences."
    },
    {
      icon: MessageSquare,
      title: "Natural Conversations",
      description: "Engage in fluid, context-aware conversations that feel natural and meaningful, just like talking to a close friend."
    },
    {
      icon: Zap,
      title: "Instant Responses",
      description: "Get immediate, thoughtful responses tailored to your situation, helping you communicate more effectively."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your conversations are private and secure. We prioritize your data protection above everything else."
    },
    {
      icon: Users,
      title: "Multi-Platform",
      description: "Access your AI companion across all your devices and platforms for seamless communication everywhere."
    },
    {
      icon: Sparkles,
      title: "Personalized Insights",
      description: "Receive personalized suggestions and insights to improve your communication skills over time."
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Features That Adapt to You
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how our AI companion revolutionizes the way you communicate with intelligent, personalized features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover-scale border-0 shadow-lg bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-purple-600" size={24} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
