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
    </main>
  );
}
