import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Marquee } from "@/components/site/Marquee";
import { Phone, MapPin, Clock, Car, ShieldCheck, Wrench, Globe2, Star } from "lucide-react";
import hero from "@/assets/hero.jpg";
import hands from "@/assets/hands.jpg";
import workshop from "@/assets/workshop.jpg";
import wheel from "@/assets/wheel.jpg";
import diagnostic from "@/assets/diagnostic.jpg";
import engine from "@/assets/engine.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Central Garage Chemnitz — Freie KFZ-Meisterwerkstatt" },
      { name: "description", content: "Premium KFZ-Service in Chemnitz. Inspektion, Reparatur, Diagnose, Reifen — markenunabhängig, ehrlich, persönlich." },
      { property: "og:title", content: "Central Garage Chemnitz" },
      { property: "og:description", content: "Freie Meisterwerkstatt in Chemnitz für alle Marken." },
    ],
  }),
  component: Home,
});

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Smooth scroll for hash links + handle initial hash on load
  useEffect(() => {
    const onHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <div className="bg-background text-foreground">
      <Header variant="dark" />

      {/* HERO */}
      <section ref={heroRef} className="ink-section relative min-h-screen bg-background text-foreground overflow-hidden">
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

      {/* VIER GRÜNDE — premium scroll showcase */}
      <ReasonsSection />

      <Marquee items={["Inspektion", "Reparatur", "Diagnose", "Reifen", "Autoglas", "Unfall"]} />

      {/* SERVICES */}
      <section id="leistungen" className="container-x py-32 md:py-48">
        <div className="flex items-end justify-between gap-8 mb-20">
          <div>
            <div className="eyebrow">03 — Leistungen</div>
            <h2 className="display-lg mt-6 max-w-[16ch]">Was wir am besten können.</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <article key={s.title} className="bg-background p-10 lg:p-12 group cursor-pointer scroll-reveal">
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
            </article>
          ))}
        </div>
      </section>

      {/* WERKSTATTERSATZWAGEN — bold statement */}
      <section
        id="ersatzwagen"
        className="ink-section relative bg-background text-foreground overflow-hidden py-32 md:py-48"
      >
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute inset-0" data-parallax="0.12">
            <img src={workshop} alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="relative container-x">
          <div className="scroll-reveal eyebrow">04 — Mobil bleiben</div>

          <div className="mt-12 grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7 scroll-reveal">
              <h2 className="display-lg max-w-[14ch]">
                Werkstatt­ersatzwagen — <em className="not-italic text-accent">ab Tag eins</em>.
              </h2>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
                Damit Ihr Alltag nicht stillsteht: Wir stellen Ihnen während
                der Reparatur einen verlässlichen Ersatzwagen — zum fairen
                Tagespreis, ohne Kleingedrucktes.
              </p>
            </div>

            <div className="lg:col-span-5 scroll-reveal scroll-reveal-delay-1 text-right">
              <div className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground mb-2">
                pauschal pro Tag
              </div>
              <div className="display-mega text-accent leading-none">19€</div>
            </div>
          </div>

          <div className="scroll-reveal scroll-reveal-delay-2 mt-20 grid sm:grid-cols-3 gap-px bg-border border border-border">
            {[
              { icon: Car, label: "Sofort verfügbar", desc: "Reservierung bei Terminbuchung" },
              { icon: ShieldCheck, label: "Voll versichert", desc: "Inkl. Haftpflicht & Vollkasko" },
              { icon: Wrench, label: "Ohne Versteckkosten", desc: "Pauschal — keine Zusatzgebühren" },
            ].map((f) => (
              <div key={f.label} className="bg-background p-10">
                <f.icon size={22} className="text-accent" />
                <div className="mt-6 font-display text-xl">{f.label}</div>
                <div className="mt-2 text-sm text-muted-foreground">{f.desc}</div>
              </div>
            ))}
          </div>

          <div className="scroll-reveal scroll-reveal-delay-3 mt-12">
            <a href="#kontakt" className="btn-primary">
              Ersatzwagen reservieren <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <section id="stimmen" className="container-x py-32 md:py-48">
        <div className="scroll-reveal flex items-end justify-between gap-8 mb-16 flex-wrap">
          <div>
            <div className="eyebrow flex items-center gap-3">
              <Globe2 size={14} className="text-accent" /> 05 — Google Bewertungen
            </div>
            <h2 className="display-lg mt-6 max-w-[20ch]">Was unsere Kunden sagen.</h2>
          </div>
          <div className="text-right">
            <div className="flex items-center justify-end gap-2 text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-current" />
              ))}
            </div>
            <div className="mt-3 font-display text-3xl">4.9 / 5.0</div>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mt-1">
              basierend auf Google
            </div>
          </div>
        </div>

        <div className="reviews-track flex gap-6 overflow-x-auto -mx-6 px-6 pb-6 snap-x">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="scroll-reveal shrink-0 w-[88%] sm:w-[460px] bg-card border border-border p-10 flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-current" />
                  ))}
                </div>
                <Globe2 size={16} className="text-muted-foreground" />
              </div>
              <p className="font-display text-xl leading-snug">"{r.quote}"</p>
              <div className="mt-auto pt-8 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center font-mono text-sm">
                  {r.initials}
                </div>
                <div>
                  <div className="font-mono text-sm">{r.name}</div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {r.when}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="scroll-reveal mt-10">
          <a
            href="https://www.google.com/maps/place/?q=Central+Garage+Chemnitz"
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow text-foreground"
          >
            Alle Bewertungen auf Google ansehen <span className="arrow">→</span>
          </a>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="kontakt" className="ink-section bg-background text-foreground py-32 md:py-48">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-6 scroll-reveal">
              <div className="eyebrow">06 — Termin</div>
              <h2 className="display-xl mt-8 max-w-[14ch]">
                Ihr Fahrzeug verdient das <em className="not-italic text-accent">Beste</em>.
              </h2>
              <p className="mt-8 max-w-md text-lg text-muted-foreground">
                Termine vergeben wir telefonisch — am besten vormittags. Wir freuen uns,
                von Ihnen zu hören.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="tel:+4937177146 72" className="btn-primary">
                  0371 7714672 <span>→</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-px bg-border border border-border self-start">
              {[
                { icon: Phone, label: "Telefon", value: "0371 7714672", href: "tel:+4937177146 72" },
                { icon: MapPin, label: "Adresse", value: "Adelsbergstraße 32\n09126 Chemnitz", href: "https://maps.app.goo.gl/Ymvu14sbcNeryovR6" },
                { icon: Clock, label: "Öffnungszeiten", value: "Mo – Fr · 08 – 18 Uhr" },
                { icon: Car, label: "Ersatzwagen", value: "19 € pauschal / Tag" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="bg-background p-8 hover:bg-secondary transition-colors scroll-reveal"
                >
                  <c.icon size={18} className="text-accent" />
                  <div className="mt-6 eyebrow">{c.label}</div>
                  <div className="mt-3 font-display text-xl whitespace-pre-line">{c.value}</div>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-20 aspect-[21/9] w-full scroll-reveal">
            <iframe
              title="Anfahrt Central Garage Chemnitz"
              src="https://www.google.com/maps?q=Adelsbergstra%C3%9Fe+32,+09126+Chemnitz&output=embed"
              className="w-full h-full grayscale contrast-110 border border-border"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ---------- Reasons section: cinematic stagger + parallax ---------- */
function ReasonsSection() {
  return (
    <section
      id="gruende"
      className="ink-section relative bg-background text-foreground overflow-hidden py-32 md:py-48"
    >
      {/* Decorative parallax layer */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div className="absolute inset-0" data-parallax="0.08">
          <img src={engine} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="relative container-x">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-5 scroll-reveal">
            <div className="eyebrow">01 — Versprechen</div>
          </div>
          <div className="lg:col-span-7 scroll-reveal scroll-reveal-delay-1">
            <h2 className="display-lg">
              Vier Gründe,<br />
              uns zu <em className="not-italic text-accent">vertrauen</em>.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {reasons.map((r, i) => (
            <article
              key={r.title}
              className={`reason-card scroll-reveal relative bg-card border border-border p-10 md:p-14 ${i % 2 === 1 ? "md:translate-y-12" : ""}`}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <r.icon size={28} className="text-muted-foreground" />
              </div>
              <h3 className="font-display text-3xl md:text-4xl mt-12 leading-[1.05]">
                {r.title}
              </h3>
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
                {r.desc}
              </p>
              <div className="mt-12 hairline" />
              <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                {r.tag}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  { title: "Reparaturen aller Art", desc: "Bremsen, Abgasanlagen, Motoren, Kupplungen — wir setzen Ihr Fahrzeug fachgerecht instand.", image: engine },
  { title: "Inspektion & Service", desc: "Wartung gemäß Herstellervorgaben — garantiekonform und transparent dokumentiert.", image: hands },
  { title: "Reifen & Felgen", desc: "Montage, Wuchten, Umziehen, Einlagern — kompetenter Reifen­service aus einer Hand.", image: wheel },
  { title: "Diagnose & Elektronik", desc: "Aktuelle Systemsoftware für präzise Fehlerdiagnose an allen Fahrzeug­marken.", image: diagnostic },
  { title: "Autoglas-Service", desc: "Reparatur und Austausch von Front-, Seiten- und Heckscheiben — schnell und sauber.", image: workshop },
  { title: "Unfallinstandsetzung", desc: "Karosserie, Lack, Mechanik — wir bringen Ihr Fahrzeug zurück in Originalzustand.", image: hero },
];

const reasons = [
  {
    title: "Meisterbetrieb seit Tag eins",
    desc: "Geprüfte Qualität, dokumentierte Arbeit, faire Kalkulation. Ohne Wenn und Aber.",
    tag: "Qualität · Transparenz",
    icon: ShieldCheck,
  },
  {
    title: "Markenunabhängig",
    desc: "Vom Kleinwagen bis zum Camper — sogar LKW nach Absprache. Eine Werkstatt für alles.",
    tag: "Alle Marken · Alle Klassen",
    icon: Wrench,
  },
  {
    title: "Garantie bleibt erhalten",
    desc: "Laut EU-Recht behalten Sie Ihre Herstellergarantie auch bei freier Werkstatt — voll und ganz.",
    tag: "EU-konform",
    icon: Globe2,
  },
  {
    title: "Mobil bleiben — 19 € / Tag",
    desc: "Werkstatt­ersatzwagen zum fairen Pauschalpreis. Damit Sie nicht stehen bleiben.",
    tag: "Ersatzwagen inklusive",
    icon: Car,
  },
];

const reviews = [
  {
    quote: "Endlich eine Werkstatt, die ehrlich kommuniziert und sauber arbeitet. Mein neuer Stammbetrieb in Chemnitz.",
    name: "Marcus Krüger",
    initials: "MK",
    when: "vor 2 Wochen",
  },
  {
    quote: "Diagnose perfekt, Reparatur exakt zum vereinbarten Preis. Persönlich, professionell — wirklich top.",
    name: "Sandra Lehmann",
    initials: "SL",
    when: "vor 1 Monat",
  },
  {
    quote: "Schnelle Terminvergabe, freundliches Team, hochwertige Qualität. Klare Empfehlung.",
    name: "Tobias Hoffmann",
    initials: "TH",
    when: "vor 1 Monat",
  },
  {
    quote: "Faire Preise, transparente Kostenvoranschläge und das Auto war pünktlich fertig. So wünscht man sich Service.",
    name: "Julia Bauer",
    initials: "JB",
    when: "vor 2 Monaten",
  },
  {
    quote: "Endlich jemand, der sich Zeit nimmt zu erklären, was am Auto gemacht wird. Sehr kompetent.",
    name: "Andreas Weber",
    initials: "AW",
    when: "vor 3 Monaten",
  },
];
