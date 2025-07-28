
import Hero from "../components/Hero";
import TheGap from "../components/TheGap";
import TheArena from "../components/TheArena";
import TheMethod from "../components/TheMethod";
import SupportingEcosystem from "../components/SupportingEcosystem";
import TheEmpowerment from "../components/TheEmpowerment";
import Navigation from "../components/Navigation";
import MinimalFooter from "../components/MinimalFooter";
import ScrollProgress from "../components/ScrollProgress";
import FloatingElements from "../components/FloatingElements";
import AnimatedBackground from "../components/AnimatedBackground";
import ParticleField from "../components/ParticleField";
import MorphingShape from "../components/MorphingShape";
import { ScrollAnalytics } from "../components/ScrollAnalytics";
import { AnalyticsTracker } from "../components/AnalyticsTracker";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ScrollAnalytics />
      <ParticleField />
      <AnimatedBackground />
      <MorphingShape />
      <FloatingElements count={15} />
      <ScrollProgress />
      
      <AnalyticsTracker element="navigation" trackClicks={true}>
        <Navigation />
      </AnalyticsTracker>
      
      <AnalyticsTracker element="hero_section" trackScroll={true}>
        <Hero />
      </AnalyticsTracker>
      
      <AnalyticsTracker element="gap_section" trackScroll={true}>
        <TheGap />
      </AnalyticsTracker>
      
      <AnalyticsTracker element="arena_section" trackScroll={true}>
        <TheArena />
      </AnalyticsTracker>
      
      <AnalyticsTracker element="method_section" trackScroll={true}>
        <TheMethod />
      </AnalyticsTracker>
      
      <AnalyticsTracker element="ecosystem_section" trackScroll={true} trackClicks={true}>
        <SupportingEcosystem />
      </AnalyticsTracker>
      
      <AnalyticsTracker element="empowerment_section" trackClicks={true} trackHover={true}>
        <TheEmpowerment />
      </AnalyticsTracker>
      
      <AnalyticsTracker element="footer" trackClicks={true}>
        <MinimalFooter />
      </AnalyticsTracker>
    </div>
  );
};

export default Index;
