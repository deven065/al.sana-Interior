"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Props {
  before:    string;
  after:     string;
  beforeAlt?: string;
  afterAlt?:  string;
  aspectRatio?: string; // e.g. "56.25%"
}

export default function BeforeAfterSlider({
  before,
  after,
  beforeAlt  = "Before",
  afterAlt   = "After",
  aspectRatio = "56%",
}: Props) {
  const [pos, setPos]         = useState(50); // percent
  const [dragging, setDragging] = useState(false);
  const containerRef           = useRef<HTMLDivElement>(null);

  const calc = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, pct)));
  };

  // Mouse
  const onMouseDown = () => setDragging(true);
  useEffect(() => {
    if (!dragging) return;
    const move = (e: MouseEvent) => calc(e.clientX);
    const up   = () => setDragging(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup",   up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup",   up);
    };
  }, [dragging]);

  // Touch
  const onTouchMove = (e: React.TouchEvent) => calc(e.touches[0].clientX);

  const gold = "#b8975a";

  return (
    <div
      ref={containerRef}
      style={{
        position:   "relative",
        width:      "100%",
        paddingBottom: aspectRatio,
        overflow:   "hidden",
        cursor:     "col-resize",
        userSelect: "none",
        borderRadius: "2px",
      }}
      onTouchMove={onTouchMove}
    >
      {/* AFTER image (full width, bottom layer) */}
      <div style={{ position: "absolute", inset: 0 }}>
        <Image src={after} alt={afterAlt} fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 50vw" />
        <div style={{ position: "absolute", bottom: "1rem", right: "1rem", background: "rgba(7,6,10,0.65)", backdropFilter: "blur(6px)", padding: "0.3rem 0.8rem", fontFamily: "var(--font-body)", fontSize: "0.58rem", letterSpacing: "0.28em", textTransform: "uppercase", color: gold, border: `1px solid rgba(184,151,90,0.35)` }}>
          After
        </div>
      </div>

      {/* BEFORE image (clipped to left of slider) */}
      <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before} alt={beforeAlt} fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 50vw" />
        <div style={{ position: "absolute", bottom: "1rem", left: "1rem", background: "rgba(7,6,10,0.65)", backdropFilter: "blur(6px)", padding: "0.3rem 0.8rem", fontFamily: "var(--font-body)", fontSize: "0.58rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(250,250,248,0.6)", border: "1px solid rgba(255,255,255,0.12)" }}>
          Before
        </div>
      </div>

      {/* Divider line */}
      <div
        style={{
          position:   "absolute",
          top:        0,
          bottom:     0,
          left:       `${pos}%`,
          width:      "1px",
          background: gold,
          transform:  "translateX(-50%)",
          pointerEvents: "none",
        }}
      />

      {/* Handle */}
      <div
        onMouseDown={onMouseDown}
        style={{
          position:      "absolute",
          top:           "50%",
          left:          `${pos}%`,
          transform:     "translate(-50%,-50%)",
          width:         "44px",
          height:        "44px",
          borderRadius:  "50%",
          background:    "#07060a",
          border:        `2px solid ${gold}`,
          display:       "flex",
          alignItems:    "center",
          justifyContent:"center",
          cursor:        "col-resize",
          zIndex:        10,
          boxShadow:     "0 4px 20px rgba(0,0,0,0.5)",
          transition:    dragging ? "none" : "box-shadow 0.3s",
        }}
      >
        <svg viewBox="0 0 20 20" fill="none" style={{ width: "18px" }}>
          <path d="M6 10l-3 3m0 0l-3-3m3 3V4" stroke={gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(90 10 10)" />
          <path d="M7 10h6M7 10l3-3M7 10l3 3M13 10l-3-3M13 10l-3 3" stroke={gold} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
