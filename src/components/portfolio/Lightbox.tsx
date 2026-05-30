import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type LightboxItem = { src: string; title?: string; caption?: string };

export const Lightbox = ({
  items, index, onClose, onPrev, onNext,
}: {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) => {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, onClose, onPrev, onNext]);

  if (index === null) return null;
  const item = items[index];
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl grid place-items-center p-4 sm:p-10 animate-fade-in"
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 w-12 h-12 rounded-full glass grid place-items-center hover:bg-primary hover:text-primary-foreground transition-colors z-10"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>
      {items.length > 1 && (
        <>
          <button
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass grid place-items-center hover:bg-primary hover:text-primary-foreground transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass grid place-items-center hover:bg-primary hover:text-primary-foreground transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}
      <div
        className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full flex-1 glass rounded-3xl p-3 overflow-hidden">
          <img
            src={item.src}
            alt={item.title || "Preview"}
            className="w-full h-auto max-h-[70vh] object-contain rounded-2xl"
          />
        </div>
        {(item.title || item.caption) && (
          <div className="text-center">
            {item.title && <div className="font-display text-xl">{item.title}</div>}
            {item.caption && <div className="text-sm text-muted-foreground mt-1">{item.caption}</div>}
          </div>
        )}
      </div>
    </div>
  );
};
