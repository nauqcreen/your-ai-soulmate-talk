
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-lg border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold font-lora text-foreground">
          Tinktalk
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
          <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</a>
          <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
          <Button variant="outline" className="mr-2 border-muted-foreground text-foreground hover:bg-muted">Sign In</Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 hover-scale">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background border-b border-border md:hidden">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a href="#features" className="block text-foreground hover:text-primary transition-colors">Features</a>
              <a href="#how-it-works" className="block text-foreground hover:text-primary transition-colors">How It Works</a>
              <a href="#testimonials" className="block text-foreground hover:text-primary transition-colors">Testimonials</a>
              <div className="space-y-2 pt-4">
                <Button variant="outline" className="w-full border-muted-foreground text-foreground hover:bg-muted">Sign In</Button>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
