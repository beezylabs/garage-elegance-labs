import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Adds an IntersectionObserver that toggles `is-visible` on
 * any element with the `.scroll-reveal` class when it scrolls into view.
 * Mount once at the app root.
 */
export function useScrollReveal() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    if (typeof window === "undefined") return;
    const run = () => {
      const els = document.querySelectorAll<HTMLElement>(".scroll-reveal:not(.is-visible)");
      if (!("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("is-visible"));
        return;
      }
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
      );
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    };
    const t = setTimeout(run, 50);
    return () => clearTimeout(t);
  }, [pathname]);
}

/**
 * Subtle parallax on elements with `data-parallax="<speed>"`
 * (speed e.g. 0.2 — moves at 20% of scroll).
 */
export function useParallax() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );
    if (els.length === 0) return;
    let raf = 0;
    const update = () => {
      const y = window.scrollY;
      els.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.15");
        el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
      });
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}
