import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../../lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return { title: "Blog Not Found | AL.Sana Interior" };
  return {
    title: `${post.title} | AL.Sana Interior Blog`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <main>
      <section className="hero-bg noise-overlay" style={{ paddingTop: "8rem", paddingBottom: "5rem" }}>
        <div className="container mx-auto px-6">
          <span className="section-label reveal">Blog</span>
          <div className="gold-rule-left mb-6 reveal delay-100" />
          <h1 className="reveal delay-200" style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "clamp(2rem,5vw,3.75rem)", maxWidth: "860px", lineHeight: 1.15 }}>{post.title}</h1>
          <p className="mt-6 max-w-2xl reveal delay-300" style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.45)", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.7 }}>{post.excerpt}</p>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-6" style={{ maxWidth: "780px" }}>
          <div className="card-luxury p-10 reveal">
            <span className="section-label">Article Overview</span>
            <p className="mt-6" style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.55)", fontWeight: 300, lineHeight: 1.9, fontSize: "1.05rem" }}>
              This article provides practical guidance for Mumbai homeowners planning premium interiors in 2026, with cost clarity, execution expectations, and design decision frameworks to help you avoid common mistakes and make confident choices.
            </p>
            <div className="gold-rule mt-8 mb-8" />
            <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "1.6rem", marginBottom: "1rem" }}>Key Takeaways</h2>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {[
                "Premium interior projects in Mumbai start from ₹5L for focused upgrades.",
                "Fixed-price contracts protect your budget — always insist on one.",
                "3D planning before execution saves time and cost in the long run.",
                "Material selection defines 60% of the final look — choose wisely.",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ color: "#b8975a", fontSize: "0.9rem", marginTop: "0.2rem", flexShrink: 0 }}>✦</span>
                  <p style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.6)", fontWeight: 300, lineHeight: 1.6, fontSize: "0.95rem" }}>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface-2)", textAlign: "center" }}>
        <div className="container mx-auto px-6">
          <span className="section-label reveal">Ready to Act?</span>
          <h2 className="mt-4 mb-6 reveal delay-100" style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.2 }}>Turn insight into<br /><em>your dream home.</em></h2>
          <div className="reveal delay-200" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Schedule Free Consultation</Link>
            <Link href="/blog" className="btn-outline">More Articles</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
