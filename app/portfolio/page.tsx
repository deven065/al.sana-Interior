import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../lib/site-data";

export const metadata: Metadata = {
  title: "Portfolio | AL.Sana Interior",
  description:
    "Portfolio of premium interior design projects across Mumbai, Navi Mumbai, and Thane — delivered with transparent pricing and proven execution.",
};

const projectImages: Record<string, string> = {
  "3bhk-andheri-west":
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  "2bhk-powai-lake-view":
    "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80",
  "villa-vashi-signature":
    "https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=800&q=80",
};

const fallbackImage =
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80";

export default function PortfolioPage() {
  return (
    <main>
      {/* ── Page Hero ── */}
      <section
        className="hero-bg noise-overlay"
        style={{ paddingTop: "8rem", paddingBottom: "5rem" }}
      >
        <div className="container mx-auto px-6">
          <span className="section-label reveal">Our Work</span>
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
            A curated portfolio of<br />
            <em>premium interiors.</em>
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
            Each project is delivered with a fixed milestone contract, transparent budget, and a dedicated team — from concept to handover.
          </p>
        </div>
      </section>

      {/* ── Project Grid ── */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(340px,1fr))",
              gap: "2rem",
            }}
          >
            {projects.map((project, i) => (
              <article
                key={project.slug}
                className={`card-luxury reveal delay-${Math.min((i + 1) * 100, 400)}`}
                style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}
              >
                {/* Image */}
                <div style={{ position: "relative", paddingBottom: "62%", flexShrink: 0 }}>
                  <Image
                    src={projectImages[project.slug] ?? fallbackImage}
                    alt={project.name}
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="img-overlay-gradient" />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "1rem",
                      left: "1.25rem",
                      color: "#b8975a",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    {project.location}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "1.75rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h2
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 300,
                      fontSize: "1.45rem",
                      lineHeight: 1.2,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {project.name}
                  </h2>
                  <p style={{ color: "#b8975a", fontFamily: "var(--font-body)", fontSize: "0.85rem", marginBottom: "0.75rem" }}>
                    {project.valueAnchor}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "rgba(250,250,248,0.45)",
                      fontWeight: 300,
                      fontSize: "0.9rem",
                      lineHeight: 1.65,
                      flex: 1,
                    }}
                  >
                    {project.summary}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "1.5rem",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.78rem",
                      color: "rgba(250,250,248,0.35)",
                      margin: "1rem 0",
                    }}
                  >
                    <span>{project.area}</span>
                    <span>{project.timeline}</span>
                    <span>{project.budgetRange}</span>
                  </div>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="btn-outline"
                    style={{ display: "inline-block", alignSelf: "flex-start" }}
                  >
                    View Case Study
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="section"
        style={{ background: "var(--surface-2)", textAlign: "center" }}
      >
        <div className="container mx-auto px-6">
          <span className="section-label reveal">Your Turn</span>
          <h2
            className="mt-4 mb-6 reveal delay-100"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 300,
              fontSize: "clamp(2rem,4vw,3rem)",
              lineHeight: 1.2,
            }}
          >
            Ready to create<br />
            <em>your signature space?</em>
          </h2>
          <p
            className="reveal delay-200"
            style={{
              fontFamily: "var(--font-body)",
              color: "rgba(250,250,248,0.45)",
              fontWeight: 300,
              maxWidth: "480px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.7,
            }}
          >
            Let&apos;s discuss your project requirements and create something exceptional together.
          </p>
          <div
            className="reveal delay-300"
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
