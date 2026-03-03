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
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "1.5rem", margin: 0 }}>Client Testimonial</h2>
                <svg viewBox="0 0 24 24" style={{ width: "1.3rem", height: "1.3rem", flexShrink: 0 }}>
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div className="gold-rule mb-5" />
              {/* 5 stars */}
              <div style={{ display: "flex", gap: "2px", marginBottom: "1rem" }}>
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} viewBox="0 0 20 20" style={{ width: "0.9rem", height: "0.9rem", fill: "#b8975a" }}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div style={{ color: "#b8975a", fontSize: "2.5rem", fontFamily: "var(--font-heading)", lineHeight: 1, marginBottom: "1rem" }}>❝</div>
              <p style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.65)", fontWeight: 300, lineHeight: 1.8, fontSize: "1rem", flex: 1, fontStyle: "italic" }}>{project.testimonial}</p>
              <p className="mt-4" style={{ fontFamily: "var(--font-body)", color: "#b8975a", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Verified Google Review · {project.location}</p>
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
