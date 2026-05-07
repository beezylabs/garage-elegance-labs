export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-b border-border py-8 md:py-10 bg-background">
      <div className="marquee-track flex gap-16 whitespace-nowrap items-center leading-none">
        {doubled.map((item, i) => (
          <span key={i} className="font-display text-3xl md:text-5xl tracking-tight leading-none flex items-center gap-16 pb-[0.15em]">
            {item}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
