"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const selector = ".reveal, .reveal-left, .reveal-right, .reveal-scale";

    const run = () => {
      const els = Array.from(document.querySelectorAll(selector));

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0, rootMargin: "0px 0px 0px 0px" }
      );

      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Already in viewport → reveal immediately without waiting for observer
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("visible");
        } else {
          observer.observe(el);
        }
      });

      return observer;
    };

    // Run after paint so all DOM nodes are present
    let observer: IntersectionObserver;
    const raf = requestAnimationFrame(() => {
      observer = run();
    });

    return () => {
      cancelAnimationFrame(raf);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}

