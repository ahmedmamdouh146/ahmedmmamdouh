import { useReveal } from "@/hooks/useReveal";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Particles } from "@/components/portfolio/Particles";
import {
  About, WhyAhmed, Timeline, Achievements, Experience, Leadership,
  Projects, Skills, Certifications, Gallery, CurrentFocus, QuoteSection,
  FeaturedCertificates, Contact,
} from "@/components/portfolio/Sections";

const Index = () => {
  useReveal();
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Particles />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <WhyAhmed />
        <Timeline />
        <Achievements />
        <Experience />
        <Leadership />
        <Projects />
        <Skills />
        <Certifications />
        <Gallery />
        <CurrentFocus />
        <QuoteSection />
        <FeaturedCertificates />
        <Contact />
      </div>
    </main>
  );
};

export default Index;
