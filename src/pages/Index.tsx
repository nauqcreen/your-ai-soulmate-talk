
import Hero from "../components/Hero";
import TheGap from "../components/TheGap";
import TheArena from "../components/TheArena";
import TheMethod from "../components/TheMethod";
import TheEmpowerment from "../components/TheEmpowerment";
import Navigation from "../components/Navigation";
import MinimalFooter from "../components/MinimalFooter";
import ScrollProgress from "../components/ScrollProgress";
import FloatingElements from "../components/FloatingElements";
import AnimatedBackground from "../components/AnimatedBackground";
import ParticleField from "../components/ParticleField";
import MorphingShape from "../components/MorphingShape";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ParticleField />
      <AnimatedBackground />
      <MorphingShape />
      <FloatingElements count={15} />
      <ScrollProgress />
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
