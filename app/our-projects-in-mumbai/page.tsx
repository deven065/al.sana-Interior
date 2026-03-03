import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "../lib/site-data";

export const metadata: Metadata = {
  title: "Our Projects in Mumbai | AL.Sana Interior",
  description: "Interior Designer in Mumbai and Luxury Interior Designer Mumbai — premium project showcase with transparent execution.",
};

export default function OurProjectsInMumbaiPage() {
  return (
    <main>
      <section className="hero-bg noise-overlay" style={{ paddingTop: "10rem", paddingBottom: "5rem" }}>
        <div className="container mx-auto px-6">
          <span className="section-label reveal">Mumbai Projects</span>
          <div className="gold-rule-left mb-6 reveal delay-100" />
          <h1 className="reveal delay-200" style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "clamp(2.5rem,6vw,4.5rem)", maxWidth: "820px", lineHeight: 1.1 }}>Our Projects<br /><em>Across Mumbai.</em></h1>
          <p className="mt-6 max-w-2xl reveal delay-300" style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.45)", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.7 }}>
            Looking for an Interior Designer in Mumbai? AL.Sana Interior delivers luxury-focused projects with transparent process and premium quality execution.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-6">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "2rem" }}>
            {projects.map((project, i) => (
              <article key={project.slug} className={`card-luxury p-8 reveal delay-${Math.min((i + 1) * 100, 300)}`}>
                <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "1.45rem", marginBottom: "0.5rem" }}>{project.name}</h2>
                <p style={{ color: "#b8975a", fontFamily: "var(--font-body)", fontSize: "0.88rem", marginBottom: "0.75rem" }}>{project.budgetRange}</p>
                <p style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.35)", fontSize: "0.82rem", marginBottom: "1rem" }}>{project.location} · {project.timeline}</p>
                <p style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.5)", fontWeight: 300, fontSize: "0.9rem", lineHeight: 1.65, marginBottom: "1.5rem" }}>{project.summary}</p>
                <Link href={`/portfolio/${project.slug}`} className="btn-outline" style={{ display: "inline-block", fontSize: "0.85rem", padding: "0.6rem 1.4rem" }}>View Case Study</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface-2)", textAlign: "center" }}>
        <div className="container mx-auto px-6">
          <span className="section-label reveal">Start Your Project</span>
          <h2 className="mt-4 mb-6 reveal delay-100" style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.2 }}>Your Mumbai home,<br /><em>elevated.</em></h2>
          <div className="reveal delay-200" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Schedule Free Consultation</Link>
            <Link href="/pricing" className="btn-outline">View Pricing</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

