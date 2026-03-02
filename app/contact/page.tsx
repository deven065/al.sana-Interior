"use client";

import { useState } from "react";

type FormData = {
  propertyType: string;
  location: string;
  budgetRange: string;
  timeline: string;
  phone: string;
};

const initialFormData: FormData = {
  propertyType: "2BHK Apartment",
  location: "",
  budgetRange: "₹5L – ₹8L",
  timeline: "Within 60 Days",
  phone: "",
};

const steps = [
  { label: "Property Type", n: 1 },
  { label: "Location", n: 2 },
  { label: "Budget", n: 3 },
  { label: "Timeline", n: 4 },
  { label: "Contact", n: 5 },
];

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [error, setError] = useState("");

  function updateField(key: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  function validateStep(): boolean {
    if (step === 2 && !formData.location.trim()) {
      setError("Please enter your location.");
      return false;
    }
    if (step === 5 && !formData.phone.trim()) {
      setError("Please enter your phone number.");
      return false;
    }
    return true;
  }

  function moveToNextStep() {
    if (!validateStep()) return;
    setError("");
    setStep((prev) => Math.min(5, prev + 1));
  }

  async function submitLead() {
    if (!validateStep()) return;
    setStatus("submitting");
    setError("");

    // Compose WhatsApp message
    const msg = [
      "Hi AL.Sana Interior, I'd like to book a free design consultation.",
      "",
      `Property Type: ${formData.propertyType}`,
      `Location: ${formData.location}`,
      `Budget Range: ${formData.budgetRange}`,
      `Timeline: ${formData.timeline}`,
      `Phone: ${formData.phone}`,
    ].join("\n");

    const url = `https://wa.me/919967622281?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setStatus("success");
    setFormData(initialFormData);
    setStep(1);
  }

  const inputStyle = {
    width: "100%",
    background: "#1a1825",
    border: "1px solid rgba(184,151,90,0.2)",
    borderRadius: "1px",
    padding: "0.85rem 1rem",
    color: "rgba(250,250,248,0.85)",
    fontFamily: "var(--font-body)",
    fontWeight: 300,
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color 0.2s",
    colorScheme: "dark",
  } as React.CSSProperties;

  const labelStyle = {
    display: "block",
    fontFamily: "var(--font-body)",
    fontSize: "0.78rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "rgba(250,250,248,0.45)",
    marginBottom: "0.5rem",
  } as React.CSSProperties;

  return (
    <main>
      {/* ── Page Hero ── */}
      <section
        className="hero-bg noise-overlay"
        style={{ paddingTop: "8rem", paddingBottom: "5rem" }}
      >
        <div className="container mx-auto px-6">
          <span className="section-label reveal">Contact</span>
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
            Apply for a premium<br />
            <em>design consultation.</em>
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
            This short form helps us understand your project before the first design call — so we make the most of your time.
          </p>
        </div>
      </section>

      {/* ── Form + Quick Contact ── */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            {/* Multi-step form */}
            <div className="card-luxury" style={{ padding: "2.5rem" }}>
              {/* Step indicator */}
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  marginBottom: "2rem",
                  flexWrap: "wrap",
                }}
              >
                {steps.map((s) => (
                  <div
                    key={s.n}
                    style={{
                      flex: 1,
                      minWidth: "40px",
                      height: "3px",
                      background:
                        s.n <= step
                          ? "#b8975a"
                          : "rgba(184,151,90,0.15)",
                      borderRadius: "2px",
                      transition: "background 0.3s",
                    }}
                  />
                ))}
              </div>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#b8975a",
                  marginBottom: "0.5rem",
                }}
              >
                Step {step} of 5 — {steps[step - 1]?.label}
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 300,
                  fontSize: "1.75rem",
                  marginBottom: "2rem",
                  lineHeight: 1.2,
                }}
              >
                Qualification Form
              </h2>

              {status === "success" && (
                <div
                  style={{
                    background: "rgba(184,151,90,0.08)",
                    border: "1px solid rgba(184,151,90,0.3)",
                    borderRadius: "1px",
                    padding: "1rem 1.25rem",
                    marginBottom: "1.5rem",
                    fontFamily: "var(--font-body)",
                    color: "#b8975a",
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                  }}
                >
                  ✦ &nbsp;WhatsApp opened with your details. If it didn&apos;t open, <a href="https://wa.me/919967622281" target="_blank" rel="noreferrer" style={{ color: "#b8975a", textDecoration: "underline" }}>tap here</a> to message us directly.
                </div>
              )}

              <form style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {step === 1 && (
                  <div>
                    <label htmlFor="property" style={labelStyle}>Property Type</label>
                    <select
                      id="property"
                      style={inputStyle}
                      value={formData.propertyType}
                      onChange={(e) => updateField("propertyType", e.target.value)}
                    >
                      <option>2BHK Apartment</option>
                      <option>3BHK Apartment</option>
                      <option>Penthouse</option>
                      <option>Villa</option>
                      <option>Office Space</option>
                    </select>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <label htmlFor="location" style={labelStyle}>Location</label>
                    <input
                      id="location"
                      style={inputStyle}
                      placeholder="Mumbai / Navi Mumbai / Thane"
                      value={formData.location}
                      onChange={(e) => updateField("location", e.target.value)}
                    />
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <label htmlFor="budget" style={labelStyle}>Budget Range</label>
                    <select
                      id="budget"
                      style={inputStyle}
                      value={formData.budgetRange}
                      onChange={(e) => updateField("budgetRange", e.target.value)}
                    >
                      <option>₹5L – ₹8L</option>
                      <option>₹8L – ₹12L</option>
                      <option>₹12L – ₹15L+</option>
                    </select>
                  </div>
                )}

                {step === 4 && (
                  <div>
                    <label htmlFor="timeline" style={labelStyle}>Preferred Timeline</label>
                    <select
                      id="timeline"
                      style={inputStyle}
                      value={formData.timeline}
                      onChange={(e) => updateField("timeline", e.target.value)}
                    >
                      <option>Within 30 Days</option>
                      <option>Within 60 Days</option>
                      <option>Within 90 Days</option>
                    </select>
                  </div>
                )}

                {step === 5 && (
                  <div>
                    <label htmlFor="phone" style={labelStyle}>Phone Number</label>
                    <input
                      id="phone"
                      style={inputStyle}
                      placeholder="+91 9X XXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                    />
                  </div>
                )}

                {error && (
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.85rem",
                      color: "#f87171",
                    }}
                  >
                    {error}
                  </p>
                )}

                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                  {step > 1 && (
                    <button
                      type="button"
                      className="btn-outline"
                      style={{ fontSize: "0.85rem", padding: "0.65rem 1.4rem" }}
                      onClick={() => {
                        setError("");
                        setStep((prev) => Math.max(1, prev - 1));
                      }}
                    >
                      Previous
                    </button>
                  )}
                  {step < 5 ? (
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={moveToNextStep}
                    >
                      Next Step
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={submitLead}
                      disabled={status === "submitting"}
                      style={{ opacity: status === "submitting" ? 0.6 : 1 }}
                    >
                      {status === "submitting" ? "Submitting…" : "Schedule Consultation"}
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Quick Contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div className="card-luxury" style={{ padding: "2rem" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 300,
                    fontSize: "1.4rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  Quick Contact
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {[
                    { icon: "📞", label: "Phone", value: "+91 99676 22281" },
                    { icon: "💬", label: "WhatsApp", value: "Response in 5 minutes" },
                    { icon: "🏢", label: "Studio", value: "Mumbai · Navi Mumbai · Thane" },
                  ].map((c) => (
                    <div
                      key={c.label}
                      style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}
                    >
                      <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{c.icon}</span>
                      <div>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.75rem",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "rgba(250,250,248,0.35)",
                            marginBottom: "0.2rem",
                          }}
                        >
                          {c.label}
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            color: "rgba(250,250,248,0.7)",
                            fontWeight: 300,
                            fontSize: "0.9rem",
                          }}
                        >
                          {c.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="https://wa.me/919967622281"
                  className="btn-primary"
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "inline-block", marginTop: "1.75rem" }}
                >
                  WhatsApp Now
                </a>
              </div>

              <div className="card-luxury" style={{ padding: "2rem" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 300,
                    fontSize: "1.2rem",
                    marginBottom: "1rem",
                  }}
                >
                  What to expect
                </h3>
                {[
                  "30-minute complimentary design call",
                  "Budget planning and scope discussion",
                  "No obligation — just honest advice",
                  "Follow-up with project proposal",
                ].map((item) => (
                  <div
                    key={item}
                    style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start", marginBottom: "0.75rem" }}
                  >
                    <span style={{ color: "#b8975a", fontSize: "0.85rem", marginTop: "0.15rem", flexShrink: 0 }}>
                      ✦
                    </span>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "rgba(250,250,248,0.55)",
                        fontWeight: 300,
                        fontSize: "0.88rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Location / Map ── */}
      <section className="section" style={{ background: "var(--surface)", paddingTop: "0" }}>
        <div className="container mx-auto px-6">
          <hr className="section-divider" style={{ marginBottom: "4rem" }} />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            {/* Left — location details */}
            <div className="reveal-left">
              <span className="section-label">Find Us</span>
              <h2
                className="mt-4 mb-6"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 300,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  lineHeight: 1.15,
                }}
              >
                Visit Our<br />
                <em style={{ color: "#b8975a" }}>Design Studio</em>
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="#b8975a" strokeWidth="1.6" style={{ width: "1.1rem", height: "1.1rem", flexShrink: 0, marginTop: "0.1rem" }}>
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    ),
                    label: "Address",
                    value: "AL.Sana Interior, Mumbai, Maharashtra, India",
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="#b8975a" strokeWidth="1.6" style={{ width: "1.1rem", height: "1.1rem", flexShrink: 0, marginTop: "0.1rem" }}>
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    ),
                    label: "Phone",
                    value: "+91 99676 22281",
                    href: "tel:+919967622281",
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="#b8975a" strokeWidth="1.6" style={{ width: "1.1rem", height: "1.1rem", flexShrink: 0, marginTop: "0.1rem" }}>
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    ),
                    label: "Email",
                    value: "hello@alsanainterior.com",
                    href: "mailto:hello@alsanainterior.com",
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="#b8975a" strokeWidth="1.6" style={{ width: "1.1rem", height: "1.1rem", flexShrink: 0, marginTop: "0.1rem" }}>
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    ),
                    label: "Studio Hours",
                    value: "Mon – Sat · 10:00 AM – 7:00 PM",
                  },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    {item.icon}
                    <div>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(250,250,248,0.28)", marginBottom: "0.25rem", fontWeight: 400 }}>
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="transition-colors duration-300 hover:text-[#b8975a]"
                          style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.65)", fontWeight: 300, fontSize: "0.95rem" }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.65)", fontWeight: 300, fontSize: "0.95rem" }}>
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://maps.google.com/?q=AL.SANA+INTERIOR+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ display: "inline-flex", marginTop: "2.5rem", fontSize: "0.62rem" }}
              >
                Get Directions →
              </a>
            </div>

            {/* Right — Map */}
            <div
              className="reveal-right"
              style={{
                position: "relative",
                border:   "1px solid rgba(184,151,90,0.2)",
                overflow: "hidden",
              }}
            >
              {/* Gold top accent line */}
              <div style={{ height: "2px", background: "linear-gradient(90deg, transparent, #b8975a, transparent)" }} />

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.471918340648!2d72.87080507466752!3d19.174579648871493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7d5569d5443%3A0x9838f4ebf6eac47e!2sAL.SANA%20INTERIOR!5e0!3m2!1sen!2sin!4v1772487592973!5m2!1sen!2sin"
                width="100%"
                height="420"
                style={{ border: 0, display: "block", filter: "invert(0.9) hue-rotate(180deg) saturate(0.7) brightness(0.85)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AL.Sana Interior Location"
              />

              {/* Gold bottom accent line */}
              <div style={{ height: "2px", background: "linear-gradient(90deg, transparent, #b8975a, transparent)" }} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
