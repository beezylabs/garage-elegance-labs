export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-b border-border py-6 bg-background">
      <div className="marquee-track flex gap-16 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="font-display text-3xl md:text-5xl tracking-tight flex items-center gap-16">
            {item}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
