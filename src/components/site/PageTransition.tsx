import { useEffect, useState } from "react";

/**
 * Premium intro overlay — a brief curtain reveal on first paint.
 * Plays once per session, then unmounts.
 */
export function PageTransition() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("cgc:intro");
    if (seen) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => {
      setDone(true);
      sessionStorage.setItem("cgc:intro", "1");
    }, 1400);
    return () => clearTimeout(t);
  }, []);

  if (done) return null;

  return (
    <div className="page-curtain" aria-hidden="true">
      <div className="page-curtain__panel" />
      <div className="page-curtain__mark">
        <span className="font-display text-4xl tracking-tight">CGC</span>
        <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.32em] opacity-70">
          Central Garage Chemnitz
        </span>
      </div>
    </div>
  );
}
