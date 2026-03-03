"use client";

import { useEffect, useState, useCallback } from "react";

interface Video {
  label:     string;
  duration:  string;
  youtubeId: string;
  thumb?:    string; // optional custom thumbnail override
}

interface Props {
  videos: Video[];
}

export default function VideoLightbox({ videos }: Props) {
  const [active, setActive] = useState<Video | null>(null);

  const close = useCallback(() => setActive(null), []);

  // ESC key
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close]);

  const gold  = "#b8975a";

  return (
    <>
      {/* ── Video Cards ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
          gap: "1.5rem",
        }}
      >
        {videos.map((v, i) => (
          <button
            key={v.label}
            onClick={() => setActive(v)}
            className={`card-luxury reveal delay-${(i + 1) * 100}`}
            style={{
              display:    "flex",
              alignItems: "center",
              gap:        "1rem",
              padding:    "1.5rem",
              cursor:     "pointer",
              background: "none",
              border:     "none",
              textAlign:  "left",
              width:      "100%",
            }}
          >
            {/* Play circle */}
            <div
              style={{
                width:          "48px",
                height:         "48px",
                borderRadius:   "50%",
                background:     "rgba(184,151,90,0.12)",
                border:         `1px solid rgba(184,151,90,0.3)`,
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                flexShrink:     0,
                transition:     "background 0.3s",
              }}
              className="play-btn"
            >
              <svg viewBox="0 0 24 24" fill={gold} style={{ width: "18px", marginLeft: "3px" }}>
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>

            {/* Text */}
            <div>
              <p style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.85)", fontWeight: 400, fontSize: "0.9rem" }}>
                {v.label}
              </p>
              <p style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.35)", fontSize: "0.78rem", marginTop: "0.15rem" }}>
                {v.duration}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* ── Modal Lightbox ── */}
      {active && (
        <div
          onClick={close}
          style={{
            position:       "fixed",
            inset:          0,
            zIndex:         10000,
            background:     "rgba(7,6,10,0.92)",
            backdropFilter: "blur(18px)",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            padding:        "clamp(1rem,4vw,3rem)",
            animation:      "fadeIn 0.3s ease",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width:     "100%",
              maxWidth:  "960px",
              position:  "relative",
              animation: "scaleIn 0.35s cubic-bezier(0.22,0.61,0.36,1)",
            }}
          >
            {/* Header bar */}
            <div
              style={{
                display:        "flex",
                alignItems:     "center",
                justifyContent: "space-between",
                marginBottom:   "1rem",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily:    "var(--font-body)",
                    fontSize:      "0.58rem",
                    letterSpacing: "0.32em",
                    textTransform: "uppercase",
                    color:         gold,
                    marginBottom:  "0.25rem",
                  }}
                >
                  Video Testimonial
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize:   "1.3rem",
                    fontWeight: 300,
                    color:      "rgba(250,250,248,0.9)",
                  }}
                >
                  {active.label}
                </p>
              </div>

              {/* Close controls */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span
                  style={{
                    fontFamily:    "var(--font-body)",
                    fontSize:      "0.58rem",
                    letterSpacing: "0.22em",
                    color:         "rgba(250,250,248,0.3)",
                    textTransform: "uppercase",
                  }}
                >
                  Press ESC or click outside to close
                </span>
                <button
                  onClick={close}
                  aria-label="Close video"
                  style={{
                    width:          "44px",
                    height:         "44px",
                    borderRadius:   "50%",
                    background:     "rgba(184,151,90,0.1)",
                    border:         `1px solid rgba(184,151,90,0.35)`,
                    color:          gold,
                    fontSize:       "1.2rem",
                    cursor:         "pointer",
                    display:        "flex",
                    alignItems:     "center",
                    justifyContent: "center",
                    flexShrink:     0,
                    transition:     "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(184,151,90,0.22)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(184,151,90,0.1)")}
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Gold top rule */}
            <div style={{ height: "1px", background: `linear-gradient(to right, ${gold}, transparent)`, marginBottom: "1.25rem", opacity: 0.5 }} />

            {/* iframe */}
            <div
              style={{
                position:    "relative",
                paddingBottom: "56.25%",
                background:  "#000",
                border:      `1px solid rgba(184,151,90,0.18)`,
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1&rel=0&modestbranding=1&color=white`}
                title={active.label}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
              />
            </div>

            {/* Bottom hint */}
            <p
              style={{
                marginTop:     "1rem",
                textAlign:     "center",
                fontFamily:    "var(--font-body)",
                fontSize:      "0.58rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color:         "rgba(250,250,248,0.18)",
              }}
            >
              AL.Sana Interior · Mumbai
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.94) translateY(20px); } to { opacity: 1; transform: none; } }
        .play-btn:hover { transform: scale(1.12) !important; background: rgba(184,151,90,0.32) !important; }
      `}</style>
    </>
  );
}

