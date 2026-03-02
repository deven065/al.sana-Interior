import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "../lib/site-data";

export const metadata: Metadata = {
  title: "Interior Design Blog | AL.Sana Interior",
  description:
    "Interior design insights for Mumbai homeowners — covering budgets, trends, and practical planning tips from AL.Sana Interior.",
};

const postImages = [
  "https://images.unsplash.com/photo-1618219944342-824e40a13285?w=800&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
];

export default function BlogPage() {
  return (
    <main>
      {/* ── Page Hero ── */}
      <section
        className="hero-bg noise-overlay"
        style={{ paddingTop: "8rem", paddingBottom: "5rem" }}
      >
        <div className="container mx-auto px-6">
          <span className="section-label reveal">Insights</span>
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
            Interior design knowledge<br />
            <em>for discerning homeowners.</em>
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
            Practical guides on budgeting, material selection, layout planning, and everything in between — from our design team.
          </p>
        </div>
      </section>

      {/* ── Blog Grid ── */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))",
              gap: "2rem",
            }}
          >
            {blogPosts.map((post, i) => (
              <article
                key={post.slug}
                className={`card-luxury reveal delay-${Math.min((i + 1) * 100, 400)}`}
                style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}
              >
                <div
                  style={{
                    height: "220px",
                    backgroundImage: `url(${postImages[i % postImages.length]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(7,6,10,0.7) 0%, transparent 60%)",
                    }}
                  />
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
                    Design Guide
                  </div>
                </div>
                <div
                  style={{
                    padding: "1.75rem",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 300,
                      fontSize: "1.35rem",
                      lineHeight: 1.25,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {post.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "rgba(250,250,248,0.45)",
                      fontWeight: 300,
                      fontSize: "0.9rem",
                      lineHeight: 1.65,
                      flex: 1,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="btn-outline"
                    style={{
                      display: "inline-block",
                      fontSize: "0.85rem",
                      padding: "0.6rem 1.4rem",
                      alignSelf: "flex-start",
                    }}
                  >
                    Read Article
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
          <span className="section-label reveal">Ready to Start?</span>
          <h2
            className="mt-4 mb-6 reveal delay-100"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 300,
              fontSize: "clamp(2rem,4vw,3rem)",
              lineHeight: 1.2,
            }}
          >
            From reading to<br />
            <em>living it.</em>
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
            Schedule a free consultation and let our team translate your vision into a premium space.
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
