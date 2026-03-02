import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | AL.Sana Interior",
  description:
    "Learn about AL.Sana Interior founder story, design philosophy, team, certifications, and office presence in Mumbai.",
};

export default function AboutPage() {
  return (
    <main>
      {/* ── Page Hero ── */}
      <section className="hero-bg noise-overlay" style={{ paddingTop: "8rem", paddingBottom: "5rem" }}>
        <div className="container mx-auto px-6">
          <span className="section-label reveal">About Us</span>
          <div className="gold-rule-left mb-6 reveal delay-100" />
          <h1 className="reveal delay-200" style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "clamp(2.5rem,6vw,4.5rem)", maxWidth: "820px", lineHeight: 1.1 }}>
            We don&apos;t design houses.<br />
            <em>We design lifestyles.</em>
          </h1>
          <p className="mt-6 max-w-2xl reveal delay-300" style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.45)", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.7 }}>
            AL.Sana Interior was founded to solve a simple problem: premium homeowners deserved stress-free interior execution with transparent contracts and predictable timelines.
          </p>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section style={{ background: "var(--surface-2)", borderTop: "1px solid rgba(184,151,90,0.15)", borderBottom: "1px solid rgba(184,151,90,0.15)" }}>
        <div className="container mx-auto px-6" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { num: "5+", label: "Years of Excellence" },
            { num: "2700+", label: "Happy Customers" },
            { num: "24+", label: "Services Offered" },
            { num: "4.6★", label: "Google Rating" },
          ].map((s, i) => (
            <div key={s.label} className={`stat-item reveal delay-${(i + 1) * 100}`}>
              <span className="stat-number gold-shimmer">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Founder Story ── */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "3.5rem", alignItems: "center" }}>
            <div>
              <span className="section-label reveal">Our Origin</span>
              <h2 className="mt-4 reveal delay-100" style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.15 }}>
                Built on trust,<br /><em>perfected by craft.</em>
              </h2>
              <div className="gold-rule mt-6 mb-6 reveal delay-200" style={{ maxWidth: "80px" }} />
              <p className="reveal delay-300" style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.45)", fontWeight: 300, lineHeight: 1.8 }}>
                Starting from boutique apartment upgrades in Mumbai, our founder built AL.Sana into a full-service design and execution studio focused on premium residential outcomes — where every project is treated as a signature piece.
              </p>
              <p className="mt-4 reveal delay-400" style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.45)", fontWeight: 300, lineHeight: 1.8 }}>
                We serve discerning homeowners across Mumbai, Navi Mumbai, and Thane with one promise: design that is as functional as it is beautiful.
              </p>
            </div>
            <div className="img-wrap reveal-right delay-200" style={{ borderRadius: "2px", overflow: "hidden", aspectRatio: "4/3", position: "relative" }}>
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80"
                alt="AL.Sana Interior studio Mumbai"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="img-overlay-gradient" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Design Philosophy ── */}
      <section className="section" style={{ background: "var(--surface-2)" }}>
        <div className="container mx-auto px-6">
          <span className="section-label reveal">Design Philosophy</span>
          <h2 className="mt-4 mb-12 reveal delay-100" style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "clamp(2rem,4vw,3rem)", maxWidth: "640px", lineHeight: 1.15 }}>
            Elegant. Functional. <em>Timeless.</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1.5rem" }}>
            {[
              { title: "Premium Materials", text: "We specify only warranty-backed materials sourced from certified vendors — no cost-cutting that compromises the finish." },
              { title: "Timeless Palettes", text: "Trend-proof colour and texture choices that look elevated today and remain sophisticated in a decade." },
              { title: "Practical Planning", text: "Every layout decision starts with how you actually live — storage, flow, and light are engineered before aesthetics." },
              { title: "Transparent Process", text: "Milestone-based contracts mean you know exactly what happens next and what it costs — always." },
            ].map((c, i) => (
              <div key={c.title} className={`card-luxury p-8 reveal delay-${(i + 1) * 100}`}>
                <div style={{ color: "#b8975a", fontSize: "1.5rem", marginBottom: "1rem", fontFamily: "var(--font-heading)" }}>0{i + 1}</div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 400, fontSize: "1.25rem", marginBottom: "0.75rem" }}>{c.title}</h3>
                <p style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.45)", fontWeight: 300, lineHeight: 1.7, fontSize: "0.95rem" }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team & Certifications ── */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "3.5rem", alignItems: "start" }}>
            <div>
              <span className="section-label reveal">Our Team</span>
              <h2 className="mt-4 mb-6 reveal delay-100" style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.15 }}>
                Specialists, <em>not generalists.</em>
              </h2>
              <p className="reveal delay-200" style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.45)", fontWeight: 300, lineHeight: 1.8 }}>
                Our team includes dedicated interior designers, project managers, and execution specialists — all working with certified material and hardware partners for every project.
              </p>
              <ul className="mt-8 space-y-4 reveal delay-300">
                {[
                  "Interior design planning & 3D visualization",
                  "Execution QA checklists at every milestone",
                  "Vendor certification & warranty-backed materials",
                  "GST registered — fully compliant & transparent",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <span style={{ color: "#b8975a", fontFamily: "var(--font-heading)", fontSize: "1.1rem", marginTop: "0.05rem", flexShrink: 0 }}>✦</span>
                    <span style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.65)", fontWeight: 300, lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="img-wrap reveal-right delay-200" style={{ borderRadius: "2px", overflow: "hidden", aspectRatio: "4/3", position: "relative" }}>
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80"
                alt="AL.Sana Interior team and office"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="img-overlay-gradient" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section" style={{ background: "var(--surface-2)", textAlign: "center" }}>
        <div className="container mx-auto px-6">
          <span className="section-label reveal">Start Your Project</span>
          <h2 className="mt-4 mb-6 reveal delay-100" style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.2 }}>
            Ready to transform<br /><em>your home?</em>
          </h2>
          <p className="mb-10 reveal delay-200" style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.45)", fontWeight: 300, maxWidth: "520px", margin: "0 auto 2.5rem" }}>
            Schedule a complimentary design consultation with our team. No obligation — just clarity.
          </p>
          <div className="reveal delay-300" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Schedule Free Consultation</Link>
            <Link href="/portfolio" className="btn-outline">View Our Work</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
