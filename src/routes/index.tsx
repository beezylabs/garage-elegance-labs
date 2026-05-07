import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Marquee } from "@/components/site/Marquee";
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
      { name: "description", content: "Premium KFZ-Service in Chemnitz. Inspektion, Reparatur, Diagnose, Reifenservice — markenunabhängig und ehrlich." },
      { property: "og:title", content: "Central Garage Chemnitz" },
      { property: "og:description", content: "Freie Meisterwerkstatt in Chemnitz für alle Marken." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header variant="dark" />

      {/* HERO */}
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
            <Link to="/kontakt" className="btn-primary">
              Termin vereinbaren <span>→</span>
            </Link>
            <Link to="/leistungen" className="btn-ghost">
              Leistungen ansehen
            </Link>
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

      {/* INTRO */}
      <section className="container-x py-32 md:py-48">
        <div className="grid lg:grid-cols-12 gap-16 items-end">
          <div className="lg:col-span-5">
            <div className="eyebrow">01 — Werkstatt</div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground mt-12">
              Adelsbergstraße 32<br />09126 Chemnitz
            </p>
          </div>
          <div className="lg:col-span-7">
            <h2 className="display-lg max-w-[18ch]">
              Eine Werkstatt, die das Wort <em className="not-italic text-accent">Meister</em> wieder ernst nimmt.
            </h2>
            <p className="mt-10 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Seit 2025 finden Sie uns am neuen, größeren Standort. Drei Hebebühnen,
              modernste Diagnose, freie Markenwahl — und ein Team, das Ihr Fahrzeug
              behandelt wie das eigene.
            </p>
            <Link to="/werkstatt" className="link-arrow mt-10 text-foreground">
              Mehr über uns <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Marquee items={["Inspektion", "Reparatur", "Diagnose", "Reifen", "Autoglas", "Unfall"]} />

      {/* SERVICES */}
      <section className="container-x py-32 md:py-48">
        <div className="flex items-end justify-between gap-8 mb-20">
          <div>
            <div className="eyebrow">02 — Leistungen</div>
            <h2 className="display-lg mt-6 max-w-[16ch]">Was wir am besten können.</h2>
          </div>
          <Link to="/leistungen" className="link-arrow hidden md:inline-flex">
            Alle Leistungen <span className="arrow">→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <article key={s.title} className="bg-background p-10 lg:p-12 group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden mb-8">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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

      {/* WHY US — split image / text */}
      <section className="ink-section bg-background text-foreground">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[60vh] lg:min-h-[100vh]">
            <img src={hands} alt="Meisterhafte Handarbeit" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="px-8 md:px-16 lg:px-24 py-24 lg:py-32 flex flex-col justify-center">
            <div className="eyebrow">03 — Versprechen</div>
            <h2 className="display-lg mt-6">Vier Gründe,<br />uns zu vertrauen.</h2>
            <ul className="mt-16 space-y-10">
              {reasons.map((r, i) => (
                <li key={r.title} className="grid grid-cols-[auto_1fr] gap-8 pb-10 border-b border-border last:border-0">
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

      {/* GALLERY TEASER */}
      <section className="container-x py-32 md:py-48">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="eyebrow">04 — Galerie</div>
            <h2 className="display-lg mt-6">Eindrücke.</h2>
          </div>
          <Link to="/galerie" className="link-arrow hidden md:inline-flex">Alle ansehen <span className="arrow">→</span></Link>
        </div>
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <img src={workshop} alt="Werkstatt" loading="lazy" className="col-span-12 md:col-span-8 aspect-[16/10] object-cover" />
          <img src={wheel} alt="Reifenservice" loading="lazy" className="col-span-6 md:col-span-4 aspect-[4/5] object-cover" />
          <img src={engine} alt="Motor" loading="lazy" className="col-span-6 md:col-span-4 aspect-square object-cover" />
          <img src={diagnostic} alt="Diagnose" loading="lazy" className="col-span-6 md:col-span-4 aspect-square object-cover" />
          <img src={hands} alt="Reparatur" loading="lazy" className="col-span-12 md:col-span-4 aspect-square object-cover" />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="ink-section bg-background text-foreground py-32 md:py-48">
        <div className="container-x">
          <div className="eyebrow">05 — Stimmen</div>
          <h2 className="display-lg mt-6 max-w-[20ch]">Was unsere Kunden sagen.</h2>
          <div className="mt-20 grid md:grid-cols-3 gap-px bg-border">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="bg-background p-10 lg:p-12">
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

      {/* CTA */}
      <section className="container-x py-32 md:py-48 text-center">
        <div className="eyebrow justify-center">06 — Termin</div>
        <h2 className="display-xl mt-8 max-w-[18ch] mx-auto">
          Ihr Fahrzeug<br />verdient das <em className="not-italic text-accent">Beste</em>.
        </h2>
        <p className="mt-10 max-w-xl mx-auto text-lg text-muted-foreground">
          Termine vergeben wir telefonisch — am besten vormittags. Wir freuen uns,
          von Ihnen zu hören.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a href="tel:+4937177146 72" className="btn-primary">0371 7714672 <span>→</span></a>
          <Link to="/kontakt" className="btn-ghost">Anfahrt ansehen</Link>
        </div>
      </section>

      <Footer />
    </div>
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
