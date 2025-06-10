
import Hero from "../components/Hero";
import PainPoint from "../components/PainPoint";
import ValuePillars from "../components/ValuePillars";
import CTA from "../components/CTA";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <PainPoint />
      <ValuePillars />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
