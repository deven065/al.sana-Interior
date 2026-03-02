import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2BHK Interior Design in Mumbai | AL.Sana Interior",
  description: "Premium 2BHK interior design in Mumbai with transparent pricing, 3D planning, and turnkey execution by AL.Sana Interior.",
};

export default function TwoBhkInteriorDesignMumbai() {
  return (
    <main>
      <section className="hero-bg noise-overlay" style={{ paddingTop: "8rem", paddingBottom: "5rem" }}>
        <div className="container mx-auto px-6">
          <span className="section-label reveal">2BHK Interiors</span>
          <div className="gold-rule-left mb-6 reveal delay-100" />
          <h1 className="reveal delay-200" style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "clamp(2.5rem,6vw,4.5rem)", maxWidth: "820px", lineHeight: 1.1 }}>2BHK Interior Design<br /><em>in Mumbai.</em></h1>
          <p className="mt-6 max-w-2xl reveal delay-300" style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.45)", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.7 }}>
            AL.Sana Interior creates premium 2BHK homes in Mumbai with design clarity, fixed milestone execution, and high-quality finishes.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-6">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "2rem" }}>
            <div className="card-luxury p-8 reveal">
              <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "1.5rem", marginBottom: "1.25rem" }}>Why Homeowners Choose Us</h2>
              <div className="gold-rule mb-5" />
              {["Designed & delivered with a predictable timeline.", "Transparent contracts with zero hidden costs.", "Premium material selection with warranty support."].map((s) => (
                <div key={s} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start", marginBottom: "0.85rem" }}>
                  <span style={{ color: "#b8975a", fontSize: "0.85rem", marginTop: "0.15rem", flexShrink: 0 }}>✦</span>
                  <p style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.55)", fontWeight: 300, fontSize: "0.9rem", lineHeight: 1.6 }}>{s}</p>
                </div>
              ))}
            </div>
            <div className="card-luxury p-8 reveal delay-100">
              <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "1.5rem", marginBottom: "1.25rem" }}>Budget Positioning</h2>
              <div className="gold-rule mb-5" />
              <p style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.55)", fontWeight: 300, lineHeight: 1.7, marginBottom: "0.75rem" }}>2BHK interior projects start from ₹5 Lakhs.</p>
              <p style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.55)", fontWeight: 300, lineHeight: 1.7, marginBottom: "0.75rem" }}>Premium & Luxury projects range between ₹8–15 Lakhs.</p>
              <p style={{ color: "#b8975a", fontFamily: "var(--font-body)", fontSize: "0.82rem", letterSpacing: "0.08em" }}>Fixed-price milestone contract. Always.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface-2)", textAlign: "center" }}>
        <div className="container mx-auto px-6">
          <span className="section-label reveal">Transform Your 2BHK</span>
          <h2 className="mt-4 mb-6 reveal delay-100" style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.2 }}>Let's plan your<br /><em>premium 2BHK.</em></h2>
          <div className="reveal delay-200" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Schedule Free Consultation</Link>
            <Link href="/" className="btn-outline">Back to Home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
