
import Hero from "../components/Hero";
import TheGap from "../components/TheGap";
import TheArena from "../components/TheArena";
import TheMethod from "../components/TheMethod";
import TheEmpowerment from "../components/TheEmpowerment";
import Navigation from "../components/Navigation";
import MinimalFooter from "../components/MinimalFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <TheGap />
      <TheArena />
      <TheMethod />
      <TheEmpowerment />
      <MinimalFooter />
    </div>
  );
};

export default Index;
