import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Marquee } from "@/components/site/Marquee";
import { Phone, MapPin, Clock, Car } from "lucide-react";
import hero from "@/assets/hero.jpg";
import hands from "@/assets/hands.jpg";
import workshop from "@/assets/workshop.jpg";
import wheel from "@/assets/wheel.jpg";
import diagnostic from "@/assets/diagnostic.jpg";
import engine from "@/assets/engine.jpg";
import mechanic from "@/assets/mechanic.jpg";
import storefront from "@/assets/storefront.jpg";
import restoration from "@/assets/restoration.jpg";
import classicLift from "@/assets/classic-lift.jpg";
import workshopBay from "@/assets/workshop-bay.jpg";
import engineSwap from "@/assets/engine-swap.jpg";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Central Garage Chemnitz — Freie KFZ-Meisterwerkstatt" },
      { name: "description", content: "Premium KFZ-Service in Chemnitz. Inspektion, Reparatur, Diagnose, Reifenservice — markenunabhängig und ehrlich." },
      { property: "og:title", content: "Central Garage Chemnitz" },
      { property: "og:description", content: "Freie Meisterwerkstatt in Chemnitz für alle Marken." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Header variant="dark" />

      {/* 1 — HERO */}
      <section className="ink-section relative min-h-screen bg-background text-foreground overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" data-parallax="0.18">
            <img
              src={hero}
              alt="Premium-Fahrzeug in der Central Garage Chemnitz"
              className="w-full h-full object-cover ken-burns scale-110"
              width={1920}
              height={1080}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/30 to-transparent" />
        </div>

        <div className="relative container-x flex flex-col min-h-screen pt-32 pb-16">
          <div className="reveal flex items-center gap-4 text-[11px] uppercase tracking-[0.28em] font-mono text-muted-foreground">
            <span className="h-px w-10 bg-accent" />
            <span>Est. Chemnitz · Freie Meisterwerkstatt</span>
          </div>

          <h1 className="reveal reveal-delay-1 display-xl mt-10 max-w-[14ch]">
            Handwerk in <em className="not-italic text-accent">Bewegung</em>.
          </h1>

          <p className="reveal reveal-delay-2 mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Wir reparieren nicht nur — wir setzen instand. Markenunabhängig,
            ehrlich, transparent. Persönlich, professionell, (c)zentral.
          </p>

          <div className="reveal reveal-delay-3 mt-12 flex flex-wrap items-center gap-4">
            <a href="#kontakt" className="btn-primary">
              Termin vereinbaren <span>→</span>
            </a>
            <a href="#leistungen" className="btn-ghost">
              Leistungen ansehen
            </a>
          </div>

          <div className="reveal reveal-delay-4 mt-auto pt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border/30">
            {[
              ["3", "Hebebühnen"],
              ["Alle", "Marken"],
              ["EU-konform", "Garantie bleibt"],
              ["19 €", "Ersatzwagen / Tag"],
            ].map(([k, v]) => (
              <div key={v} className="pt-8">
                <div className="font-display text-3xl">{k}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.22em] font-mono text-muted-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
          <span>Scroll</span>
          <span className="h-12 w-px bg-current opacity-60" />
        </div>
      </section>

      {/* INTRO BRIDGE — Werkstatt 00 */}
      <section className="container-x pt-32 md:pt-48 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <div className="lg:col-span-6 scroll-reveal">
            <h2 className="display-lg max-w-[18ch]">
              Eine Werkstatt, die das Wort <em className="not-italic text-accent">Meister</em> wieder ernst nimmt.
            </h2>
            <p className="mt-10 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Seit 2025 finden Sie uns am neuen, größeren Standort. Drei Hebebühnen,
              modernste Diagnose, freie Markenwahl — und ein Team, das Ihr Fahrzeug
              behandelt wie das eigene.
            </p>
          </div>
          <div className="lg:col-span-6 scroll-reveal scroll-reveal-delay-1">
            <div className="eyebrow">00 — Werkstatt</div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground mt-6 mb-6">
              Adelsbergstraße 32 · 09126 Chemnitz
            </p>
          </div>
        </div>
      </section>

      {/* Flush image + marquee block */}
      <div className="relative">
        <div className="relative aspect-[16/9] md:aspect-[21/9] image-zoom overflow-hidden">
          <img
            src={storefront}
            alt="Central Garage Chemnitz Außenansicht bei Nacht"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-8 md:bottom-12 left-6 md:left-16 right-6 md:right-16 flex items-end justify-between gap-4">
            <div>
              <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-ivory/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                Standort
              </div>
              <div className="font-display font-semibold text-3xl md:text-5xl lg:text-6xl text-ivory mt-3 leading-[0.95] drop-shadow-[0_4px_18px_rgba(0,0,0,0.85)]">
                Adelsbergstraße 32
              </div>
              <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-ivory/80 mt-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                09126 Chemnitz
              </div>
            </div>
          </div>
        </div>
        <div className="-mt-px">
          <Marquee items={["Inspektion", "Reparatur", "Diagnose", "Reifen", "Autoglas", "Unfall"]} />
        </div>
      </div>

      {/* 2 — VIER GRÜNDE */}
      <section id="gruende" className="ink-section bg-background text-foreground relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[100vh] overflow-hidden">
            <img src={hands} alt="Meisterhafte Handarbeit" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/40" />
            <div className="absolute bottom-10 left-10 right-10 font-mono text-[10px] uppercase tracking-[0.3em] text-ivory/70">
              Werkstatt · Adelsbergstraße 32
            </div>
          </div>
          <div className="px-8 md:px-16 lg:px-24 pb-24 lg:pb-32 pt-24 md:pt-32 lg:pt-40 flex flex-col justify-center">
            <div className="eyebrow scroll-reveal">01 — Versprechen</div>
            <h2 className="display-lg mt-6 scroll-reveal scroll-reveal-delay-1">Vier Gründe,<br />uns zu vertrauen.</h2>
            <ul className="mt-16 space-y-10">
              {reasons.map((r, i) => (
                <li
                  key={r.title}
                  className={`grid grid-cols-[auto_1fr] gap-8 pb-10 border-b border-border last:border-0 scroll-reveal scroll-reveal-delay-${Math.min(i + 1, 4)}`}
                >
                  <div className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <h3 className="font-display text-2xl">{r.title}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{r.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section id="leistungen" className="container-x py-32 md:py-48">
        <div className="flex items-end justify-between gap-8 mb-20 scroll-reveal">
          <div>
            <div className="eyebrow">02 — Leistungen</div>
            <h2 className="display-lg mt-6 max-w-[16ch]">Was wir am besten können.</h2>
          </div>
          <a href="#kontakt" className="link-arrow hidden md:inline-flex">
            Termin anfragen <span className="arrow">→</span>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`bg-background p-10 lg:p-12 group cursor-pointer scroll-reveal scroll-reveal-delay-${(i % 3) + 1}`}
            >
              <div className="aspect-[4/3] image-zoom mb-8">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                <h3 className="font-display text-2xl tracking-tight">{s.title}</h3>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-6 grid grid-cols-2 gap-2 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2"><span className="text-accent">+</span>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* 4 — ERSATZWAGEN HIGHLIGHT — full hero image */}
      <section id="ersatzwagen" className="ink-section relative overflow-hidden min-h-[90vh] flex items-center text-ivory">
        <div className="absolute inset-0">
          <div className="absolute inset-0 w-full h-full" data-parallax="0.1">
            <img
              src={wheel}
              alt="Werkstattersatzwagen — Mobilität inklusive"
              className="w-full h-full object-cover scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/70" />
        </div>
        <div className="relative container-x py-32 md:py-48 w-full">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 scroll-reveal">
              <div className="eyebrow">03 — Mobil bleiben</div>
              <h2 className="display-xl mt-8">
                <span className="text-accent">19 €</span><br />pro Tag.<br />Mobilität inklusive.
              </h2>
              <p className="mt-10 max-w-xl text-lg text-ivory/80 leading-relaxed">
                Unser Werkstattersatzwagen kostet 19 € am Tag — damit Sie nicht stehen bleiben,
                während wir Ihr Fahrzeug zurück in Bestform bringen. Reservierung empfohlen.
              </p>
              <div className="mt-12 flex flex-wrap gap-4">
                <a href="tel:+4937177146 72" className="btn-primary"><Phone size={16} />0371 7714672</a>
                <a href="#kontakt" className="btn-ghost">Reservieren</a>
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-px bg-border/40 backdrop-blur-md scroll-reveal scroll-reveal-delay-2">
              {[
                [Car, "Verfügbar", "Auf Anfrage"],
                [Clock, "Übergabe", "Vormittags"],
                [MapPin, "Abholung", "Adelsbergstr. 32"],
                [Phone, "Buchung", "Telefonisch"],
              ].map(([Icon, k, v]: any, i) => (
                <div key={i} className="bg-background/70 backdrop-blur-md p-8">
                  <Icon size={18} className="text-accent" />
                  <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-ivory/70">{k}</div>
                  <div className="mt-2 font-display text-lg text-ivory">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5 — WERKSTATT / ABOUT */}
      <section id="werkstatt" className="container-x py-32 md:py-48">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32 scroll-reveal">
            <div className="eyebrow">04 — Werkstatt</div>
            <h2 className="display-lg mt-6">Persönlich.<br />Professionell.<br /><em className="not-italic text-accent">(c)zentral.</em></h2>
            <p className="mt-10 text-lg text-muted-foreground leading-relaxed">
              Eine freie Meisterwerkstatt, die handwerkliche Präzision mit ehrlicher
              Beratung verbindet — mitten in Chemnitz.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-12">
            <div className="aspect-[4/3] image-zoom scroll-reveal scroll-reveal-img">
              <img src={workshop} alt="Werkstatt" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-8 text-lg leading-relaxed text-muted-foreground scroll-reveal scroll-reveal-delay-1">
              <p className="text-2xl text-foreground font-display leading-snug">
                Drei Hebebühnen. Modernste Diagnose. Ein Team, das sein Handwerk liebt.
              </p>
              <p>
                Seit August 2025 finden Sie uns am neuen, größeren Standort in der
                Adelsbergstraße 32. Drei moderne Hebebühnen und ein deutlich
                erweiterter Werkstattbereich erlauben es uns, Sie schneller, effizienter
                und mit höchster Sorgfalt zu betreuen.
              </p>
              <p>
                Markenunabhängig bedeutet bei uns: vom Kleinwagen über den Transporter bis
                hin zum Camper — und auf Anfrage auch LKW. Privat oder gewerblich,
                Einzelfahrzeug oder Fuhrpark.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="aspect-square image-zoom scroll-reveal scroll-reveal-img"><img src={mechanic} alt="Mechaniker" loading="lazy" className="w-full h-full object-cover grayscale" /></div>
              <div className="aspect-square image-zoom scroll-reveal scroll-reveal-img scroll-reveal-delay-1"><img src={diagnostic} alt="Diagnose" loading="lazy" className="w-full h-full object-cover" /></div>
            </div>
          </div>
        </div>

        {/* Numbers */}
        <div className="mt-32 border-y border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              ["3", "Hebebühnen"],
              ["100%", "Markenunabhängig"],
              ["19 €", "Ersatzwagen / Tag"],
              ["EU", "Garantie­konform"],
            ].map(([k, v]) => (
              <div key={v} className="px-6 md:px-10 py-16 text-center scroll-reveal">
                <div className="font-display text-5xl md:text-7xl">{k}</div>
                <div className="mt-4 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — STIMMEN / GOOGLE REVIEWS */}
      <section id="stimmen" className="ink-section bg-background text-foreground py-32 md:py-48">
        <div className="container-x">
          <div className="flex items-end justify-between flex-wrap gap-6 scroll-reveal">
            <div>
              <div className="eyebrow">05 — Stimmen</div>
              <h2 className="display-lg mt-6 max-w-[20ch]">Was unsere Kunden sagen.</h2>
            </div>
            <div className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Google Bewertungen · <span className="text-accent">★★★★★</span>
            </div>
          </div>
          <div className="mt-20 grid md:grid-cols-3 gap-px bg-border">
            {testimonials.map((t, i) => (
              <blockquote key={t.name} className={`bg-background p-10 lg:p-12 scroll-reveal scroll-reveal-delay-${i + 1}`}>
                <div className="text-accent text-2xl mb-6">★★★★★</div>
                <p className="font-display text-xl leading-relaxed">"{t.quote}"</p>
                <footer className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  — {t.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="container-x py-32 md:py-48">
        <div className="scroll-reveal mb-16">
          <div className="eyebrow">06 — Eindrücke</div>
          <h2 className="display-lg mt-6">Aus der Werkstatt.</h2>
        </div>
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-8 aspect-[16/10] image-zoom scroll-reveal scroll-reveal-img"><img src={workshopBay} alt="Werkstattbereich mit Hebebühne" loading="lazy" className="w-full h-full object-cover" /></div>
          <div className="col-span-6 md:col-span-4 aspect-[4/5] image-zoom scroll-reveal scroll-reveal-img scroll-reveal-delay-1"><img src={restoration} alt="Karosserie-Restauration" loading="lazy" className="w-full h-full object-cover" /></div>
          <div className="col-span-6 md:col-span-4 aspect-square image-zoom scroll-reveal scroll-reveal-img"><img src={engineSwap} alt="Motorwechsel an Mercedes" loading="lazy" className="w-full h-full object-cover" /></div>
          <div className="col-span-6 md:col-span-4 aspect-square image-zoom scroll-reveal scroll-reveal-img scroll-reveal-delay-1"><img src={classicLift} alt="Oldtimer auf Hebebühne" loading="lazy" className="w-full h-full object-cover" /></div>
          <div className="col-span-12 md:col-span-4 aspect-square image-zoom scroll-reveal scroll-reveal-img scroll-reveal-delay-2"><img src={hands} alt="Reparatur Detail" loading="lazy" className="w-full h-full object-cover" /></div>
        </div>
      </section>

      {/* 7 — KONTAKT / CTA */}
      <section id="kontakt" className="ink-section bg-background text-foreground relative overflow-hidden">
        <div className="container-x py-32 md:py-48">
          <div className="text-center scroll-reveal">
            <div className="eyebrow justify-center">07 — Termin</div>
            <h2 className="display-xl mt-8 max-w-[18ch] mx-auto">
              Ihr Fahrzeug<br />verdient das <em className="not-italic text-accent">Beste</em>.
            </h2>
            <p className="mt-10 max-w-xl mx-auto text-lg text-muted-foreground">
              Termine vergeben wir telefonisch — am besten vormittags. Wir freuen uns,
              von Ihnen zu hören.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a href="tel:+4937177146 72" className="btn-primary">0371 7714672 <span>→</span></a>
              <a href="https://maps.app.goo.gl/Ymvu14sbcNeryovR6" target="_blank" rel="noreferrer" className="btn-ghost">Anfahrt</a>
            </div>
          </div>

          <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border scroll-reveal scroll-reveal-delay-1">
            {[
              { icon: Phone, label: "Telefon", value: "0371 7714672", href: "tel:+4937177146 72" },
              { icon: MapPin, label: "Adresse", value: "Adelsbergstraße 32\n09126 Chemnitz", href: "https://maps.app.goo.gl/Ymvu14sbcNeryovR6" },
              { icon: Clock, label: "Öffnungszeiten", value: "Mo – Fr\n08:00 – 18:00 Uhr" },
              { icon: Car, label: "Service", value: "Werkstattersatzwagen\n19 € / Tag" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="bg-background p-8 lg:p-10 group hover:bg-secondary transition-colors"
              >
                <c.icon size={20} className="text-accent" />
                <div className="mt-6 eyebrow">{c.label}</div>
                <div className="mt-3 font-display text-xl whitespace-pre-line leading-snug">{c.value}</div>
              </a>
            ))}
          </div>

          <div className="mt-20 grid lg:grid-cols-2 gap-px bg-border border border-border scroll-reveal">
            <div className="bg-background p-2">
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full w-full overflow-hidden">
                <iframe
                  title="Anfahrt Central Garage Chemnitz"
                  src="https://www.google.com/maps?q=Adelsbergstra%C3%9Fe+32,+09126+Chemnitz&output=embed"
                  className="w-full h-full min-h-[420px] grayscale contrast-110"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="bg-background p-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const services = [
  { title: "Reparaturen aller Art", desc: "Bremsen, Abgasanlagen, Motoren, Kupplungen — wir setzen Ihr Fahrzeug fachgerecht instand.", image: engine, points: ["Bremsen", "Auspuff", "Motor", "Kupplung"] },
  { title: "Inspektion & Service", desc: "Wartung gemäß Herstellervorgaben — garantiekonform und transparent dokumentiert.", image: hands, points: ["Öl & Filter", "Service­heft", "Bremsflüssigkeit", "Innenraumfilter"] },
  { title: "Reifen & Felgen", desc: "Montage, Wuchten, Umziehen, Einlagern — kompetenter Reifen­service aus einer Hand.", image: wheel, points: ["Montage", "Wuchten", "Wechsel", "Einlagerung"] },
  { title: "Diagnose & Elektronik", desc: "Aktuelle Systemsoftware für präzise Fehlerdiagnose an allen Fahrzeug­marken.", image: diagnostic, points: ["Fehlercodes", "Steuergeräte", "Sensorik", "Codierung"] },
  { title: "Autoglas-Service", desc: "Reparatur und Austausch von Front-, Seiten- und Heckscheiben — schnell und sauber.", image: workshop, points: ["Steinschlag", "Tausch", "Versicherung", "Kalibrierung"] },
  { title: "Unfallinstandsetzung", desc: "Karosserie, Lack, Mechanik — wir bringen Ihr Fahrzeug zurück in Originalzustand.", image: hero, points: ["Karosserie", "Lack", "Achsen", "Gutachten"] },
];

const reasons = [
  { title: "Meisterbetrieb seit Tag eins", desc: "Geprüfte Qualität, dokumentierte Arbeit, faire Kalkulation. Ohne Wenn und Aber." },
  { title: "Markenunabhängig", desc: "Vom Kleinwagen bis zum Camper. Sogar LKW nach Absprache." },
  { title: "Garantie bleibt erhalten", desc: "Laut EU-Recht behalten Sie Ihre Herstellergarantie auch bei freier Werkstatt." },
  { title: "Mobil bleiben", desc: "Werkstatt­ersatzwagen für nur 19 € am Tag — damit Sie nicht stehen bleiben." },
];

const testimonials = [
  { quote: "Endlich eine Werkstatt, die ehrlich kommuniziert und sauber arbeitet. Mein neuer Stammbetrieb.", name: "M. Krüger" },
  { quote: "Diagnose perfekt, Reparatur zum vereinbarten Preis. Persönlich und absolut professionell.", name: "S. Lehmann" },
  { quote: "Schnelle Terminvergabe, freundliches Team, top Qualität. Klare Empfehlung in Chemnitz.", name: "T. Hoffmann" },
];
