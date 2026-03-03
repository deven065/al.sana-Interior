import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./components/scroll-reveal";
import AnimatedCounter from "./components/animated-counter";
import Marquee from "./components/marquee";
import BeforeAfterSlider from "./components/before-after-slider";

/* ── Data ──────────────────────────────────────────────────────────── */
const projects = [
  {
    slug:     "3bhk-bandra-west",
    title:    "3BHK Residence",
    location: "Bandra West, Mumbai",
    category: "Luxury Residential",
    value:    "₹12.5L",
    days:     "52 Days",
    area:     "1,450 sq ft",
    tag:      "Featured",
    image:    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  },
  {
    slug:     "modular-kitchen-powai",
    title:    "Designer Kitchen",
    location: "Powai, Mumbai",
    category: "Modular Kitchen",
    value:    "₹6.8L",
    days:     "28 Days",
    area:     "320 sq ft",
    tag:      "Most Popular",
    image:    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    slug:     "2bhk-andheri-east",
    title:    "2BHK Full Home",
    location: "Andheri East, Mumbai",
    category: "Full Home Interior",
    value:    "₹8.2L",
    days:     "40 Days",
    area:     "980 sq ft",
    tag:      "Client Favourite",
    image:    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
  },
];

const stats = [
  { num: "2700+", label: "Happy Customers"   },
  { num: "24+",   label: "Services Offered"  },
  { num: "4.6★",  label: "Google Rating"    },
  { num: "86",    label: "Google Reviews"   },
];

const usps = [
  {
    icon:  "◈",
    title: "60-Day Delivery",
    desc:  "Contractual timelines. If we are late, we pay the penalty — not you.",
  },
  {
    icon:  "◈",
    title: "Transparent Pricing",
    desc:  "Fixed quote before work starts. No hidden costs, no surprises, ever.",
  },
  {
    icon:  "◈",
    title: "3D Before Execution",
    desc:  "See your space fully designed in 3D before a single material is ordered.",
  },
  {
    icon:  "◈",
    title: "5-Year Warranty",
    desc:  "Every project backed by a comprehensive 5-year warranty on all workmanship.",
  },
];

const process = [
  { step: "01", title: "Free Consultation",    desc: "We understand your vision, lifestyle and budget. No obligations, no pressure." },
  { step: "02", title: "3D Design & Planning", desc: "Full 3D renders so you see exactly how your space looks before a single nail is driven." },
  { step: "03", title: "Material Selection",   desc: "Visit our curated material studio. We guide every choice to match your aesthetic and budget." },
  { step: "04", title: "Execution",            desc: "In-house team. Daily progress updates. Zero surprises. Zero delays." },
  { step: "05", title: "Handover",             desc: "Delivered on time, with a warranty and fully transparent final billing." },
];

const testimonials = [
  {
    name:     "Mosin M.",
    location: "Mumbai",
    text:     "Alsana interior the work quality it's like superb. Mr Ajaz and his workers very professionally highly recommended to alsana interior. Thank you!",
    rating:   5,
    project:  "Interior Project · Mumbai",
  },
  {
    name:     "Mohit N.",
    location: "Mumbai",
    text:     "Completely professional — person reached within 1 hour of call. Will highly recommend for their service. Thanks Firoz.",
    rating:   5,
    project:  "Interior Project · Mumbai",
  },
  {
    name:     "Sahaban A.",
    location: "Mumbai",
    text:     "Great job, always work on time and good communication. Highly satisfied with the entire experience.",
    rating:   5,
    project:  "Interior Project · Mumbai",
  },
];

const packages = [
  {
    tier:     "Essential",
    range:    "₹5L – ₹8L",
    desc:     "Complete home transformation with quality craftsmanship and smart material selection.",
    features: ["2D Floor Plans", "Material Selection", "Basic 3D Views", "60-Day Delivery", "2-Year Warranty"],
    featured: false,
  },
  {
    tier:     "Premium",
    range:    "₹8L – ₹12L",
    desc:     "Elevated design with luxury materials, full 3D visualisation and a dedicated project manager.",
    features: ["Full 3D Design", "Premium Materials", "Dedicated PM", "45-Day Delivery", "3-Year Warranty"],
    featured: true,
  },
  {
    tier:     "Luxury Bespoke",
    range:    "₹12L+",
    desc:     "Completely bespoke design. Custom furniture. Imported materials. Zero compromises.",
    features: ["Bespoke Furniture", "Imported Materials", "VIP Consultation", "Priority Delivery", "5-Year Warranty"],
    featured: false,
  },
];

