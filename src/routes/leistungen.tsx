import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import engine from "@/assets/engine.jpg";
import hands from "@/assets/hands.jpg";
import wheel from "@/assets/wheel.jpg";
import diagnostic from "@/assets/diagnostic.jpg";
import workshop from "@/assets/workshop.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen — Central Garage Chemnitz" },
      { name: "description", content: "Reparatur, Inspektion, Diagnose, Reifenservice, Autoglas und Unfallinstandsetzung — alles aus einer Hand in Chemnitz." },
      { property: "og:title", content: "Leistungen — Central Garage Chemnitz" },
      { property: "og:description", content: "Markenunabhängiger KFZ-Service in Chemnitz." },
    ],
  }),
  component: Page,
});

const items = [
  { n: "01", title: "Reparaturen aller Art", desc: "Bremsen, Abgasanlagen, Motoren, Kupplungen, Zahnriemen — fachgerechte Instandsetzung für sämtliche Fahrzeugtypen.", image: engine, points: ["Bremssystem", "Auspuffanlage", "Motor & Getriebe", "Kupplung"] },
  { n: "02", title: "Inspektion & Service", desc: "Wartung gemäß Hersteller­vorgaben — garantiekonform laut EU-Recht und sauber für Ihr Serviceheft dokumentiert.", image: hands, points: ["Motoröl & Filter", "Innenraumfilter", "Brems­flüssigkeit", "Service­heft-Eintrag"] },
  { n: "03", title: "Reifen- & Felgenservice", desc: "Reifenhandel, Montage, Wuchten, Umziehen und Einlagerung — alles unter einem Dach.", image: wheel, points: ["Montage", "Auswuchten", "Saison­wechsel", "Einlagerung"] },
  { n: "04", title: "Diagnose & Elektronik", desc: "Aktuelle Systemsoftware ermöglicht präzise Fehlerdiagnose an allen modernen Fahrzeug­marken.", image: diagnostic, points: ["Fehler­diagnose", "Steuergeräte", "Sensorik", "Codierung"] },
  { n: "05", title: "Autoglas-Service", desc: "Reparatur und Austausch von Front-, Seiten- und Heckscheiben — fachgerecht und versicherungs­konform.", image: workshop, points: ["Steinschlag", "Kompletttausch", "Versicherungs­abwicklung", "Kalibrierung"] },
  { n: "06", title: "Unfallinstandsetzung", desc: "Karosserie, Lack, Mechanik. Wir bringen Ihr Fahrzeug zurück in den Originalzustand.", image: hero, points: ["Karosserie", "Lackierung", "Achsvermessung", "Schaden­gutachten"] },
];

function Page() {
  return (
    <div className="bg-background text-foreground">
      <Header />

      <section className="container-x pt-40 pb-24">
        <div className="eyebrow">Leistungen</div>
        <h1 className="display-xl mt-10 max-w-[14ch]">
          Alles, was Ihr Auto <em className="not-italic text-accent">braucht</em>.
        </h1>
        <p className="mt-10 max-w-2xl text-lg text-muted-foreground">
          Von der jährlichen Inspektion bis zur komplexen Unfall­instandsetzung.
          Markenunabhängig, transparent kalkuliert, meisterhaft ausgeführt.
        </p>
      </section>

      <section className="border-t border-border">
        {items.map((s, i) => (
          <div
            key={s.title}
            className={`border-b border-border ${i % 2 === 1 ? "bg-secondary" : ""}`}
          >
            <div className="container-x py-24 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
              <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="lg:col-span-6 lg:px-8">
                <div className="font-mono text-sm text-accent">{s.n}</div>
                <h2 className="display-md mt-4">{s.title}</h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-10 grid grid-cols-2 gap-4">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm border-t border-border pt-4">
                      <span className="text-accent">+</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="container-x py-32 text-center">
        <h2 className="display-lg max-w-[20ch] mx-auto">Ihr Anliegen ist nicht dabei? Sprechen Sie uns an.</h2>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a href="tel:+4937177146 72" className="btn-primary">0371 7714672</a>
          <Link to="/kontakt" className="btn-ghost">Kontakt</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
