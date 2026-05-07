import { useState } from "react";
import { LegalModal } from "./LegalModal";

export function Footer() {
  const [legal, setLegal] = useState<null | "impressum" | "datenschutz">(null);
  return (
    <footer className="ink-section bg-background text-foreground border-t border-border">
      <div className="container-x py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="font-display text-5xl md:text-6xl leading-[0.95] tracking-tight">
              Bereit, wenn<br />Sie es sind.
            </div>
            <p className="mt-8 max-w-md text-muted-foreground leading-relaxed">
              Freie Meisterwerkstatt für alle Marken. Persönlich,
              professionell, (c)zentral — mitten in Chemnitz.
            </p>
            <a href="#kontakt" className="btn-primary mt-10">
              Termin vereinbaren
              <span>→</span>
            </a>
          </div>

          <div className="lg:col-span-2">
            <div className="eyebrow mb-6">Navigation</div>
            <ul className="space-y-3 text-sm">
              <li><a href="#gruende" className="hover:text-accent">Vertrauen</a></li>
              <li><a href="#leistungen" className="hover:text-accent">Leistungen</a></li>
              <li><a href="#ersatzwagen" className="hover:text-accent">Ersatzwagen</a></li>
              <li><a href="#werkstatt" className="hover:text-accent">Werkstatt</a></li>
              <li><a href="#kontakt" className="hover:text-accent">Kontakt</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="eyebrow mb-6">Kontakt</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="tel:+4937177146 72" className="hover:text-foreground">0371 7714672</a></li>
              <li>Adelsbergstraße 32</li>
              <li>09126 Chemnitz</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="eyebrow mb-6">Öffnungszeiten</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex justify-between"><span>Mo – Fr</span><span className="text-foreground">08 – 18 Uhr</span></li>
              <li className="flex justify-between"><span>Sa</span><span>Geschlossen</span></li>
              <li className="flex justify-between"><span>So</span><span>Geschlossen</span></li>
            </ul>
            <div className="mt-8 text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
              Werkstattersatzwagen<br /><span className="text-foreground">19 € / Tag</span>
            </div>
          </div>
        </div>

        <div className="hairline mt-20" />
        <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
          <div>© {new Date().getFullYear()} Central Garage Chemnitz</div>
          <div className="flex gap-6">
            <button onClick={() => setLegal("impressum")} className="hover:text-accent transition-colors">Impressum</button>
            <button onClick={() => setLegal("datenschutz")} className="hover:text-accent transition-colors">Datenschutz</button>
          </div>
        </div>
      </div>

      <LegalModal open={legal !== null} onOpenChange={(v) => !v && setLegal(null)} kind={legal ?? "impressum"} />
    </footer>
  );
}
