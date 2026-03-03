import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "../../lib/site-data";

type Props = { params: Promise<{ slug: string }> };

const processSteps = [
  "Consultation and requirement mapping",
  "3D concept planning and revisions",
  "Material finalization and contract sign-off",
  "Execution, quality checks, and handover",
];

const faqs = [
  { q: "How long does a typical project take?", a: "Most premium projects are planned around 45–60 days based on scope and approvals." },
  { q: "Do you provide transparent pricing?", a: "Yes. We provide clear milestone-based contracts before execution begins." },
  { q: "Do you work across Mumbai region?", a: "Yes. We serve Mumbai, Navi Mumbai, and Thane." },
];

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return { title: "Service Not Found | AL.Sana Interior" };
  return {
    title: `${service.title} | AL.Sana Interior`,
    description: `${service.title} by AL.Sana Interior in Mumbai with premium process and clear pricing guidance.`,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <main>
      <section className="hero-bg noise-overlay" style={{ paddingTop: "10rem", paddingBottom: "5rem" }}>
        <div className="container mx-auto px-6">
          <span className="section-label reveal">Service</span>
          <div className="gold-rule-left mb-6 reveal delay-100" />
          <h1 className="reveal delay-200" style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "clamp(2.5rem,6vw,4.5rem)", maxWidth: "820px", lineHeight: 1.1 }}>{service.title}</h1>
          <p className="mt-4 reveal delay-300" style={{ color: "#b8975a", fontFamily: "var(--font-body)", fontSize: "1rem" }}>{service.starting}</p>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-6">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "2rem" }}>
            <div className="card-luxury p-8 reveal">
              <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "1.5rem", marginBottom: "1rem" }}>The Problem</h2>
              <div className="gold-rule mb-5" />
              <p style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.55)", fontWeight: 300, lineHeight: 1.8 }}>{service.problem}</p>
            </div>
            <div className="card-luxury p-8 reveal delay-100">
              <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "1.5rem", marginBottom: "1rem" }}>Our Solution</h2>
              <div className="gold-rule mb-5" />
              <p style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.55)", fontWeight: 300, lineHeight: 1.8 }}>{service.solution}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface-2)" }}>
        <div className="container mx-auto px-6">
          <span className="section-label reveal">Our Process</span>
          <h2 className="mt-4 mb-10 reveal delay-100" style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.15 }}>How we deliver<br /><em>with precision.</em></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "2rem" }}>
            {processSteps.map((step, i) => (
              <div key={step} className={`reveal delay-${(i + 1) * 100}`} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <span style={{ color: "#b8975a", fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: 300, lineHeight: 1 }}>0{i + 1}</span>
                <p style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.65)", fontWeight: 300, lineHeight: 1.7, fontSize: "0.92rem" }}>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-6">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "2rem", alignItems: "start" }}>
            <div>
              <span className="section-label reveal">Pricing</span>
              <div className="card-luxury p-8 mt-6 reveal delay-100">
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "1.3rem", marginBottom: "0.5rem" }}>Starting Investment</h3>
                <p style={{ color: "#b8975a", fontFamily: "var(--font-heading)", fontSize: "2rem", fontWeight: 300 }}>{service.starting}</p>
                <p className="mt-3" style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.45)", fontSize: "0.88rem", lineHeight: 1.6 }}>Final pricing depends on scope, area, materials, and execution timeline. Fixed-price contract always signed upfront.</p>
              </div>
            </div>
            <div>
              <span className="section-label reveal">FAQs</span>
              <div className="mt-6" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {faqs.map((faq, i) => (
                  <div key={faq.q} className={`card-luxury p-6 reveal delay-${(i + 1) * 100}`}>
                    <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "0.92rem", marginBottom: "0.5rem", color: "rgba(250,250,248,0.85)" }}>{faq.q}</h3>
                    <p style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.45)", fontWeight: 300, fontSize: "0.88rem", lineHeight: 1.65 }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface-2)", textAlign: "center" }}>
        <div className="container mx-auto px-6">
          <span className="section-label reveal">Get Started</span>
          <h2 className="mt-4 mb-6 reveal delay-100" style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.2 }}>Discuss your<br /><em>{service.title.toLowerCase()} project.</em></h2>
          <div className="reveal delay-200" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Schedule Free Consultation</Link>
            <Link href="/services" className="btn-outline">All Services</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
