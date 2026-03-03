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
  const [focusedField, setFocusedField] = useState("");
  const [openDropdown, setOpenDropdown] = useState("");

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

  const inputStyle = (fieldId: string): React.CSSProperties => ({
    width: "100%",
    background: focusedField === fieldId ? "rgba(184,151,90,0.04)" : "#1a1825",
    border: focusedField === fieldId
      ? "1px solid rgba(184,151,90,0.7)"
      : "1px solid rgba(184,151,90,0.2)",
    borderRadius: "1px",
    padding: "0.85rem 1rem",
    color: "rgba(250,250,248,0.85)",
    fontFamily: "var(--font-body)",
    fontWeight: 300,
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease",
    boxShadow: focusedField === fieldId ? "0 0 0 3px rgba(184,151,90,0.08)" : "none",
    colorScheme: "dark",
  });

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
        style={{ paddingTop: "10rem", paddingBottom: "5rem" }}
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
            <div className="card-luxury" style={{ padding: "2.5rem", overflow: "visible" }}>
              {/* Premium step indicator */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "2.5rem",
                  gap: "0",
                }}
              >
                {steps.map((s, i) => (
                  <div key={s.n} style={{ display: "flex", alignItems: "center", flex: i < steps.length - 1 ? 1 : "none" }}>
                    {/* Circle */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.3rem", flexShrink: 0 }}>
                      <div
                        style={{
                          width: "2rem",
                          height: "2rem",
                          borderRadius: "50%",
                          border: s.n < step
                            ? "1px solid #b8975a"
                            : s.n === step
                            ? "1px solid #b8975a"
                            : "1px solid rgba(184,151,90,0.22)",
                          background: s.n < step
                            ? "#b8975a"
                            : s.n === step
                            ? "rgba(184,151,90,0.12)"
                            : "transparent",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.4s ease",
                          flexShrink: 0,
                        }}
                      >
                        {s.n < step ? (
                          <svg viewBox="0 0 12 12" fill="none" style={{ width: "0.65rem", height: "0.65rem" }}>
                            <polyline points="1.5,6 5,9.5 10.5,2.5" stroke="#07060a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : (
                          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", fontWeight: 500, color: s.n === step ? "#b8975a" : "rgba(184,151,90,0.4)", letterSpacing: "0.02em" }}>
                            {String(s.n).padStart(2, "0")}
                          </span>
                        )}
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.52rem",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: s.n === step ? "#b8975a" : s.n < step ? "rgba(184,151,90,0.55)" : "rgba(250,250,248,0.2)",
                          whiteSpace: "nowrap",
                          transition: "color 0.4s ease",
                          fontWeight: s.n === step ? 500 : 300,
                        }}
                      >
                        {s.label}
                      </span>
                    </div>
                    {/* Connector line */}
                    {i < steps.length - 1 && (
                      <div
                        style={{
                          flex: 1,
                          height: "1px",
                          margin: "-1rem 0.35rem 0",
                          background: s.n < step
                            ? "rgba(184,151,90,0.5)"
                            : "rgba(184,151,90,0.12)",
                          transition: "background 0.4s ease",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 300,
                  fontSize: "1.75rem",
                  marginBottom: "2rem",
                  lineHeight: 1.2,
                }}
              >
                Tell Us About
                <em style={{ color: "#b8975a", fontStyle: "italic" }}> Your Space</em>
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
                    <label style={labelStyle}>Property Type</label>
                    <div style={{ position: "relative" }}>
                      <button
                        type="button"
                        onClick={() => setOpenDropdown(openDropdown === "property" ? "" : "property")}
                        style={{ ...inputStyle("property"), display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", textAlign: "left" }}
                      >
                        <span>{formData.propertyType}</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#b8975a" strokeWidth="1.5" style={{ width: "1rem", height: "1rem", flexShrink: 0, transition: "transform 0.3s", transform: openDropdown === "property" ? "rotate(180deg)" : "none" }}><path d="m6 9 6 6 6-6"/></svg>
                      </button>
                      {openDropdown === "property" && (
                        <div style={{ position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0, background: "#13111e", border: "1px solid rgba(184,151,90,0.25)", zIndex: 100, overflow: "hidden" }}>
                          {["2BHK Apartment","3BHK Apartment","Penthouse","Villa","Office Space"].map((opt) => (
                            <button key={opt} type="button"
                              onClick={() => { updateField("propertyType", opt); setOpenDropdown(""); }}
                              style={{ display: "block", width: "100%", textAlign: "left", padding: "0.75rem 1rem", fontFamily: "var(--font-body)", fontSize: "0.92rem", fontWeight: 300, color: formData.propertyType === opt ? "#b8975a" : "rgba(250,250,248,0.75)", background: formData.propertyType === opt ? "rgba(184,151,90,0.08)" : "transparent", border: "none", cursor: "pointer", borderBottom: "1px solid rgba(184,151,90,0.06)", transition: "background 0.2s" }}
                              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(184,151,90,0.1)"; }}
                              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = formData.propertyType === opt ? "rgba(184,151,90,0.08)" : "transparent"; }}
                            >{opt}</button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <label htmlFor="location" style={labelStyle}>Location</label>
                    <input
                      id="location"
                      style={inputStyle("location")}
                      placeholder="Mumbai / Navi Mumbai / Thane"
                      value={formData.location}
                      onChange={(e) => updateField("location", e.target.value)}
                      onFocus={() => setFocusedField("location")}
                      onBlur={() => setFocusedField("")}
                    />
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <label style={labelStyle}>Budget Range</label>
                    <div style={{ position: "relative" }}>
                      <button
                        type="button"
                        onClick={() => setOpenDropdown(openDropdown === "budget" ? "" : "budget")}
                        style={{ ...inputStyle("budget"), display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", textAlign: "left" }}
                      >
                        <span>{formData.budgetRange}</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#b8975a" strokeWidth="1.5" style={{ width: "1rem", height: "1rem", flexShrink: 0, transition: "transform 0.3s", transform: openDropdown === "budget" ? "rotate(180deg)" : "none" }}><path d="m6 9 6 6 6-6"/></svg>
                      </button>
                      {openDropdown === "budget" && (
                        <div style={{ position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0, background: "#13111e", border: "1px solid rgba(184,151,90,0.25)", zIndex: 100, overflow: "hidden" }}>
                          {["₹5L – ₹8L","₹8L – ₹12L","₹12L – ₹15L+","₹20L+"].map((opt) => (
                            <button key={opt} type="button"
                              onClick={() => { updateField("budgetRange", opt); setOpenDropdown(""); }}
                              style={{ display: "block", width: "100%", textAlign: "left", padding: "0.75rem 1rem", fontFamily: "var(--font-body)", fontSize: "0.92rem", fontWeight: 300, color: formData.budgetRange === opt ? "#b8975a" : "rgba(250,250,248,0.75)", background: formData.budgetRange === opt ? "rgba(184,151,90,0.08)" : "transparent", border: "none", cursor: "pointer", borderBottom: "1px solid rgba(184,151,90,0.06)", transition: "background 0.2s" }}
                              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(184,151,90,0.1)"; }}
                              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = formData.budgetRange === opt ? "rgba(184,151,90,0.08)" : "transparent"; }}
                            >{opt}</button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div>
                    <label style={labelStyle}>Preferred Timeline</label>
                    <div style={{ position: "relative" }}>
                      <button
                        type="button"
                        onClick={() => setOpenDropdown(openDropdown === "timeline" ? "" : "timeline")}
                        style={{ ...inputStyle("timeline"), display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", textAlign: "left" }}
                      >
                        <span>{formData.timeline}</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#b8975a" strokeWidth="1.5" style={{ width: "1rem", height: "1rem", flexShrink: 0, transition: "transform 0.3s", transform: openDropdown === "timeline" ? "rotate(180deg)" : "none" }}><path d="m6 9 6 6 6-6"/></svg>
                      </button>
                      {openDropdown === "timeline" && (
                        <div style={{ position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0, background: "#13111e", border: "1px solid rgba(184,151,90,0.25)", zIndex: 100, overflow: "hidden" }}>
                          {["Within 30 Days","Within 60 Days","Within 90 Days","3–6 Months"].map((opt) => (
                            <button key={opt} type="button"
                              onClick={() => { updateField("timeline", opt); setOpenDropdown(""); }}
                              style={{ display: "block", width: "100%", textAlign: "left", padding: "0.75rem 1rem", fontFamily: "var(--font-body)", fontSize: "0.92rem", fontWeight: 300, color: formData.timeline === opt ? "#b8975a" : "rgba(250,250,248,0.75)", background: formData.timeline === opt ? "rgba(184,151,90,0.08)" : "transparent", border: "none", cursor: "pointer", borderBottom: "1px solid rgba(184,151,90,0.06)", transition: "background 0.2s" }}
                              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(184,151,90,0.1)"; }}
                              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = formData.timeline === opt ? "rgba(184,151,90,0.08)" : "transparent"; }}
                            >{opt}</button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {step === 5 && (
                  <div>
                    <label htmlFor="phone" style={labelStyle}>Phone Number</label>
                    <input
                      id="phone"
                      style={inputStyle("phone")}
                      placeholder="+91 9X XXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField("")}
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
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {/* Phone */}
                  <a href="tel:+919967622281" style={{ display: "flex", gap: "1rem", alignItems: "flex-start", textDecoration: "none" }} className="group">
                    <div style={{ width: "2.25rem", height: "2.25rem", border: "1px solid rgba(184,151,90,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "border-color 0.3s, background 0.3s" }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="#b8975a" strokeWidth="1.6" style={{ width: "1rem", height: "1rem" }}>
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(250,250,248,0.3)", marginBottom: "0.2rem" }}>Phone</p>
                      <p style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.75)", fontWeight: 300, fontSize: "0.9rem" }}>+91 99676 22281</p>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a href="https://wa.me/919967622281" target="_blank" rel="noreferrer" style={{ display: "flex", gap: "1rem", alignItems: "flex-start", textDecoration: "none" }}>
                    <div style={{ width: "2.25rem", height: "2.25rem", border: "1px solid rgba(184,151,90,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg viewBox="0 0 24 24" fill="#b8975a" style={{ width: "1rem", height: "1rem" }}>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(250,250,248,0.3)", marginBottom: "0.2rem" }}>WhatsApp</p>
                      <p style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.75)", fontWeight: 300, fontSize: "0.9rem" }}>Reply within 5 minutes</p>
                    </div>
                  </a>

                  {/* Studio */}
                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ width: "2.25rem", height: "2.25rem", border: "1px solid rgba(184,151,90,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="#b8975a" strokeWidth="1.6" style={{ width: "1rem", height: "1rem" }}>
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(250,250,248,0.3)", marginBottom: "0.2rem" }}>Studio</p>
                      <p style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.75)", fontWeight: 300, fontSize: "0.9rem" }}>Mumbai · Navi Mumbai · Thane</p>
                    </div>
                  </div>
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

