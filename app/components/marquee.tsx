import "./marquee.css";

const items = [
  "LUXURY INTERIORS",
  "MUMBAI",
  "2700+ HAPPY CLIENTS",
  "BESPOKE DESIGN",
  "5-YEAR WARRANTY",
  "NAVI MUMBAI",
  "60-DAY DELIVERY",
  "THANE",
  "TRANSPARENT PRICING",
  "MODULAR KITCHENS",
  "PREMIUM MATERIALS",
  "GST REGISTERED",
];

const dot = <span style={{ color: "#b8975a", margin: "0 1.5rem" }}>✦</span>;

export default function Marquee() {
  const track = items.map((item, i) => (
    <span key={i} style={{ whiteSpace: "nowrap", fontFamily: "var(--font-body)", fontSize: "0.6rem", letterSpacing: "0.38em", color: "rgba(250,250,248,0.28)", fontWeight: 400 }}>
      {item}{dot}
    </span>
  ));

  return (
    <div
      className="marquee-root"
      style={{
        overflow:     "hidden",
        borderTop:    "1px solid rgba(184,151,90,0.07)",
        borderBottom: "1px solid rgba(184,151,90,0.07)",
        background:   "#07060a",
        padding:      "1.2rem 0",
      }}
      aria-hidden="true"
    >
      <div className="marquee-track">
        {track}{track}
      </div>
    </div>
  );
}

