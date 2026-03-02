"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/",             label: "Home"         },
  { href: "/about",        label: "About"        },
  { href: "/portfolio",    label: "Portfolio"    },
  { href: "/services",     label: "Services"     },
  { href: "/pricing",      label: "Pricing"      },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog",         label: "Blog"         },
  { href: "/contact",      label: "Contact"      },
];

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const gold = "#b8975a";
  const black = "#07060a";

  return (
    <>
      {/* ── SIDE RAILS (desktop only) ───────────────────────────────── */}
      {/* Left rail */}
      <div
        aria-hidden="true"
        className="hidden xl:block"
        style={{
          position:      "fixed",
          top:           0,
          left:          "1.75rem",
          width:         "1px",
          height:        "100vh",
          background:    "linear-gradient(to bottom, transparent 0%, rgba(184,151,90,0.18) 12%, rgba(184,151,90,0.18) 88%, transparent 100%)",
          zIndex:        5,
          pointerEvents: "none",
        }}
      />
      {/* Right rail */}
      <div
        aria-hidden="true"
        className="hidden xl:block"
        style={{
          position:      "fixed",
          top:           0,
          right:         "1.75rem",
          width:         "1px",
          height:        "100vh",
          background:    "linear-gradient(to bottom, transparent 0%, rgba(184,151,90,0.18) 12%, rgba(184,151,90,0.18) 88%, transparent 100%)",
          zIndex:        5,
          pointerEvents: "none",
        }}
      />

      {/* ── NAVBAR ─────────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
        style={{
          padding:        scrolled ? "0.9rem 0" : "1.75rem 0",
          background:     scrolled ? "rgba(7,6,10,0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)"         : "none",
          borderBottom:   scrolled
            ? "1px solid rgba(184,151,90,0.14)"
            : "1px solid transparent",
        }}
      >
        <div
          className="flex items-center justify-between"
          style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(1.5rem,5vw,4rem)" }}
        >
          {/* Logo */}
          <Link href="/" className="group flex flex-col leading-none select-none">
            <span
              className="text-[1.65rem] font-light tracking-[0.28em] transition-colors duration-300 group-hover:text-[#b8975a]"
              style={{ fontFamily: "var(--font-heading)", color: "#fafaf8" }}
            >
              AL.SANA
            </span>
            <span
              className="text-[0.55rem] tracking-[0.6em] uppercase mt-0.5"
              style={{ fontFamily: "var(--font-body)", color: gold, fontWeight: 400 }}
            >
              Interior
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-[0.63rem] tracking-[0.22em] uppercase font-normal transition-colors duration-300 group"
                style={{
                  fontFamily: "var(--font-body)",
                  color: pathname === link.href ? gold : "rgba(250,250,248,0.50)",
                }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-px transition-all duration-500"
                  style={{
                    background: gold,
                    width: pathname === link.href ? "100%" : "0%",
                  }}
                />
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-5">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 text-[#b8975a] transition-all duration-500 hover:bg-[#b8975a] hover:text-[#07060a] hover:border-[#b8975a]"
              style={{
                fontFamily:    "var(--font-body)",
                fontSize:      "0.63rem",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                fontWeight:    500,
                border:        `1px solid rgba(184,151,90,0.45)`,
                padding:       "0.6rem 1.4rem",
              }}
            >
              Free Consultation
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden relative z-50 flex flex-col justify-center gap-[5px] w-8 h-8"
            >
              <span
                className="block h-px bg-white transition-all duration-500 origin-center"
                style={{ width: "24px", transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none" }}
              />
              <span
                className="block h-px bg-white transition-all duration-300"
                style={{ width: "16px", opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block h-px bg-white transition-all duration-500 origin-center"
                style={{ width: "24px", transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none" }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE MENU ────────────────────────────────────────────── */}
      <div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-700"
        style={{
          background:    "rgba(7,6,10,0.98)",
          backdropFilter: "blur(24px)",
          opacity:       menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {/* Gold corner accents */}
        <div className="absolute top-0 left-0 w-28 h-28 border-t border-l" style={{ borderColor: "rgba(184,151,90,0.18)" }} />
        <div className="absolute bottom-0 right-0 w-28 h-28 border-b border-r" style={{ borderColor: "rgba(184,151,90,0.18)" }} />

        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-all duration-500"
              style={{
                fontFamily:      "var(--font-heading)",
                fontSize:        "clamp(1.8rem, 5vw, 2.4rem)",
                fontWeight:      300,
                letterSpacing:   "0.06em",
                color:           pathname === link.href ? gold : "rgba(250,250,248,0.65)",
                transitionDelay: `${i * 55}ms`,
                transform:       menuOpen ? "translateY(0)" : "translateY(22px)",
                opacity:         menuOpen ? 1 : 0,
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="mt-6 transition-all duration-500 hover:bg-[#b8975a] hover:text-[#07060a]"
            style={{
              fontFamily:      "var(--font-body)",
              fontSize:        "0.63rem",
              letterSpacing:   "0.32em",
              textTransform:   "uppercase",
              fontWeight:      500,
              color:           gold,
              border:          `1px solid rgba(184,151,90,0.45)`,
              padding:         "0.8rem 2.5rem",
              transitionDelay: `${navLinks.length * 55}ms`,
            }}
          >
            Free Consultation
          </Link>
        </nav>

        <div className="absolute bottom-10 flex items-center gap-6">
          <a
            href="tel:+919967622281"
            className="text-xs tracking-widest transition-colors hover:text-[#b8975a]"
            style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.28)" }}
          >
            +91 99676 22281
          </a>
          <span style={{ color: "rgba(250,250,248,0.15)" }}>|</span>
          <a
            href="mailto:hello@alsanainterior.com"
            className="text-xs tracking-widest transition-colors hover:text-[#b8975a]"
            style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.28)" }}
          >
            hello@alsanainterior.com
          </a>
        </div>
      </div>

      {/* ── MAIN ───────────────────────────────────────────────────── */}
      <main key={pathname} className="page-fade-in">{children}</main>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <footer style={{ background: "#050408", borderTop: "1px solid rgba(184,151,90,0.1)" }}>
        <div
          style={{ maxWidth: "1320px", margin: "0 auto", padding: "5rem clamp(1.5rem,5vw,4rem) 3rem" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-14">

            {/* Brand — 4 cols */}
            <div className="lg:col-span-4">
              <div className="mb-5">
                <div
                  className="text-2xl font-light tracking-[0.28em]"
                  style={{ fontFamily: "var(--font-heading)", color: "#fafaf8" }}
                >
                  AL.SANA
                </div>
                <div
                  className="text-[0.55rem] tracking-[0.6em] uppercase mt-1"
                  style={{ fontFamily: "var(--font-body)", color: gold, fontWeight: 400 }}
                >
                  Interior
                </div>
              </div>
              <p
                className="text-sm leading-relaxed mb-6 max-w-xs"
                style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.32)", fontWeight: 300 }}
              >
                Transforming Mumbai homes into premium living spaces. Designed with passion. Delivered with precision.
              </p>
              <div className="flex items-center gap-3 mb-5">
                <span style={{ color: gold, letterSpacing: "0.08em" }}>★★★★★</span>
                <span
                  className="text-xs"
                  style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.32)" }}
                >
                  4.6 · 86 Google Reviews
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["GST Registered", "5-Year Warranty", "Transparent Pricing"].map((b) => (
                  <span
                    key={b}
                    className="text-[0.58rem] tracking-wider px-2.5 py-1"
                    style={{
                      fontFamily:  "var(--font-body)",
                      color:       "rgba(250,250,248,0.28)",
                      border:      "1px solid rgba(184,151,90,0.18)",
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation — 2 cols */}
            <div className="lg:col-span-2">
              <h5
                className="text-[0.6rem] tracking-[0.38em] uppercase mb-6"
                style={{ fontFamily: "var(--font-body)", color: gold, fontWeight: 700 }}
              >
                Navigation
              </h5>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs tracking-wide transition-colors duration-300 hover:text-[#b8975a]"
                      style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.32)", fontWeight: 300 }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services — 3 cols */}
            <div className="lg:col-span-3">
              <h5
                className="text-[0.6rem] tracking-[0.38em] uppercase mb-6"
                style={{ fontFamily: "var(--font-body)", color: gold, fontWeight: 700 }}
              >
                Services
              </h5>
              <ul className="space-y-3">
                {[
                  "Luxury Residential",
                  "2BHK / 3BHK Interiors",
                  "Modular Kitchen",
                  "Bedroom Design",
                  "Commercial Interiors",
                  "Office Design",
                ].map((s) => (
                  <li key={s}>
                    <Link
                      href="/services"
                      className="text-xs tracking-wide transition-colors duration-300 hover:text-[#b8975a]"
                      style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.32)", fontWeight: 300 }}
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact — 3 cols */}
            <div className="lg:col-span-3">
              <h5
                className="text-[0.6rem] tracking-[0.38em] uppercase mb-6"
                style={{ fontFamily: "var(--font-body)", color: gold, fontWeight: 700 }}
              >
                Get In Touch
              </h5>
              <ul className="space-y-4">
                <li
                  className="text-xs leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.32)", fontWeight: 300 }}
                >
                  Mumbai, Maharashtra<br />India
                </li>
                <li>
                  <a
                    href="tel:+919967622281"
                    className="text-xs transition-colors duration-300 hover:text-[#b8975a]"
                    style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.32)", fontWeight: 300 }}
                  >
                    +91 99676 22281
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@alsanainterior.com"
                    className="text-xs transition-colors duration-300 hover:text-[#b8975a]"
                    style={{ fontFamily: "var(--font-body)", color: "rgba(250,250,248,0.32)", fontWeight: 300 }}
                  >
                    hello@alsanainterior.com
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-3 pt-1">
                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/919967622281?text=Hi%20AL.Sana%20Interior%2C%20I%27d%20like%20to%20discuss%20my%20interior%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 hover:scale-110"
                      style={{ background: "#25D366" }}
                    >
                      <svg viewBox="0 0 24 24" fill="white" style={{ width: "1.1rem", height: "1.1rem" }}>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/alsana_interior"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 hover:scale-110"
                      style={{ background: "radial-gradient(circle at 30% 110%, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" }}
                    >
                      <svg viewBox="0 0 24 24" fill="white" style={{ width: "1.1rem", height: "1.1rem" }}>
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>

                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/alsanainterior"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 hover:scale-110"
                      style={{ background: "#1877F2" }}
                    >
                      <svg viewBox="0 0 24 24" fill="white" style={{ width: "1.1rem", height: "1.1rem" }}>
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
            style={{ borderTop: "1px solid rgba(184,151,90,0.07)" }}
          >
            <p
              className="text-[0.58rem] tracking-widest"
              style={{ fontFamily: "var(--font-body)", color: gold, fontWeight: 500 }}
            >
              © 2026 AL.Sana Interior. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
                <Link
                  key={item}
                  href="/contact"
                  className="text-[0.58rem] tracking-widest transition-colors duration-300 hover:text-[#d4b483]"
                  style={{ fontFamily: "var(--font-body)", color: gold, fontWeight: 600 }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Digital Signature */}
          <div className="text-center mt-6">
            <p
              className="text-[0.55rem] tracking-[0.28em] uppercase"
              style={{ fontFamily: "var(--font-body)", color: "rgba(184,151,90,0.35)", fontWeight: 300 }}
            >
              Designed &amp; Developed by{" "}
              <a
                href="https://devendigitallabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#b8975a]"
                style={{ color: "rgba(184,151,90,0.55)", fontWeight: 500 }}
              >
                Deven Digital Labs
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ───────────────────────────────────────── */}
      <a
        href="https://wa.me/919967622281?text=Hi%20AL.Sana%20Interior%2C%20I%27d%20like%20to%20discuss%20my%20interior%20project."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110"
          style={{
            background: "#25D366",
            boxShadow:  "0 8px 32px rgba(0,0,0,0.3)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 36px rgba(37,211,102,0.45)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.3)";
          }}
        >
          <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
      </a>

      {/* ── FLOATING CALL ──────────────────────────────────────────── */}
      <a
        href="tel:+919967622281"
        aria-label="Call us"
        className="fixed bottom-24 right-6 z-50 group"
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110"
          style={{
            background: gold,
            boxShadow:  "0 8px 32px rgba(0,0,0,0.3)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 36px rgba(184,151,90,0.45)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.3)";
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke={black} strokeWidth="2.2" className="w-5 h-5">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
        </div>
      </a>
    </>
  );
}
