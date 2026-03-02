import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../lib/site-data";

type Props = { params: Promise<{ slug: string }> };

const slugImages: Record<string, { main: string; detail: string }> = {
  "3bhk-andheri-west": {
    main: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    detail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80",
  },
  "2bhk-powai-lake-view": {
    main: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1200&q=80",
    detail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1000&q=80",
  },
  "villa-vashi-signature": {
    main: "https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=1200&q=80",
    detail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1000&q=80",
  },
};
const fallback = {
  main: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
  detail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80",
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project Not Found | AL.Sana Interior" };
  return {
    title: `${project.name} | Portfolio | AL.Sana Interior`,
    description: `${project.name} interior project in ${project.location} — ${project.budgetRange}, completed in ${project.timeline}.`,
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const imgs = slugImages[slug] ?? fallback;

  return (
    <main>
      <section style={{ position: "relative", height: "75vh", minHeight: "520px", overflow: "hidden" }}>
        <Image src={imgs.main} alt={project.name} fill priority sizes="100vw" style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,6,10,0.92) 0%, rgba(7,6,10,0.35) 55%, transparent 100%)" }} />
        <div className="container mx-auto px-6" style={{ position: "absolute", bottom: "3.5rem", left: 0, right: 0 }}>
          <span className="section-label">Portfolio</span>
          <h1 className="mt-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "clamp(2.5rem,6vw,4rem)", lineHeight: 1.1, maxWidth: "700px" }}>{project.name}</h1>
          <p className="mt-3" style={{ color: "#b8975a", fontFamily: "var(--font-body)", fontSize: "0.9rem" }}>{project.valueAnchor}</p>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-6">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "2rem" }}>
            <div className="card-luxury p-8 reveal">
              <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "1.5rem", marginBottom: "1.5rem" }}>Project Snapshot</h2>
              <div className="gold-rule mb-6" />
              {[
                { label: "Budget Range", value: project.budgetRange },
                { label: "Area", value: project.area },
                { label: "Location", value: project.location },
                { label: "Timeline", value: project.timeline },
              ].map((spec) => (
                <div key={spec.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "0.75rem 0", borderBottom: "1px solid rgba(184,151,90,0.08)", gap: "1rem" }}>
                  <span style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.35)", fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>{spec.label}</span>
                  <span style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.75)", fontWeight: 300, fontSize: "0.9rem", textAlign: "right" }}>{spec.value}</span>
                </div>
              ))}
            </div>
            <div className="card-luxury p-8 reveal delay-100" style={{ display: "flex", flexDirection: "column" }}>
              <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "1.5rem", marginBottom: "1.5rem" }}>Client Testimonial</h2>
              <div className="gold-rule mb-6" />
              <div style={{ color: "#b8975a", fontSize: "2.5rem", fontFamily: "var(--font-heading)", lineHeight: 1, marginBottom: "1rem" }}>❝</div>
              <p style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.65)", fontWeight: 300, lineHeight: 1.8, fontSize: "1rem", flex: 1, fontStyle: "italic" }}>{project.testimonial}</p>
              <p className="mt-4" style={{ fontFamily: "var(--font-body)", color: "#b8975a", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Verified Client · {project.location}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface-2)" }}>
        <div className="container mx-auto px-6">
          <span className="section-label reveal">Gallery</span>
          <h2 className="mt-4 mb-10 reveal delay-100" style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.15 }}>The transformation,<br /><em>in detail.</em></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "1.75rem" }}>
            <div className="img-wrap reveal" style={{ borderRadius: "2px", overflow: "hidden", aspectRatio: "4/3", position: "relative" }}>
              <Image src={imgs.main} alt={`${project.name} after`} fill sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              <div className="img-overlay-gradient" />
              <div style={{ position: "absolute", bottom: "1rem", left: "1.25rem", color: "#b8975a", fontFamily: "var(--font-body)", fontSize: "0.74rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>After</div>
            </div>
            <div className="img-wrap reveal delay-100" style={{ borderRadius: "2px", overflow: "hidden", aspectRatio: "4/3", position: "relative" }}>
              <Image src={imgs.detail} alt={`${project.name} detail`} fill sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              <div className="img-overlay-gradient" />
              <div style={{ position: "absolute", bottom: "1rem", left: "1.25rem", color: "#b8975a", fontFamily: "var(--font-body)", fontSize: "0.74rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Detail</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-6" style={{ maxWidth: "720px" }}>
          <span className="section-label reveal">Project Brief</span>
          <p className="mt-6 reveal delay-100" style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.55)", fontWeight: 300, lineHeight: 1.85, fontSize: "1.05rem" }}>{project.summary}</p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface-2)", textAlign: "center" }}>
        <div className="container mx-auto px-6">
          <span className="section-label reveal">Start Your Project</span>
          <h2 className="mt-4 mb-6 reveal delay-100" style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.2 }}>Ready to create your<br /><em>own masterpiece?</em></h2>
          <div className="reveal delay-200" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Schedule Free Consultation</Link>
            <Link href="/portfolio" className="btn-outline">View All Projects</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
