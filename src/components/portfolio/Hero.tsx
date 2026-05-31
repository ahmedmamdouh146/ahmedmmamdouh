import { useRef } from "react";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import portrait from "@/assets/ahmed-portrait.jpg";
import bgGlow from "@/assets/bg-glow.jpg";

export const Hero = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1200px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateZ(0)`;
  };
  const onMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "perspective(1200px) rotateY(0) rotateX(0)";
  };

  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-28 pb-20 grid-bg">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div
        className="absolute inset-0 opacity-40 mix-blend-screen"
        style={{ backgroundImage: `url(${bgGlow})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[140px] animate-pulse-glow" />
      <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-accent/20 blur-[160px]" />

      <div className="container relative grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
        <div className="lg:col-span-7 space-y-8 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs uppercase tracking-[0.2em] text-primary-glow">
            <Sparkles className="w-3.5 h-3.5" /> Available for opportunities · 2026
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.95] tracking-tight">
            <span className="text-gradient">Ahmed</span>
            <br />
            <span className="text-gradient-primary italic font-light">Mamdouh.</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
            PharmD Student · Community Pharmacy Professional · Frontend Developer · Team Leader
          </p>

          <p className="text-base text-foreground/70 max-w-2xl">
            Bridging <span className="text-primary-glow">Healthcare</span>,{" "}
            <span className="text-primary-glow">Technology</span>, and{" "}
            <span className="text-primary-glow">Leadership</span> to create real impact.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-primary text-primary-foreground font-medium glow-primary hover:scale-105 transition-transform"
            >
              <Mail className="w-4 h-4" /> Let's Connect
            </a>
            <a
              href="/Ahmed-Mamdouh-CV.pdf"
              download
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full glass glass-hover font-medium"
            >
              <Download className="w-4 h-4" /> Download CV
            </a>
          </div>
        </div>

        <div
          className="lg:col-span-5 relative"
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          style={{ perspective: "1200px" }}
        >
          <div
            ref={cardRef}
            className="relative mx-auto max-w-md transition-transform duration-300 ease-out"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute -inset-8 bg-gradient-primary rounded-[2.5rem] blur-3xl opacity-50 animate-pulse-glow" />
            <div className="absolute -inset-2 rounded-[2.2rem] bg-gradient-to-tr from-primary via-primary-glow to-accent opacity-60 blur-xl animate-pulse-glow" />
            <div className="relative glass rounded-[2rem] p-3 overflow-hidden">
              <img
                src={portrait}
                alt="Ahmed Mamdouh — portrait"
                width={960}
                height={1280}
                className="w-full h-auto rounded-3xl object-cover aspect-[3/4]"
              />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">Currently</div>
                  <div className="text-sm font-medium">PharmD @ MUST · DEPI</div>
                </div>
                <span className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/60 hover:text-primary animate-float">
        <ArrowDown />
      </a>
    </section>
  );
};
