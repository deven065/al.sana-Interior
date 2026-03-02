import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing Packages | AL.Sana Interior",
  description:
    "Premium interior design packages from essential to luxury bespoke for Mumbai homeowners. Projects start from ₹5 Lakhs.",
};

const plans = [
  {
    tier: "Essential",
    range: "₹5L – ₹8L",
    tagline: "Focused apartment upgrades",
    features: [
      "Up to 1,000 sq ft coverage",
      "2D layout & mood board",
      "Premium material selection",
      "Modular furniture & storage",
      "45-day execution timeline",
      "1 revision round",
    ],
    highlight: false,
  },
  {
    tier: "Premium",
    range: "₹8L – ₹12L",
    tagline: "Full-home design & execution",
    features: [
      "Up to 1,500 sq ft coverage",
      "Full 3D renders & walkthroughs",
      "Elevated finishes & detailing",
      "Modular kitchen included",
      "60-day execution timeline",
      "3 revision rounds",
    ],
    highlight: true,
  },
  {
    tier: "Luxury Bespoke",
    range: "₹12L – ₹15L+",
    tagline: "Signature concept, concierge delivery",
    features: [
      "Unlimited sq ft coverage",
      "Signature concept & custom design",
      "Curated premium material library",
      "Custom furniture & millwork",
      "75-day execution timeline",
      "Unlimited revisions",
    ],
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <main>
      {/* ── Page Hero ── */}
      <section
        className="hero-bg noise-overlay"
        style={{ paddingTop: "8rem", paddingBottom: "5rem" }}
      >
        <div className="container mx-auto px-6">
          <span className="section-label reveal">Investment</span>
          <div className="gold-rule-left mb-6 reveal delay-100" />
          <h1
            className="reveal delay-200"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 300,
              fontSize: "clamp(2.5rem,6vw,4.5rem)",
              maxWidth: "820px",
              lineHeight: 1.1,
            }}
          >
            Transparent pricing,<br />
            <em>zero hidden costs.</em>
          </h1>
          <p
            className="mt-6 max-w-2xl reveal delay-300"
            style={{
              fontFamily: "var(--font-body)",
              color: "rgba(250,250,248,0.45)",
              fontWeight: 300,
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            Every project starts with a fixed-price milestone contract. You know exactly what you pay — and when — before a single wall is touched.
          </p>
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: "2rem",
              alignItems: "stretch",
            }}
          >
            {plans.map((plan, i) => (
              <article
                key={plan.tier}
                className={`card-luxury p-8 reveal delay-${(i + 1) * 100}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  border: plan.highlight
                    ? "1px solid rgba(184,151,90,0.6)"
                    : "1px solid rgba(184,151,90,0.12)",
                }}
              >
                {plan.highlight && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-1px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#b8975a",
                      color: "#07060a",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "0.3rem 1rem",
                    }}
                  >
                    Most Popular
                  </div>
                )}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "#b8975a",
                    fontSize: "0.8rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                    marginTop: plan.highlight ? "0.5rem" : "0",
                  }}
                >
                  {plan.tier}
                </p>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(2rem,4vw,2.75rem)",
                    fontWeight: 300,
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {plan.range}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "rgba(250,250,248,0.45)",
                    fontSize: "0.9rem",
                    marginBottom: "1.75rem",
                  }}
                >
                  {plan.tagline}
                </p>
                <div className="gold-rule mb-6" />
                <ul style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}
                    >
                      <span
                        style={{
                          color: "#b8975a",
                          fontSize: "0.85rem",
                          marginTop: "0.15rem",
                          flexShrink: 0,
                        }}
                      >
                        ✦
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          color: "rgba(250,250,248,0.65)",
                          fontWeight: 300,
                          fontSize: "0.9rem",
                          lineHeight: 1.5,
                        }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={plan.highlight ? "btn-primary" : "btn-outline"}
                >
                  Get Started
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <section className="section" style={{ background: "var(--surface-2)" }}>
        <div className="container mx-auto px-6">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: "2rem",
              textAlign: "center",
            }}
          >
            {[
              { icon: "◈", text: "Fixed-price milestone contracts" },
              { icon: "◇", text: "No hidden costs, ever" },
              { icon: "⬡", text: "GST compliant & transparent" },
              { icon: "○", text: "Warranty-backed materials" },
            ].map((t, i) => (
              <div
                key={t.text}
                className={`reveal delay-${(i + 1) * 100}`}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", padding: "1.5rem" }}
              >
                <span
                  style={{
                    color: "#b8975a",
                    fontSize: "1.75rem",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {t.icon}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "rgba(250,250,248,0.55)",
                    fontWeight: 300,
                    fontSize: "0.92rem",
                  }}
                >
                  {t.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container mx-auto px-6">
          <span className="section-label reveal">Next Step</span>
          <h2
            className="mt-4 mb-6 reveal delay-100"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 300,
              fontSize: "clamp(2rem,4vw,3rem)",
              lineHeight: 1.2,
            }}
          >
            Not sure which package<br />
            <em>is right for you?</em>
          </h2>
          <p
            className="mb-10 reveal delay-200"
            style={{
              fontFamily: "var(--font-body)",
              color: "rgba(250,250,248,0.45)",
              fontWeight: 300,
              maxWidth: "480px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.7,
            }}
          >
            Book a free 30-minute consultation. We&apos;ll help you plan the right scope for your space and budget.
          </p>
          <div
            className="reveal delay-300"
            style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link href="/contact" className="btn-primary">
              Schedule Free Consultation
            </Link>
            <Link href="/portfolio" className="btn-outline">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