const gold  = "#b8975a";
const fh    = "var(--font-heading)";
const fb    = "var(--font-body)";
const w45   = "rgba(250,250,248,0.45)";
const w30   = "rgba(250,250,248,0.30)";
const w20   = "rgba(250,250,248,0.20)";

/* ── Page ───────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <ScrollReveal />

      {/* ══ HERO ════════════════════════════════════════════════════ */}
      <section
        className="hero-bg noise-overlay min-h-screen flex items-center"
        style={{ paddingTop: "10.5rem", paddingBottom: "5rem" }}
      >
        {/* Ambient glows */}
        <div className="hero-glow" style={{ width: "700px", height: "700px", top: "-15%", right: "-8%",  background: "radial-gradient(circle, #b8975a, transparent 70%)" }} />
        <div className="hero-glow" style={{ width: "400px", height: "400px", bottom: "0%", left: "-6%", background: "radial-gradient(circle, #b8975a, transparent 70%)" }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

            {/* Left — copy */}
            <div>
              <div className="flex flex-wrap gap-3 mb-10">
                <div className="trust-badge">
                  <span style={{ color: gold }}>★ 4.6</span>
                  <span>86 Google Reviews</span>
                </div>
                <div className="trust-badge">
                  <span>5+ Years · 2700+ Happy Customers</span>
                </div>
              </div>

              <h1
                className="mb-8"
                style={{ fontFamily: fh, fontWeight: 300, lineHeight: 1.08 }}
              >
                Luxury Interior<br />
                Design{" "}
                <em className="gold-shimmer not-italic">That Reflects</em>
                <br />
                <em className="gold-shimmer not-italic">Your Lifestyle</em>
              </h1>

              <p
                className="text-lg mb-2 max-w-xl"
                style={{ fontFamily: fb, color: "rgba(250,250,248,0.58)", fontWeight: 300, lineHeight: 1.85 }}
              >
                Designed &amp; Delivered in{" "}
                <strong style={{ color: gold, fontWeight: 500 }}>60 Days</strong>.
                Transforming Mumbai homes into premium living spaces — without stress, delays or hidden costs.
              </p>
              <p
                className="text-sm mb-12 tracking-widest"
                style={{ fontFamily: fb, color: w20, fontWeight: 300 }}
              >
                Mumbai · Navi Mumbai · Thane
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/contact" className="btn-primary">
                  Book Free Consultation <span>→</span>
                </Link>
                <Link href="/portfolio" className="btn-outline">
                  View Portfolio
                </Link>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {["GST Registered", "5-Year Warranty", "Transparent Contract", "No Hidden Costs"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs tracking-wider"
                    style={{ fontFamily: fb, color: w30, fontWeight: 300 }}
                  >
                    <span style={{ color: gold }}>✓</span> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — hero image */}
            <div className="relative hidden lg:block">
              {/* Gold corner brackets */}
              <div
                className="absolute -top-4 -left-4 w-14 h-14 z-10"
                style={{ borderTop: `1px solid rgba(184,151,90,0.55)`, borderLeft: `1px solid rgba(184,151,90,0.55)` }}
              />
              <div
                className="absolute -bottom-4 -right-4 w-14 h-14 z-10"
                style={{ borderBottom: `1px solid rgba(184,151,90,0.55)`, borderRight: `1px solid rgba(184,151,90,0.55)` }}
              />

              <div className="img-wrap" style={{ paddingBottom: "115%", position: "relative" }}>
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=85"
                  alt="Luxury interior living room by AL.Sana Interior Mumbai"
                  fill
                  priority
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="img-overlay-gradient" />
              </div>

              {/* Floating stat card */}
              <div
                className="absolute -bottom-8 -left-8 p-5 z-10"
                style={{
                  background: "linear-gradient(145deg, #111018, #161420)",
                  border:     "1px solid rgba(184,151,90,0.25)",
                }}
              >
                <div className="stat-number" style={{ fontSize: "2.2rem" }}>2700+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ MARQUEE TICKER ══════════════════════════════════════════════ */}
      <Marquee />

      {/* ══ STATS BAR ════════════════════════════════════════════════════ */}
      <section
        style={{
          background:   "var(--surface)",
          borderTop:    "1px solid rgba(184,151,90,0.1)",
          borderBottom: "1px solid rgba(184,151,90,0.1)",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="stat-item">
              <div className="stat-number"><AnimatedCounter end={2700} suffix="+" /></div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number"><AnimatedCounter end={24} suffix="+" /></div>
              <div className="stat-label">Services Offered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.6★</div>
              <div className="stat-label">Google Rating</div>
            </div>
            <div className="stat-item">
              <div className="stat-number"><AnimatedCounter end={86} /></div>
              <div className="stat-label">Google Reviews</div>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ══ FEATURED PROJECTS ════════════════════════════════════════ */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 reveal">
            <span className="section-label">Our Work</span>
            <div className="gold-rule mb-8" />
            <h2 style={{ fontFamily: fh, fontWeight: 300 }}>Featured Projects</h2>
            <p
              className="mt-5 max-w-md mx-auto"
              style={{ fontFamily: fb, color: w45, fontWeight: 300 }}
            >
              A curated selection of our finest work — each space designed with purpose, executed with precision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {projects.map((p, i) => (
              <Link
                href={`/portfolio/${p.slug}`}
                key={p.slug}
                className={`card-luxury reveal delay-${(i + 1) * 100} group block`}
              >
                <div className="img-wrap" style={{ paddingBottom: "68%", position: "relative" }}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="img-overlay-gradient" />
                  <div className="absolute bottom-0 left-0 p-5 z-10">
                    <span
                      className="text-[0.6rem] px-3 py-1 tracking-widest uppercase"
                      style={{
                        border:          "1px solid rgba(184,151,90,0.5)",
                        color:           gold,
                        fontFamily:      fb,
                        background:      "rgba(7,6,10,0.65)",
                        backdropFilter:  "blur(4px)",
                      }}
                    >
                      {p.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p
                    className="text-[0.62rem] tracking-[0.28em] uppercase mb-2"
                    style={{ color: gold, fontFamily: fb }}
                  >
                    {p.category}
                  </p>
                  <h3
                    className="mb-1"
                    style={{ fontFamily: fh, fontWeight: 400, fontSize: "1.2rem" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-xs mb-4"
                    style={{ fontFamily: fb, color: w30, fontWeight: 300 }}
                  >
                    {p.location}
                  </p>
                  <div className="flex items-center gap-2 flex-wrap mb-5">
                    <span
                      className="font-medium text-sm"
                      style={{ color: gold, fontFamily: fb }}
                    >
                      {p.value}
                    </span>
                    <span style={{ color: w20 }}>·</span>
                    <span className="text-xs" style={{ color: w45, fontFamily: fb, fontWeight: 300 }}>{p.days}</span>
                    <span style={{ color: w20 }}>·</span>
                    <span className="text-xs" style={{ color: w45, fontFamily: fb, fontWeight: 300 }}>{p.area}</span>
                  </div>
                  <div
                    className="flex items-center gap-2 text-[0.62rem] tracking-widest uppercase transition-all duration-400 group-hover:gap-3"
                    style={{ color: gold, fontFamily: fb }}
                  >
                    View Project <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center reveal">
            <Link href="/portfolio" className="btn-outline">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ══ WHY CHOOSE US ════════════════════════════════════════════ */}
      <section
        className="section noise-overlay"
        style={{ background: "var(--surface)", position: "relative" }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 reveal">
            <span className="section-label">Why AL.Sana</span>
            <div className="gold-rule mb-8" />
            <h2 style={{ fontFamily: fh, fontWeight: 300 }}>
              We Don&apos;t Design Houses.
              <br />
              <em className="gold-shimmer not-italic">We Design Lifestyles.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((u, i) => (
              <div key={u.title} className={`card-luxury p-8 reveal delay-${(i + 1) * 100}`}>
                <div
                  className="text-3xl mb-5"
                  style={{ color: gold, fontFamily: fh }}
                >
                  {u.icon}
                </div>
                <h4
                  className="mb-3"
                  style={{ fontFamily: fh, fontWeight: 500, fontSize: "1.1rem" }}
                >
                  {u.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: fb, color: w45, fontWeight: 300 }}
                >
                  {u.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ══ PROCESS ══════════════════════════════════════════════════ */}
      <section className="section corner-ornament-always" style={{ position: "relative", overflow: "hidden" }}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* Sticky left */}
            <div className="reveal-left lg:sticky lg:top-32">
              <span className="section-label">How We Work</span>
              <div className="gold-rule-left mb-8" />
              <h2 style={{ fontFamily: fh, fontWeight: 300 }}>Our Process</h2>
              <p
                className="mt-5 max-w-md"
                style={{ fontFamily: fb, color: w45, fontWeight: 300, lineHeight: 1.9 }}
              >
                Interior clients fear delays, hidden costs and poor quality. Our 5-step process eliminates every one of those fears — with full transparency at each stage.
              </p>
              <div className="mt-10">
                <Link href="/contact" className="btn-primary">
                  Schedule Free Consultation →
                </Link>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-12 reveal-right">
              {process.map((step, i) => (
                <div key={step.step} className={`process-step delay-${i * 100}`}>
                  <div className="step-number">{step.step}</div>
                  <h4
                    className="mb-2"
                    style={{ fontFamily: fh, fontWeight: 500 }}
                  >
                    {step.title}
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: fb, color: w45, fontWeight: 300 }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ══ TESTIMONIALS ═════════════════════════════════════════════ */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 reveal">
            <span className="section-label">Client Stories</span>
            <div className="gold-rule mb-8" />
            <h2 style={{ fontFamily: fh, fontWeight: 300 }}>What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-3 mt-5">
              <div style={{ color: gold, letterSpacing: "0.1em" }}>★★★★★</div>
              <span
                className="text-sm"
                style={{ fontFamily: fb, color: w45, fontWeight: 300 }}
              >
                4.6 rating · 86 Google Reviews
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`testimonial-card reveal delay-${(i + 1) * 100}`}>
                {/* Stars + Google badge */}
                <div className="flex items-center justify-between mb-5">
                  <div style={{ display: "flex", gap: "2px" }}>
                    {[1,2,3,4,5].map((s) => (
                      <svg key={s} viewBox="0 0 20 20" style={{ width: "0.95rem", height: "0.95rem", fill: gold }}>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <svg viewBox="0 0 24 24" style={{ width: "1.1rem", height: "1.1rem", flexShrink: 0 }}>
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <p
                  className="text-sm leading-relaxed mb-6 italic"
                  style={{ fontFamily: fb, color: "rgba(250,250,248,0.60)", fontWeight: 300 }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
                <div style={{ borderTop: "1px solid rgba(184,151,90,0.12)", paddingTop: "1rem" }}>
                  <div
                    className="font-medium"
                    style={{ fontFamily: fh, color: "var(--white)", fontSize: "1.05rem" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ color: gold, fontFamily: fb, fontWeight: 300 }}
                  >
                    {t.location}
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: w20, fontFamily: fb, fontWeight: 300 }}
                  >
                    {t.project}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14 reveal">
            <Link href="/testimonials" className="btn-outline">
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>
      {/* ══ BEFORE / AFTER ═══════════════════════════════════════════ */}
      <section className="section corner-ornament-always" style={{ background: "var(--surface-2)", position: "relative", overflow: "hidden" }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="section-label">The Transformation</span>
            <div className="gold-rule mb-8" />
            <h2 style={{ fontFamily: fh, fontWeight: 300 }}>Before &amp; After</h2>
            <p
              className="mt-5 max-w-md mx-auto"
              style={{ fontFamily: fb, color: w45, fontWeight: 300 }}
            >
              Drag the slider to see the full transformation. Every project delivered to the same standard.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="reveal-left">
              <BeforeAfterSlider
                before="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80"
                after="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80"
                beforeAlt="Living room before renovation"
                afterAlt="Luxury living room after AL.Sana Interior"
              />
              <p className="mt-4 text-center text-xs tracking-widest" style={{ fontFamily: fb, color: w30, fontWeight: 300 }}>Living Room · Bandra West</p>
            </div>
            <div className="reveal-right">
              <BeforeAfterSlider
                before="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80"
                after="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=900&q=80"
                beforeAlt="Kitchen before renovation"
                afterAlt="Luxury modular kitchen after AL.Sana Interior"
              />
              <p className="mt-4 text-center text-xs tracking-widest" style={{ fontFamily: fb, color: w30, fontWeight: 300 }}>Modular Kitchen · Powai</p>
            </div>
          </div>
        </div>
      </section>
      <hr className="section-divider" />

      {/* ══ PRICING ══════════════════════════════════════════════════ */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 reveal">
            <span className="section-label">Investment</span>
            <div className="gold-rule mb-8" />
            <h2 style={{ fontFamily: fh, fontWeight: 300 }}>Transparent Pricing</h2>
            <p
              className="mt-5 max-w-lg mx-auto"
              style={{ fontFamily: fb, color: w45, fontWeight: 300 }}
            >
              No surprises. No hidden costs. Every project starts with a fixed quote you approve before we begin.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <div
                key={pkg.tier}
                className={`price-card reveal delay-${(i + 1) * 100} ${pkg.featured ? "featured" : ""}`}
              >
                {pkg.featured && (
                  <div
                    className="text-[0.6rem] tracking-[0.3em] uppercase px-4 py-1.5 inline-block mb-6"
                    style={{
                      background: gold,
                      color:      "#07060a",
                      fontFamily: fb,
                      fontWeight: 500,
                      marginLeft: "-0.5rem",
                    }}
                  >
                    Most Popular
                  </div>
                )}
                <div
                  className="text-[0.62rem] tracking-[0.38em] uppercase mb-3"
                  style={{ color: gold, fontFamily: fb, fontWeight: 400 }}
                >
                  {pkg.tier}
                </div>
                <div
                  className="mb-4"
                  style={{ fontFamily: fh, fontSize: "2rem", fontWeight: 300, color: "var(--white)" }}
                >
                  {pkg.range}
                </div>
                <p
                  className="text-sm mb-7 leading-relaxed"
                  style={{ fontFamily: fb, color: w45, fontWeight: 300 }}
                >
                  {pkg.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-sm"
                      style={{ fontFamily: fb, color: "rgba(250,250,248,0.58)", fontWeight: 300 }}
                    >
                      <span style={{ color: gold }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`${pkg.featured ? "btn-primary" : "btn-outline"} w-full justify-center`}
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ════════════════════════════════════════════════ */}
      <section
        className="section noise-overlay corner-ornament-always"
        style={{
          background:   "linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 50%, var(--surface) 100%)",
          borderTop:    "1px solid rgba(184,151,90,0.1)",
          borderBottom: "1px solid rgba(184,151,90,0.1)",
          position:     "relative",
        }}
      >
        {/* Central glow */}
        <div
          className="hero-glow"
          style={{
            width:     "500px",
            height:    "500px",
            top:       "50%",
            left:      "50%",
            transform: "translate(-50%,-50%)",
            background: "radial-gradient(circle, #b8975a, transparent 70%)",
            opacity:    0.07,
          }}
        />

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="reveal">
            <span className="section-label">Get Started</span>
            <div className="gold-rule mb-10" />
            <h2
              className="max-w-2xl mx-auto mb-6"
              style={{ fontFamily: fh, fontWeight: 300 }}
            >
              Ready to Transform<br />
              <em className="gold-shimmer not-italic">Your Space?</em>
            </h2>
            <p
              className="max-w-md mx-auto mb-12"
              style={{ fontFamily: fb, color: w45, fontWeight: 300, lineHeight: 1.9 }}
            >
              Book your free 45-minute design consultation. No pressure, no obligations — just a genuine conversation about your vision.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Schedule Your Free Consultation →
              </Link>
              <a
                href="https://wa.me/919967622281?text=Hi%20AL.Sana%20Interior%2C%20I%20would%20like%20to%20book%20a%20free%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                💬 WhatsApp Us
              </a>
            </div>
            <p
              className="mt-10 text-[0.6rem] tracking-[0.32em] uppercase"
              style={{ fontFamily: fb, color: w20, fontWeight: 300 }}
            >
              GST Registered · 5+ Years · 2700+ Customers · 5-Year Warranty
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

