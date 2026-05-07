import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Central Garage Chemnitz" },
      { name: "description", content: "Termin vereinbaren oder Werkstatt besuchen — Adelsbergstraße 32, 09126 Chemnitz." },
      { property: "og:title", content: "Kontakt — Central Garage Chemnitz" },
      { property: "og:description", content: "Adelsbergstraße 32, 09126 Chemnitz · 0371 7714672" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="bg-background text-foreground">
      <Header />

      <section className="container-x pt-40 pb-24">
        <div className="eyebrow">Kontakt</div>
        <h1 className="display-xl mt-10 max-w-[16ch]">
          Sprechen wir <em className="not-italic text-accent">über Ihr Auto</em>.
        </h1>
        <p className="mt-10 max-w-xl text-lg text-muted-foreground">
          Termine vergeben wir telefonisch — am besten vormittags. Wir freuen uns auf Sie.
        </p>
      </section>

      <section className="container-x pb-24 grid lg:grid-cols-2 gap-px bg-border border border-border">
        {[
          { icon: Phone, label: "Telefon", value: "0371 7714672", href: "tel:+4937177146 72" },
          { icon: MapPin, label: "Adresse", value: "Adelsbergstraße 32\n09126 Chemnitz", href: "https://maps.app.goo.gl/Ymvu14sbcNeryovR6" },
          { icon: Clock, label: "Öffnungszeiten", value: "Mo – Fr · 08:00 – 18:00 Uhr" },
          { icon: Mail, label: "Service", value: "Werkstattersatzwagen 19 € / Tag" },
        ].map((c) => (
          <a
            key={c.label}
            href={c.href}
            className="bg-background p-10 lg:p-14 group hover:bg-secondary transition-colors"
          >
            <c.icon size={20} className="text-accent" />
            <div className="mt-8 eyebrow">{c.label}</div>
            <div className="mt-4 font-display text-2xl md:text-3xl whitespace-pre-line">{c.value}</div>
          </a>
        ))}
      </section>

      <section>
        <div className="aspect-[16/9] md:aspect-[21/9] w-full">
          <iframe
            title="Anfahrt Central Garage Chemnitz"
            src="https://www.google.com/maps?q=Adelsbergstra%C3%9Fe+32,+09126+Chemnitz&output=embed"
            className="w-full h-full grayscale contrast-110"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="ink-section bg-background text-foreground py-32 text-center">
        <div className="container-x">
          <h2 className="display-lg max-w-[18ch] mx-auto">Wir sind für Sie da.</h2>
          <a href="tel:+4937177146 72" className="btn-primary mt-12">0371 7714672 →</a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
