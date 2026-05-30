import { useReveal } from "@/hooks/useReveal";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import {
  About, WhyAhmed, Timeline, Achievements, Experience, Leadership,
  Projects, Skills, Certifications, Gallery, CurrentFocus, QuoteSection, Contact,
} from "@/components/portfolio/Sections";

const Index = () => {
  useReveal();
  return (
    <main className="relative min-h-screen bg-background text-foreground">
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
      <Contact />
    </main>
  );
};

export default Index;
