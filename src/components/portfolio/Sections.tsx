import { useState, type ReactNode } from "react";
import { useCounter } from "@/hooks/useReveal";
import { Lightbox, type LightboxItem } from "./Lightbox";

import {
  Activity, Award, Brain, Briefcase, Calendar, Code2, Crown, FileCheck, Github,
  GraduationCap, Heart, Instagram, Linkedin, Mail, MapPin, Megaphone, Pill,
  Quote, Send, Sparkles, Star, Target, Trophy, Users, Facebook, ExternalLink, FlaskConical,
  Download, Eye, ImageIcon, Layers, Presentation, ClipboardList
} from "lucide-react";

import marblePortrait from "@/assets/marble-portrait.jpg";
import ahmedPortrait from "@/assets/ahmed-portrait.jpg";
import certMaestro from "@/assets/cert-maestro.jpg";
import certKingTeam from "@/assets/cert-king-team.jpg";
import certKingGen from "@/assets/cert-king-generation.jpg";
import certSeropipe from "@/assets/cert-seropipe.jpg";
import certBestMovie from "@/assets/cert-best-movie.jpg";
import activityGroup from "@/assets/activity-group.jpg";
import activityTeam from "@/assets/activity-team.jpg";
import activityCampaign from "@/assets/activity-campaign.jpg";
import pharmaPoster from "@/assets/pharmacognosy-poster.jpg";

/* ---------------- About ---------------- */
export const About = () => (
  <section id="about" className="relative py-32">
    <div className="container grid lg:grid-cols-12 gap-16 items-center">
      <div className="lg:col-span-5 reveal space-y-10">
        <div>
          <SectionLabel>01 · About</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-6 leading-tight">
            A new kind of <span className="italic text-gradient-primary">multi-disciplinary</span> professional.
          </h2>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-primary rounded-[2rem] blur-2xl opacity-30" />
          <div className="relative glass rounded-[1.75rem] p-2 overflow-hidden">
            <img
              src={marblePortrait}
              alt="Artistic marble portrait"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-auto rounded-2xl object-cover aspect-[4/5]"
            />
            <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-3 flex items-center justify-between text-xs">
              <span className="uppercase tracking-widest text-primary-glow">Crafted with conviction</span>
              <Sparkles className="w-4 h-4 text-primary-glow" />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-7 space-y-7 text-lg text-muted-foreground leading-relaxed reveal">
        <p>
          I'm a <span className="text-foreground font-medium">PharmD student at Misr University for Science and Technology (MUST)</span>,
          expected to graduate in 2031. Since 2020 I've been working hands-on in community pharmacy — currently as a
          Pharmacy Assistant at Ahmed Samy Pharmacy.
        </p>
        <p>
          In parallel, I'm building a second engine as a <span className="text-foreground font-medium">Frontend Developer Trainee</span> at
          the Digital Egypt Pioneers Initiative (DEPI) and have already shipped 5 approved freelance gigs.
        </p>
        <p>
          As a <span className="text-foreground font-medium">Team Leader at SCOPS</span> I lead awareness campaigns and
          academic projects that translate healthcare into something the community can actually feel.
        </p>
        <div className="grid grid-cols-2 gap-4 pt-4">
          <InfoChip icon={GraduationCap} label="MUST · PharmD 2031" />
          <InfoChip icon={MapPin} label="Egypt · Remote-ready" />
          <InfoChip icon={Briefcase} label="Open to internships" />
          <InfoChip icon={Heart} label="Healthcare + Tech" />
        </div>
      </div>
    </div>
  </section>
);

const InfoChip = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <div className="glass rounded-2xl px-4 py-3 flex items-center gap-3 text-sm">
    <Icon className="w-4 h-4 text-primary-glow" />
    <span className="text-foreground/80">{label}</span>
  </div>
);

export const SectionLabel = ({ children }: { children: ReactNode }) => (
  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary-glow">
    <span className="w-8 h-px bg-primary-glow" /> {children}
  </div>
);

