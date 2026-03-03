import type { Metadata } from "next";
import Link from "next/link";
import { services } from "../lib/site-data";

export const metadata: Metadata = {
  title: "Services | AL.Sana Interior",
  description:
    "Premium interior design services for Mumbai homeowners — from luxury residentials and modular kitchens to bedroom and commercial interiors.",
};

const serviceIcons: Record<string, string> = {
  "luxury-residential-interiors": "◈",
  "2bhk-3bhk-interior-design": "⬡",
  "modular-kitchen-design": "◇",
  "bedroom-interiors": "○",
  "commercial-office-interiors": "▷",
};

export default function ServicesPage() {
  return (
    <main>
      {/* ── Page Hero ── */}
      <section
        className="hero-bg noise-overlay"
        style={{ paddingTop: "10rem", paddingBottom: "5rem" }}
      >
        <div className="container mx-auto px-6">
          <span className="section-label reveal">Services</span>
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
            Precision design<br />
            <em>for every space.</em>
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
            From complete luxury residentials to modular kitchens and commercial spaces — every service is delivered with a fixed timeline, transparent budget, and single-team accountability.
          </p>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))",
              gap: "1.75rem",
            }}
          >
            {services.map((service, i) => (
              <article
                key={service.slug}
                className={`card-luxury p-8 reveal delay-${Math.min((i + 1) * 100, 500)}`}
              >
                <div
                  style={{
                    color: "#b8975a",
                    fontSize: "2rem",
                    marginBottom: "1.25rem",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {serviceIcons[service.slug] ?? "◈"}
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 300,
                    fontSize: "1.45rem",
                    lineHeight: 1.2,
                    marginBottom: "0.5rem",
                  }}
                >
                  {service.title}
                </h2>
                <p
                  style={{
                    color: "#b8975a",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    marginBottom: "1rem",
                  }}
                >
                  {service.starting}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "rgba(250,250,248,0.45)",
                    fontWeight: 300,
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                  }}
                >
                  {service.solution}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="btn-outline"
                  style={{ display: "inline-block", fontSize: "0.85rem", padding: "0.6rem 1.4rem" }}
                >
                  Learn More
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Strip ── */}
      <section className="section" style={{ background: "var(--surface-2)" }}>
        <div className="container mx-auto px-6">
          <span className="section-label reveal">How We Work</span>
          <h2
            className="mt-4 mb-12 reveal delay-100"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 300,
              fontSize: "clamp(2rem,4vw,3rem)",
              maxWidth: "600px",
              lineHeight: 1.15,
            }}
          >
            A process built for<br />
            <em>zero surprises.</em>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "2rem",
            }}
          >
            {[
              { n: "01", title: "Consultation", text: "Understand your vision, space, and budget in a complimentary call." },
              { n: "02", title: "3D Planning", text: "Concept design, 3D renders, and revision rounds until you love it." },
              { n: "03", title: "Contract & Materials", text: "Fixed-price contract signed before any work begins. Materials finalized together." },
              { n: "04", title: "Execution & Handover", text: "Dedicated execution team, quality checks at every milestone, on-time delivery." },
            ].map((step, i) => (
              <div
                key={step.n}
                className={`reveal delay-${(i + 1) * 100}`}
                style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
              >
                <span
                  style={{
                    color: "#b8975a",
                    fontFamily: "var(--font-heading)",
                    fontSize: "2.5rem",
                    fontWeight: 300,
                    lineHeight: 1,
                  }}
                >
                  {step.n}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 400,
                    fontSize: "1.15rem",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "rgba(250,250,248,0.45)",
                    fontWeight: 300,
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                  }}
                >
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container mx-auto px-6">
          <span className="section-label reveal">Get Started</span>
          <h2
            className="mt-4 mb-6 reveal delay-100"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 300,
              fontSize: "clamp(2rem,4vw,3rem)",
              lineHeight: 1.2,
            }}
          >
            Let&apos;s talk about<br />
            <em>your project.</em>
          </h2>
          <div
            className="reveal delay-200"
            style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link href="/contact" className="btn-primary">
              Schedule Free Consultation
            </Link>
            <Link href="/pricing" className="btn-outline">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

