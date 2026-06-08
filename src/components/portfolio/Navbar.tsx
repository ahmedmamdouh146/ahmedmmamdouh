import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import portrait from "@/assets/ahmed-portrait.jpg";

const links = [
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

const scrollToId = (id: string) => {
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-2xl bg-background/70 border-b border-border/50" : "py-6"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); scrollToId("top"); }}
          className="flex items-center gap-2 group"
        >
          <span className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-primary/50 group-hover:scale-110 transition-transform">
            <img src={portrait} alt="Ahmed Mamdouh" className="w-full h-full object-cover" />
          </span>
          <span className="font-display tracking-tight text-lg hidden sm:inline">
            Ahmed <span className="text-gradient-primary">Mamdouh</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={(e) => { e.preventDefault(); scrollToId(l.id); }}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {l.label}
                <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollToId("contact"); }}
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-primary text-primary-foreground hover:scale-105 transition-transform glow-primary"
        >
          Contact Me
        </a>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden absolute top-full inset-x-4 mt-2 rounded-2xl p-6 bg-background/95 backdrop-blur-2xl border border-border shadow-2xl animate-fade-in">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => { e.preventDefault(); scrollToId(l.id); setOpen(false); }}
                  className="block py-3 px-4 rounded-xl text-foreground/90 hover:text-primary hover:bg-primary/10 transition-colors font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToId("contact"); setOpen(false); }}
              className="mt-3 inline-flex justify-center items-center px-5 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium"
            >
              Contact Me
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};
