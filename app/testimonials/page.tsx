import type { Metadata } from "next";
import Link from "next/link";
import { projects, testimonials } from "../lib/site-data";
import VideoLightbox from "../components/video-lightbox";

export const metadata: Metadata = {
  title: "Client Testimonials | AL.Sana Interior",
  description:
    "Real client testimonials and case studies from AL.Sana Interior projects across Mumbai, Navi Mumbai, and Thane.",
};

export default function TestimonialsPage() {
  return (
    <main>
      {/* ── Page Hero ── */}
      <section
        className="hero-bg noise-overlay"
        style={{ paddingTop: "8rem", paddingBottom: "5rem" }}
      >
        <div className="container mx-auto px-6">
          <span className="section-label reveal">Social Proof</span>
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
            The words of our<br />
            <em>satisfied clients.</em>
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
            Every project we complete becomes a testament to our commitment to quality, transparency, and on-time delivery.
          </p>
        </div>
      </section>

      {/* ── Rating Banner ── */}
      <section
        style={{
          background: "var(--surface-2)",
          borderTop: "1px solid rgba(184,151,90,0.15)",
          borderBottom: "1px solid rgba(184,151,90,0.15)",
          padding: "2rem 0",
        }}
      >
        <div
          className="container mx-auto px-6"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0",
          }}
        >
          {[
            { num: "4.6★", label: "Google Rating" },
            { num: "2700+", label: "Happy Customers" },
            { num: "86", label: "Google Reviews" },
            { num: "0", label: "Hidden Charges" },
          ].map((s, i) => (
            <div key={s.label} className={`stat-item reveal delay-${(i + 1) * 100}`}>
              <span className="stat-number gold-shimmer">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials Grid ── */}
      <section className="section">
        <div className="container mx-auto px-6">
          <span className="section-label reveal">What Clients Say</span>
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
            Verified reviews from<br />
            <em>real projects.</em>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
              gap: "1.75rem",
            }}
          >
            {testimonials.map((item, i) => (
              <article
                key={item.name}
                className={`testimonial-card reveal delay-${Math.min((i + 1) * 100, 400)}`}
              >
                <div
                  style={{
                    color: "#b8975a",
                    fontSize: "1.5rem",
                    fontFamily: "var(--font-heading)",
                    marginBottom: "1rem",
                  }}
                >
                  ❝
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "rgba(250,250,248,0.7)",
                    fontWeight: 300,
                    lineHeight: 1.75,
                    fontSize: "0.95rem",
                    marginBottom: "1.5rem",
                    flex: 1,
                  }}
                >
                  {item.text}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "rgba(184,151,90,0.15)",
                      border: "1px solid rgba(184,151,90,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#b8975a",
                      fontFamily: "var(--font-heading)",
                      fontSize: "1rem",
                      flexShrink: 0,
                    }}
                  >
                    {item.name[0]}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 500,
                        fontSize: "0.9rem",
                        color: "rgba(250,250,248,0.85)",
                      }}
                    >
                      {item.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.78rem",
                        color: "rgba(250,250,248,0.35)",
                      }}
                    >
                      AL.Sana Interior Client
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Video Testimonials ── */}
      <section className="section" style={{ background: "var(--surface-2)" }}>
        <div className="container mx-auto px-6">
          <span className="section-label reveal">On Camera</span>
          <h2
            className="mt-4 mb-10 reveal delay-100"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 300,
              fontSize: "clamp(2rem,4vw,3rem)",
              maxWidth: "600px",
              lineHeight: 1.15,
            }}
          >
            See their stories<br />
            <em>in their own words.</em>
          </h2>
          <VideoLightbox
            videos={[
              {
                label:     "Mumbai Premium 3BHK Home Tour",
                duration:  "4:12",
                youtubeId: "zivGQx4zVVE",
              },
              {
                label:     "Vashi 2BHK Interior Design",
                duration:  "3:47",
                youtubeId: "rvNRjfOuSpE",
              },
              {
                label:     "Powai 2BHK Home Interior",
                duration:  "2:58",
                youtubeId: "ao_qXzvb480",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="section">
        <div className="container mx-auto px-6">
          <span className="section-label reveal">Case Studies</span>
          <h2
            className="mt-4 mb-10 reveal delay-100"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 300,
              fontSize: "clamp(2rem,4vw,3rem)",
              maxWidth: "600px",
              lineHeight: 1.15,
            }}
          >
            Explore each project<br />
            <em>in full detail.</em>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
              gap: "1.5rem",
            }}
          >
            {projects.map((project, i) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className={`card-luxury p-6 reveal delay-${Math.min((i + 1) * 100, 300)}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 300,
                    fontSize: "1.2rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {project.name}
                </h3>
                <p
                  style={{
                    color: "#b8975a",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.82rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  {project.valueAnchor}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "rgba(250,250,248,0.4)",
                    fontSize: "0.82rem",
                  }}
                >
                  {project.location} · {project.area}
                </p>
              </Link>
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
          <span className="section-label reveal">Your Story Next</span>
          <h2
            className="mt-4 mb-6 reveal delay-100"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 300,
              fontSize: "clamp(2rem,4vw,3rem)",
              lineHeight: 1.2,
            }}
          >
            Join 2700+ happy customers<br />
            <em>across Mumbai.</em>
          </h2>
          <div
            className="reveal delay-200"
            style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link href="/contact" className="btn-primary">
              Schedule Free Consultation
            </Link>
            <Link href="/portfolio" className="btn-outline">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
