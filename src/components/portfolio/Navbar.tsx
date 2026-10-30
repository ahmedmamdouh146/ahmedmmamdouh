import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import portrait from "@/assets/ahmed-portrait.webp";

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
  const targetId = id === "top" ? "top" : id;
  const el = targetId === "top" ? document.getElementById("top") : document.getElementById(targetId);

  if (!el) return;

  const headerOffset = 104;
  const elementPosition = el.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0.2, 0.5, 0.75] }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById("site-navbar");
      if (nav && !nav.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEsc);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 backdrop-blur-2xl bg-background/70 border-b border-border/50 shadow-[0_12px_30px_rgba(0,0,0,0.15)]"
          : "py-6"
      }`}
    >
      <nav id="site-navbar" className="container flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("top");
          }}
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
          {links.map((l) => {
            const isActive = activeId === l.id;
            return (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(l.id);
                  }}
                  className={`px-4 py-2 text-sm transition-colors relative group ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute left-4 right-4 -bottom-0.5 h-px bg-gradient-primary transition-transform origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("contact");
          }}
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-primary text-primary-foreground hover:scale-105 transition-transform glow-primary"
        >
          Contact Me
        </a>

        <button
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background/60 text-foreground backdrop-blur-sm transition hover:border-primary/80"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden absolute top-full inset-x-4 mt-2 rounded-2xl p-6 bg-background/95 backdrop-blur-2xl border border-border shadow-2xl animate-fade-in">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(l.id);
                    setOpen(false);
                  }}
                  className={`block py-3 px-4 rounded-xl font-medium transition-colors ${
                    activeId === l.id
                      ? "bg-primary/10 text-primary-glow"
                      : "text-foreground/90 hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("contact");
                setOpen(false);
              }}
              className="mt-3 inline-flex justify-center items-center px-5 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium w-full"
            >
              Contact Me
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};