/* ---------------- Why Ahmed ---------------- */
const whyItems = [
  { icon: Pill, t: "Healthcare from the ground up", d: "5+ years inside real pharmacies — not theory, daily practice with patients, inventory, OTC and counsel." },
  { icon: Code2, t: "Engineering mindset", d: "DEPI-trained frontend developer shipping clean, fast, modern interfaces. 5 freelance gigs delivered." },
  { icon: Users, t: "Proven leadership", d: "Team Leader at SCOPS. I run people, projects and campaigns — and bring them across the finish line." },
  { icon: Megaphone, t: "Real community impact", d: "Healthcare awareness campaigns that change behavior, not just talk about it." },
];
export const WhyAhmed = () => (
  <section className="relative py-32 bg-gradient-to-b from-background to-secondary/30">
    <div className="container">
      <div className="max-w-3xl reveal">
        <SectionLabel>02 · Why Ahmed</SectionLabel>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-6">
          Four disciplines. <span className="italic text-gradient-primary">One operator.</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-6 mt-16">
        {whyItems.map((w, i) => (
          <div key={w.t} className="glass glass-hover rounded-3xl p-8 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="w-12 h-12 rounded-2xl bg-gradient-primary grid place-items-center mb-6 glow-primary">
              <w.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-display mb-3">{w.t}</h3>
            <p className="text-muted-foreground leading-relaxed">{w.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- Timeline (interactive) ---------------- */
const timeline = [
  { y: "2020", t: "Started Working in Community Pharmacy", d: "Hands-on entry into community pharmacy — patient interaction, OTC, inventory." },
  { y: "2025", t: "Joined PharmD at MUST", d: "Started the Doctor of Pharmacy track at Misr University for Science and Technology." },
  { y: "2025", t: "Joined DEPI Frontend Track", d: "Selected for the Digital Egypt Pioneers Initiative — frontend development training." },
  { y: "2026", t: "Completed 5 Approved Freelance Gigs", d: "Five frontend freelance projects shipped under real client constraints." },
  { y: "2026", t: "Community Pharmacy Trainee at SCOPS", d: "Workshops, simulations, peer learning inside SCOPS." },
  { y: "2026", t: "Team Leader at SCOPS", d: "Promoted to lead a SCOPS team — people, projects, and outreach." },
  { y: "2026", t: "Led Pharmacognosy Project", d: "End-to-end leadership of an academic Pharmacognosy research project." },
  { y: "2026", t: "Healthcare Awareness Campaigns", d: "Participated in and organized community awareness campaigns." },
];
export const Timeline = () => {
  const [active, setActive] = useState(0);
  return (
    <section id="journey" className="relative py-32">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto reveal">
          <SectionLabel>03 · The Journey</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-6">
            A timeline of <span className="italic text-gradient-primary">compounding</span>.
          </h2>
        </div>

        <div className="relative mt-20 max-w-5xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
          {timeline.map((m, i) => {
            const isActive = active === i;
            return (
              <div
                key={i}
                className={`relative grid md:grid-cols-2 gap-6 mb-8 reveal ${i % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"}`}
              >
                <div className={`${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"} pl-12 md:pl-0`}>
                  <button
                    onClick={() => setActive(i)}
                    className={`text-left md:w-full block glass glass-hover rounded-2xl p-6 transition-all duration-500 ${isActive ? "ring-2 ring-primary glow-primary scale-[1.02]" : ""}`}
                  >
                    <div className={`text-xs uppercase tracking-widest text-primary-glow mb-2 flex items-center gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Calendar className="w-3 h-3" /> {m.y}
                    </div>
                    <h3 className="font-display text-xl mb-2">{m.t}</h3>
                    <p className={`text-sm text-muted-foreground transition-all overflow-hidden ${isActive ? "max-h-40 opacity-100 mt-2" : "max-h-10 opacity-80"}`}>
                      {m.d}
                    </p>
                  </button>
                </div>
                <div className="hidden md:block" />
                <span className={`absolute left-4 md:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full transition-all ring-4 ring-background ${isActive ? "bg-primary-glow scale-150 glow-primary" : "bg-primary"}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ---------------- Achievements (counters) ---------------- */
const stats = [
  { n: 5, suffix: "+", l: "Years Experience", i: Pill },
  { n: 5, suffix: "", l: "Approved Freelance Gigs", i: Code2 },
  { n: 4, suffix: "+", l: "Team Leadership Roles", i: Trophy },
  { n: 10, suffix: "+", l: "Community Activities", i: Heart },
];
const StatCard = ({ s, delay }: { s: typeof stats[number]; delay: number }) => {
  const { val, ref } = useCounter(s.n);
  return (
    <div className="glass glass-hover rounded-3xl p-8 text-center reveal relative overflow-hidden" style={{ transitionDelay: `${delay}ms` }}>
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
      <s.i className="w-7 h-7 mx-auto mb-4 text-primary-glow relative" />
      <div className="font-display text-5xl lg:text-6xl text-gradient-primary relative">
        <span ref={ref}>{val}</span>{s.suffix}
      </div>
      <div className="mt-3 text-sm uppercase tracking-widest text-muted-foreground relative">{s.l}</div>
    </div>
  );
};
export const Achievements = () => (
  <section className="relative py-32 bg-gradient-to-b from-secondary/30 to-background">
    <div className="container">
      <div className="text-center max-w-3xl mx-auto reveal">
        <SectionLabel>04 · By the numbers</SectionLabel>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-6">
          Receipts, <span className="italic text-gradient-primary">not promises.</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {stats.map((s, i) => <StatCard key={s.l} s={s} delay={i * 80} />)}
      </div>
    </div>
  </section>
);

/* ---------------- Experience ---------------- */
const experience = [
  { role: "Pharmacy Assistant", org: "Ahmed Samy Pharmacy", period: "2020 — Present",
    points: ["Direct patient counseling and OTC recommendations", "Inventory management and stock control", "Daily pharmacy operations and customer service"], icon: Pill },
  { role: "Frontend Developer Trainee", org: "Digital Egypt Pioneers Initiative (DEPI)", period: "2025 — Present",
    points: ["Modern HTML, CSS, JavaScript & UI/UX practices", "Hands-on team projects with real deliverables", "Industry-aligned web development training"], icon: Code2 },
  { role: "PharmD Student", org: "Misr University for Science and Technology (MUST)", period: "2025 — 2031",
    points: ["Doctor of Pharmacy degree track", "Active in academic projects and research", "Pharmacognosy project leadership"], icon: GraduationCap },
  { role: "Freelance Frontend Developer", org: "Self-employed", period: "2025 — Present",
    points: ["5 approved freelance gigs delivered", "Client communication and scope management", "Responsive, modern web interfaces"], icon: Briefcase },
];
export const Experience = () => (
  <section id="experience" className="relative py-32">
    <div className="container">
      <div className="max-w-3xl reveal">
        <SectionLabel>05 · Experience</SectionLabel>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-6">
          Where I've <span className="italic text-gradient-primary">put in the work.</span>
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-6 mt-16">
        {experience.map((e, i) => (
          <div key={e.role} className="glass glass-hover rounded-3xl p-8 reveal" style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-primary grid place-items-center"><e.icon className="w-6 h-6 text-primary-foreground" /></div>
              <span className="text-xs text-primary-glow uppercase tracking-widest">{e.period}</span>
            </div>
            <h3 className="font-display text-2xl">{e.role}</h3>
            <div className="text-muted-foreground mt-1">{e.org}</div>
            <ul className="mt-5 space-y-2 text-sm text-foreground/75">
              {e.points.map((p) => (
                <li key={p} className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- Leadership ---------------- */
const leadership = [
  { i: Users, t: "Team Leader · SCOPS", d: "Leading a SCOPS team — projects, coordination, and people management." },
  { i: FlaskConical, t: "Pharmacognosy Project Leader", d: "Led an academic project from research design through final presentation." },
  { i: Megaphone, t: "Awareness Campaigns", d: "Participated in and supported community healthcare awareness campaigns." },
  { i: Activity, t: "Community Pharmacy Trainee", d: "SCOPS hands-on training: real workflows, real patients, real skills." },
];
export const Leadership = () => (
  <section className="relative py-32 bg-gradient-to-b from-background to-secondary/30">
    <div className="container">
      <div className="max-w-3xl reveal">
        <SectionLabel>06 · Leadership & Community</SectionLabel>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-6">
          Leading <span className="italic text-gradient-primary">where it matters.</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {leadership.map((l, i) => (
          <div key={l.t} className="glass glass-hover rounded-3xl p-6 reveal" style={{ transitionDelay: `${i * 60}ms` }}>
            <l.i className="w-8 h-8 text-primary-glow mb-4" />
            <h3 className="font-display text-lg mb-2">{l.t}</h3>
            <p className="text-sm text-muted-foreground">{l.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- Projects (Pharmacognosy expanded) ---------------- */
const responsibilities = [
  { i: Users, t: "Team Leadership", d: "Coordinated team members, assigned roles, kept everyone aligned on milestones." },
  { i: FlaskConical, t: "Research Coordination", d: "Directed literature review and source curation across medicinal plants." },
  { i: Layers, t: "Poster Planning", d: "Designed structure, hierarchy, and visual storytelling of the academic poster." },
  { i: Presentation, t: "Presentation Preparation", d: "Built and rehearsed the final presentation for faculty evaluation." },
];
export const Projects = () => {
  const [open, setOpen] = useState(false);
  return (
    <section id="projects" className="relative py-32">
      <div className="container">
        <div className="max-w-3xl reveal">
          <SectionLabel>07 · Featured Projects</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-6">
            Selected <span className="italic text-gradient-primary">work.</span>
          </h2>
        </div>

        {/* Pharmacognosy spotlight */}
        <div className="grid lg:grid-cols-12 gap-8 mt-16">
          <div className="lg:col-span-5 reveal">
            <button onClick={() => setOpen(true)} className="group relative w-full glass rounded-3xl p-3 overflow-hidden block">
              <div className="absolute -inset-6 bg-gradient-primary blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <img
                src={pharmaPoster}
                alt="Pharmacognosy project poster"
                loading="lazy"
                width={1024}
                height={1280}
                className="relative w-full h-auto rounded-2xl object-cover aspect-[4/5] group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-primary text-primary-foreground text-xs uppercase tracking-widest glow-primary">
                <Crown className="w-3.5 h-3.5" /> Project Leader
              </div>
              <div className="absolute bottom-6 right-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs">
                <Eye className="w-3.5 h-3.5" /> Preview poster
              </div>
            </button>
          </div>
          <div className="lg:col-span-7 reveal space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-widest text-primary-glow">
              <FlaskConical className="w-3.5 h-3.5" /> Academic · Pharmacy
            </div>
            <h3 className="font-display text-3xl sm:text-4xl">Pharmacognosy Research Project</h3>
            <p className="text-muted-foreground leading-relaxed">
              An end-to-end academic research initiative on Pharmacognosy — the study of medicinal compounds
              derived from natural sources. As the project leader, I orchestrated the team from initial literature
              review and source curation through visual design of the academic poster and the final faculty presentation.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {responsibilities.map((r) => (
                <div key={r.t} className="glass glass-hover rounded-2xl p-5">
                  <r.i className="w-6 h-6 text-primary-glow mb-3" />
                  <div className="font-display text-lg">{r.t}</div>
                  <p className="text-sm text-muted-foreground mt-1">{r.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Other projects */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {[
            { tag: "Community · Healthcare", t: "Healthcare Awareness Campaign", d: "Contributed to public-facing campaigns translating clinical knowledge into accessible community education.", i: Megaphone },
            { tag: "Tech · Freelancing", t: "DEPI Freelancing Journey", d: "Five approved frontend gigs delivered — modern interfaces shipped under real client constraints.", i: Code2 },
          ].map((p, i) => (
            <article key={p.t} className="group glass glass-hover rounded-3xl overflow-hidden reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="relative h-48 bg-gradient-primary overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40" />
                <p.i className="absolute inset-0 m-auto w-16 h-16 text-primary-foreground/80 group-hover:scale-110 transition-transform" />
                <div className="absolute top-4 left-4 text-xs uppercase tracking-widest text-primary-foreground/90 glass px-3 py-1 rounded-full">{p.tag}</div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl mb-3">{p.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-primary-glow text-sm group-hover:gap-3 transition-all">
                  View details <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Lightbox
        items={[{ src: pharmaPoster, title: "Pharmacognosy Project Poster", caption: "Academic research · Project Leader" }]}
        index={open ? 0 : null}
        onClose={() => setOpen(false)}
        onPrev={() => {}}
        onNext={() => {}}
      />
    </section>
  );
};

/* ---------------- Skills ---------------- */
const skillGroups = [
  { label: "Pharmacy & Healthcare", items: ["Community Pharmacy", "Pharmacy Operations", "Inventory Management", "OTC Products", "Customer Service"] },
  { label: "Leadership & Soft", items: ["Leadership", "Team Management", "Communication", "Research Skills"] },
  { label: "Technology", items: ["HTML", "CSS", "Frontend Development", "Microsoft Office"] },
];
export const Skills = () => (
  <section id="skills" className="relative py-32 bg-gradient-to-b from-secondary/30 to-background">
    <div className="container">
      <div className="max-w-3xl reveal">
        <SectionLabel>08 · Skills</SectionLabel>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-6">
          A toolkit built across <span className="italic text-gradient-primary">three worlds.</span>
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 mt-16">
        {skillGroups.map((g, gi) => (
          <div key={g.label} className="glass rounded-3xl p-8 reveal" style={{ transitionDelay: `${gi * 80}ms` }}>
            <h3 className="font-display text-xl mb-6 text-primary-glow">{g.label}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="px-4 py-2 rounded-full bg-secondary text-sm border border-border hover:border-primary hover:text-primary-glow transition-colors cursor-default">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- Certificates (showcase with modal) ---------------- */
const certificates: { src: string; t: string; o: string; badge: string; tag: string }[] = [
  { src: certMaestro,   t: "The Maestro",                    o: "SCOPS · Community Pharmacy Workshop", badge: "Outstanding Performance", tag: "Workshop" },
  { src: certKingTeam,  t: "King of the Team",               o: "SCOPS · Community Pharmacy Workshop", badge: "Leadership Excellence", tag: "Leadership" },
  { src: certKingGen,   t: "King of the Generation",         o: "SCOPS · Community Pharmacy Workshop", badge: "Generation Honor", tag: "Honor" },
  { src: certBestMovie, t: "Best Movie — Antibodies",        o: "SCOPS · Community Pharmacy Workshop", badge: "Best Creative Work", tag: "Activity" },
  { src: certSeropipe,  t: "Awareness Campaign",             o: "Seropipe · SCOPS", badge: "Voice for Change", tag: "Awareness" },
];

export const Certifications = () => {
  const [idx, setIdx] = useState<number | null>(null);
  const items: LightboxItem[] = certificates.map((c) => ({ src: c.src, title: c.t, caption: `${c.o} · ${c.badge}` }));
  return (
    <section id="certificates" className="relative py-32">
      <div className="container">
        <div className="max-w-3xl reveal">
          <SectionLabel>09 · Certificates</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-6">
            Credentials & <span className="italic text-gradient-primary">recognition.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl">A curated showcase — click any certificate to preview.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {certificates.map((c, i) => (
            <button
              key={c.t}
              onClick={() => setIdx(i)}
              className="group glass glass-hover rounded-3xl overflow-hidden reveal text-left"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={c.src} alt={c.t} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-[10px] uppercase tracking-widest text-primary-glow">
                  <Award className="w-3 h-3" /> {c.tag}
                </div>
                <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full glass text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3 h-3" /> Preview
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl leading-tight">{c.t}</h3>
                <div className="mt-1 text-xs text-muted-foreground">{c.o}</div>
                <div className="mt-3 inline-flex items-center gap-2 text-xs text-primary-glow">
                  <Sparkles className="w-3 h-3" /> {c.badge}
                </div>
              </div>
            </button>
          ))}
          {/* DEPI placeholder card */}
          <div className="glass rounded-3xl p-8 reveal flex flex-col justify-between">
            <div>
              <Code2 className="w-8 h-8 text-primary-glow mb-4" />
              <h3 className="font-display text-xl">DEPI Frontend Training</h3>
              <div className="mt-1 text-sm text-muted-foreground">Digital Egypt Pioneers Initiative</div>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 text-xs text-primary-glow uppercase tracking-widest">
              <FileCheck className="w-3.5 h-3.5" /> In progress · 2025–2026
            </div>
          </div>
        </div>
      </div>
      <Lightbox
        items={items}
        index={idx}
        onClose={() => setIdx(null)}
        onPrev={() => setIdx((i) => (i === null ? null : (i - 1 + items.length) % items.length))}
        onNext={() => setIdx((i) => (i === null ? null : (i + 1) % items.length))}
      />
    </section>
  );
};

/* ---------------- Gallery (masonry + filter + lightbox) ---------------- */
type GalleryEntry = { src: string; cat: string; t: string };
const galleryItems: GalleryEntry[] = [
  { src: ahmedPortrait, cat: "Professional Portraits", t: "Ahmed Mamdouh" },
  { src: marblePortrait, cat: "Professional Portraits", t: "Editorial Portrait" },
  { src: activityTeam, cat: "Leadership Activities", t: "SCOPS Leadership" },
  { src: activityGroup, cat: "SCOPS Activities", t: "SCOPS Team Gathering" },
  { src: activityCampaign, cat: "Awareness Campaigns", t: "Healthcare Awareness Day" },
  { src: pharmaPoster, cat: "Academic Projects", t: "Pharmacognosy Poster" },
  { src: certMaestro, cat: "Certificates", t: "The Maestro" },
  { src: certKingTeam, cat: "Certificates", t: "King of the Team" },
  { src: certKingGen, cat: "Certificates", t: "King of the Generation" },
  { src: certBestMovie, cat: "Certificates", t: "Best Movie — Antibodies" },
  { src: certSeropipe, cat: "Awareness Campaigns", t: "Seropipe Awareness" },
];
const categories = ["All", "Professional Portraits", "Leadership Activities", "SCOPS Activities", "Awareness Campaigns", "Academic Projects", "Certificates"];

export const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [idx, setIdx] = useState<number | null>(null);
  const filtered = filter === "All" ? galleryItems : galleryItems.filter((g) => g.cat === filter);
  const items: LightboxItem[] = filtered.map((g) => ({ src: g.src, title: g.t, caption: g.cat }));

  return (
    <section id="gallery" className="relative py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="container">
        <div className="max-w-3xl reveal">
          <SectionLabel>10 · Gallery</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-6">
            Moments that <span className="italic text-gradient-primary">tell the story.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl">A categorized look at the achievements behind the headlines.</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-10 reveal">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest border transition-all ${
                filter === c
                  ? "bg-gradient-primary text-primary-foreground border-transparent glow-primary"
                  : "glass border-border hover:border-primary hover:text-primary-glow"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {filtered.map((g, i) => (
            <button
              key={`${g.src}-${i}`}
              onClick={() => setIdx(i)}
              className="group relative mb-6 w-full break-inside-avoid block glass rounded-3xl overflow-hidden glass-hover animate-fade-in"
              style={{ animationDelay: `${(i % 6) * 60}ms` }}
            >
              <img
                src={g.src}
                alt={g.t}
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-[1.04] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="text-[10px] uppercase tracking-widest text-primary-glow">{g.cat}</div>
                <div className="font-display text-lg">{g.t}</div>
              </div>
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full glass grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <ImageIcon className="w-10 h-10 mx-auto mb-3 opacity-50" />
            Nothing here yet.
          </div>
        )}
      </div>

      <Lightbox
        items={items}
        index={idx}
        onClose={() => setIdx(null)}
        onPrev={() => setIdx((i) => (i === null ? null : (i - 1 + items.length) % items.length))}
        onNext={() => setIdx((i) => (i === null ? null : (i + 1) % items.length))}
      />
    </section>
  );
};

/* ---------------- Current Focus ---------------- */
const focus = [
  { i: GraduationCap, t: "PharmD Studies", d: "Deepening clinical and scientific foundations at MUST." },
  { i: Code2, t: "DEPI Frontend Track", d: "Sharpening modern web engineering and shipping practice." },
  { i: Brain, t: "Research & Pharmacognosy", d: "Building research depth through team-led academic projects." },
  { i: Target, t: "Internship Opportunities", d: "Actively open to roles bridging healthcare and technology." },
];
export const CurrentFocus = () => (
  <section className="relative py-32">
    <div className="container">
      <div className="max-w-3xl reveal">
        <SectionLabel>11 · Current Focus</SectionLabel>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-6">
          What I'm <span className="italic text-gradient-primary">building right now.</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {focus.map((f, i) => (
          <div key={f.t} className="glass glass-hover rounded-3xl p-6 reveal" style={{ transitionDelay: `${i * 60}ms` }}>
            <f.i className="w-8 h-8 text-primary-glow mb-4" />
            <h3 className="font-display text-lg mb-2">{f.t}</h3>
            <p className="text-sm text-muted-foreground">{f.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- Quote ---------------- */
export const QuoteSection = () => (
  <section className="relative py-32">
    <div className="container max-w-5xl text-center reveal">
      <Quote className="w-14 h-14 mx-auto text-primary mb-8 opacity-60" />
      <blockquote className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight">
        <span className="text-gradient">"I believe that meaningful impact happens when </span>
        <span className="italic text-gradient-primary">healthcare, technology, and leadership</span>
        <span className="text-gradient"> work together."</span>
      </blockquote>
      <div className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-muted-foreground">
        <span className="w-10 h-px bg-primary" /> Ahmed Mamdouh
      </div>
    </div>
  </section>
);

/* ---------------- Featured Certificates (before Contact) ---------------- */
const featured = [certificates[0], certificates[1], certificates[2]];
export const FeaturedCertificates = () => {
  const [idx, setIdx] = useState<number | null>(null);
  const items: LightboxItem[] = featured.map((c) => ({ src: c.src, title: c.t, caption: `${c.o} · ${c.badge}` }));
  return (
    <section className="relative py-32 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container">
        <div className="max-w-3xl reveal">
          <SectionLabel>12 · Featured Recognition</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-6">
            Honors that <span className="italic text-gradient-primary">stand out.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {featured.map((c, i) => (
            <button
              key={c.t}
              onClick={() => setIdx(i)}
              className="group relative glass rounded-3xl overflow-hidden glass-hover reveal text-left"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={c.src} alt={c.t} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
                <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-primary text-primary-foreground text-[10px] uppercase tracking-widest glow-primary">
                  <Crown className="w-3 h-3" /> {c.badge}
                </div>
              </div>
              <div className="relative p-6">
                <h3 className="font-display text-xl">{c.t}</h3>
                <div className="mt-1 text-xs text-muted-foreground">{c.o}</div>
                <div className="mt-4 inline-flex items-center gap-2 text-xs text-primary-glow">
                  <Eye className="w-3.5 h-3.5" /> Tap to preview
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <Lightbox
        items={items}
        index={idx}
        onClose={() => setIdx(null)}
        onPrev={() => setIdx((i) => (i === null ? null : (i - 1 + items.length) % items.length))}
        onNext={() => setIdx((i) => (i === null ? null : (i + 1) % items.length))}
      />
    </section>
  );
};

/* ---------------- Contact ---------------- */
const socials = [
  { i: Linkedin, l: "LinkedIn", h: "https://linkedin.com" },
  { i: Github, l: "GitHub", h: "https://github.com" },
  { i: Instagram, l: "Instagram", h: "https://instagram.com" },
  { i: Facebook, l: "Facebook", h: "https://facebook.com" },
];
export const Contact = () => (
  <section id="contact" className="relative py-32 bg-gradient-to-b from-secondary/30 to-background">
    <div className="container">
      <div className="glass rounded-[2.5rem] p-10 lg:p-20 relative overflow-hidden reveal">
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-primary/20 blur-[140px]" />
        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel>13 · Let's talk</SectionLabel>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-6 leading-tight">
              Open to <span className="italic text-gradient-primary">internships</span>, collaboration, and impact.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              If you're hiring in healthcare, tech, or anything in between — I'd love to hear from you.
            </p>
            <div className="flex flex-wrap gap-4 mt-8" id="cv">
              <a href="mailto:ahmed.mamdouh@example.com" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-primary text-primary-foreground glow-primary hover:scale-105 transition-transform">
                <Mail className="w-4 h-4" /> Contact Me
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); window.print(); }} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass glass-hover">
                <Download className="w-4 h-4" /> View / Download CV
              </a>
            </div>
            <div className="flex gap-3 mt-8">
              {socials.map((s) => (
                <a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer" aria-label={s.l} className="w-12 h-12 rounded-2xl glass grid place-items-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <s.i className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="w-full bg-secondary border border-border rounded-2xl px-5 py-4 outline-none focus:border-primary transition-colors" placeholder="Your name" />
              <input className="w-full bg-secondary border border-border rounded-2xl px-5 py-4 outline-none focus:border-primary transition-colors" placeholder="Email" type="email" />
            </div>
            <input className="w-full bg-secondary border border-border rounded-2xl px-5 py-4 outline-none focus:border-primary transition-colors" placeholder="Subject" />
            <textarea rows={5} className="w-full bg-secondary border border-border rounded-2xl px-5 py-4 outline-none focus:border-primary transition-colors resize-none" placeholder="Tell me about the opportunity…" />
            <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-primary text-primary-foreground font-medium glow-primary hover:scale-[1.02] transition-transform">
              <Send className="w-4 h-4" /> Send message
            </button>
          </form>
        </div>
      </div>

      <footer className="mt-16 flex flex-col sm:flex-row gap-4 justify-between items-center text-sm text-muted-foreground">
        <div>© Ahmed Mamdouh — All Rights Reserved</div>
        <div className="flex items-center gap-2"><Sparkles className="w-3 h-3 text-primary-glow" /> Healthcare · Technology · Leadership</div>
      </footer>
    </div>
  </section>
);
