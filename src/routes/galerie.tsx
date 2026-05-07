import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import hero from "@/assets/hero.jpg";
import hands from "@/assets/hands.jpg";
import workshop from "@/assets/workshop.jpg";
import wheel from "@/assets/wheel.jpg";
import diagnostic from "@/assets/diagnostic.jpg";
import engine from "@/assets/engine.jpg";
import mechanic from "@/assets/mechanic.jpg";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie — Central Garage Chemnitz" },
      { name: "description", content: "Eindrücke aus unserer Werkstatt in Chemnitz." },
      { property: "og:title", content: "Galerie — Central Garage Chemnitz" },
      { property: "og:description", content: "Werkstatt-Impressionen in Chemnitz." },
    ],
  }),
  component: Page,
});

const shots = [
  { src: workshop, w: "col-span-12 md:col-span-8", a: "aspect-[16/10]" },
  { src: hero, w: "col-span-12 md:col-span-4", a: "aspect-[4/5]" },
  { src: engine, w: "col-span-6 md:col-span-4", a: "aspect-[4/5]" },
  { src: wheel, w: "col-span-6 md:col-span-4", a: "aspect-[4/5]" },
  { src: diagnostic, w: "col-span-12 md:col-span-4", a: "aspect-[4/5]" },
  { src: hands, w: "col-span-6 md:col-span-6", a: "aspect-[4/3]" },
  { src: mechanic, w: "col-span-6 md:col-span-6", a: "aspect-[4/3]" },
];

function Page() {
  return (
    <div className="bg-background text-foreground">
      <Header />

      <section className="container-x pt-40 pb-16">
        <div className="eyebrow">Galerie</div>
        <h1 className="display-xl mt-10 max-w-[16ch]">Eindrücke <em className="not-italic text-accent">aus dem Inneren</em>.</h1>
      </section>

      <section className="container-x pb-32">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {shots.map((s, i) => (
            <div key={i} className={`${s.w} overflow-hidden`}>
              <img src={s.src} alt="" loading="lazy" className={`${s.a} w-full object-cover transition-transform duration-700 hover:scale-105`} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
