import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "#gruende", label: "Vertrauen" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ersatzwagen", label: "Ersatzwagen" },
  { href: "#werkstatt", label: "Werkstatt" },
  { href: "#stimmen", label: "Stimmen" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export function Header({ variant = "auto" }: { variant?: "auto" | "light" | "dark" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = variant === "dark";
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-background/80 border-b border-border"
          : onDark
            ? "text-ivory"
            : ""
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="font-display text-2xl tracking-tight">CGC</span>
          <span className="hidden md:inline text-[10px] uppercase tracking-[0.28em] font-mono opacity-70">
            Central Garage<br />Chemnitz
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[12px] uppercase tracking-[0.22em] font-mono opacity-80 hover:opacity-100 transition-opacity"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:+4937177146 72"
            className="text-[12px] uppercase tracking-[0.22em] font-mono opacity-80 hover:opacity-100"
          >
            0371 7714672
          </a>
          <a href="#kontakt" className="btn-primary !py-3 !px-5 text-[11px]">
            Termin
          </a>
        </div>

        <button
          aria-label="Menü"
          className="lg:hidden p-2"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background text-foreground">
          <div className="container-x py-8 flex flex-col gap-6">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-display"
              >
                {n.label}
              </a>
            ))}
            <a href="tel:+4937177146 72" className="font-mono text-sm uppercase tracking-[0.22em] mt-4 opacity-70">
              0371 7714672
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
