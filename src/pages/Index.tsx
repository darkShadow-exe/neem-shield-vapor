import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Impact from "@/components/Impact";
import TechnicalSection from "@/components/TechnicalSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <HowItWorks />
      <Impact />
      <TechnicalSection />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
