import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import workshop from "@/assets/workshop.jpg";
import mechanic from "@/assets/mechanic.jpg";
import hands from "@/assets/hands.jpg";

export const Route = createFileRoute("/werkstatt")({
  head: () => ({
    meta: [
      { title: "Werkstatt — Central Garage Chemnitz" },
      { name: "description", content: "Über die Central Garage Chemnitz: Meisterbetrieb mit drei Hebebühnen, modernster Diagnose und persönlichem Service." },
      { property: "og:title", content: "Werkstatt — Central Garage Chemnitz" },
      { property: "og:description", content: "Meisterbetrieb in Chemnitz." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="bg-background text-foreground">
      <Header />

      <section className="container-x pt-40 pb-24">
        <div className="eyebrow">Werkstatt</div>
        <h1 className="display-xl mt-10 max-w-[14ch]">
          Persönlich. Professionell. <em className="not-italic text-accent">(c)zentral</em>.
        </h1>
      </section>

      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <img src={workshop} alt="Innenansicht der Werkstatt" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      </section>

      <section className="container-x py-32 md:py-48 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <div className="eyebrow">Unsere Geschichte</div>
        </div>
        <div className="lg:col-span-7 space-y-8 text-lg leading-relaxed text-muted-foreground">
          <p className="text-2xl text-foreground font-display leading-snug">
            Eine freie Meisterwerkstatt, die handwerkliche Präzision mit ehrlicher
            Beratung verbindet — mitten in Chemnitz.
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
      </section>

      {/* Numbers */}
      <section className="border-y border-border">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            ["3", "Hebebühnen"],
            ["100%", "Markenunabhängig"],
            ["19 €", "Ersatzwagen / Tag"],
            ["EU", "Garantie­konform"],
          ].map(([k, v]) => (
            <div key={v} className="px-6 md:px-10 py-16 text-center first:pl-0 last:pr-0">
              <div className="font-display text-5xl md:text-7xl">{k}</div>
              <div className="mt-4 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Portrait */}
      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[60vh] lg:min-h-[90vh]">
          <img src={mechanic} alt="Meister" loading="lazy" className="absolute inset-0 w-full h-full object-cover grayscale" />
        </div>
        <div className="ink-section bg-background text-foreground px-8 md:px-16 lg:px-24 py-24 lg:py-32 flex flex-col justify-center">
          <div className="eyebrow">Das Team</div>
          <h2 className="display-lg mt-6">Meister.<br />Im Wortsinn.</h2>
          <p className="mt-10 text-lg text-muted-foreground leading-relaxed">
            Geprüfte Qualifikation, jahrzehntelange Erfahrung und der Anspruch, jedes
            Fahrzeug so zu behandeln wie das eigene. Bei uns reparieren keine
            Algorithmen — sondern Menschen, die ihr Handwerk lieben.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-32 md:py-48">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="eyebrow">FAQ</div>
            <h2 className="display-lg mt-6">Häufige Fragen.</h2>
          </div>
          <div className="lg:col-span-8">
            {faqs.map((f, i) => (
              <details key={i} className="group border-b border-border py-8">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-display text-xl md:text-2xl pr-8">{f.q}</span>
                  <span className="font-mono text-2xl text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="ink-section bg-background text-foreground py-32 text-center">
        <div className="container-x">
          <h2 className="display-lg max-w-[18ch] mx-auto">Lernen Sie uns kennen.</h2>
          <div className="mt-12 flex justify-center gap-4">
            <Link to="/kontakt" className="btn-primary">Termin vereinbaren</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const faqs = [
  { q: "Welche Fahrzeuge reparieren Sie?", a: "Wir reparieren Fahrzeuge aller Marken — vom PKW über Transporter bis hin zu Campern. Reparaturen an LKW sind nach vorheriger Anfrage ebenfalls möglich." },
  { q: "Verliere ich meine Herstellergarantie?", a: "Nein. Laut EU-Recht bleibt Ihre Herstellergarantie auch bei Wartung in einer freien Werkstatt erhalten — vorausgesetzt, die Arbeiten erfolgen nach Herstellervorgaben. Das ist bei uns selbstverständlich." },
  { q: "Wie vereinbare ich einen Termin?", a: "Termine vergeben wir ausschließlich telefonisch unter 0371 7714672, am besten vormittags." },
  { q: "Gibt es einen Werkstattersatzwagen?", a: "Ja, wir bieten Ihnen bei Bedarf einen Werkstattersatzwagen für nur 19 € pro Tag." },
  { q: "Arbeiten Sie auch mit Unternehmen?", a: "Ja, wir betreuen Privatkunden ebenso wie gewerbliche Fuhrparks und erstellen individuelle Wartungspläne." },
  { q: "Bieten Sie einen Abschleppdienst?", a: "In bestimmten Fällen können wir ein Abschleppen im Raum Chemnitz organisieren — bitte rufen Sie uns an, um Ihren Fall zu klären." },
];
