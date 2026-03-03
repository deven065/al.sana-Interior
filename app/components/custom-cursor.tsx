"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dot  = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    // Only show on true pointer (mouse) devices — not touch screens or stylus-only
    const hasMouse = window.matchMedia("(pointer: fine) and (hover: hover)").matches;
    if (!hasMouse) return;
    setIsPointerDevice(true);

    document.body.style.cursor = "none";

    let rafId: number;
    let mx = -200, my = -200;
    let rx = -200, ry = -200;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };

    const tick = () => {
      if (dot.current) {
        dot.current.style.transform = `translate(${mx - 4}px,${my - 4}px)`;
      }
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;
      if (ring.current) {
        ring.current.style.transform = `translate(${rx - 20}px,${ry - 20}px)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(tick);

    const expand = () => {
      if (!ring.current) return;
      ring.current.style.width  = "56px";
      ring.current.style.height = "56px";
      ring.current.style.borderColor = "#b8975a";
      ring.current.style.background  = "rgba(184,151,90,0.07)";
      if (dot.current) dot.current.style.opacity = "0";
    };
    const shrink = () => {
      if (!ring.current) return;
      ring.current.style.width  = "40px";
      ring.current.style.height = "40px";
      ring.current.style.borderColor = "rgba(184,151,90,0.55)";
      ring.current.style.background  = "transparent";
      if (dot.current) dot.current.style.opacity = "1";
    };

    const attachListeners = () => {
      document.querySelectorAll("a, button, [role='button']").forEach((el) => {
        el.addEventListener("mouseenter", expand);
        el.addEventListener("mouseleave", shrink);
      });
    };

    attachListeners();
    const mo = new MutationObserver(attachListeners);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      mo.disconnect();
      document.body.style.cursor = "";
    };
  }, []);

  // Render nothing on touch/mobile/tablet devices
  if (!isPointerDevice) return null;

  return (
    <>
      {/* Dot */}
      <div
        ref={dot}
        aria-hidden="true"
        style={{
          position:      "fixed",
          top:           0,
          left:          0,
          width:         "8px",
          height:        "8px",
          borderRadius:  "50%",
          background:    "#b8975a",
          pointerEvents: "none",
          zIndex:        99999,
          transition:    "opacity 0.2s",
          willChange:    "transform",
        }}
      />
      {/* Ring */}
      <div
        ref={ring}
        aria-hidden="true"
        style={{
          position:      "fixed",
          top:           0,
          left:          0,
          width:         "40px",
          height:        "40px",
          borderRadius:  "50%",
          border:        "1px solid rgba(184,151,90,0.55)",
          pointerEvents: "none",
          zIndex:        99998,
          transition:    "width 0.35s ease, height 0.35s ease, border-color 0.35s ease, background 0.35s ease",
          willChange:    "transform",
        }}
      />
    </>
  );
}

