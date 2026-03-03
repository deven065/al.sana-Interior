import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import SiteChrome from "./components/site-chrome";
import ScrollReveal from "./components/scroll-reveal";
import CustomCursor from "./components/custom-cursor";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets:  ["latin"],
  variable: "--font-playfair",
  display:  "swap",
  weight:   ["300", "400", "500", "600", "700"],
  style:    ["normal", "italic"],
});

const jost = Jost({
  subsets:  ["latin"],
  variable: "--font-dm-sans",
  display:  "swap",
  weight:   ["200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title:       "AL.Sana Interior | Luxury Interior Design Mumbai",
  description: "Premium interior design studio in Mumbai. 2700+ happy customers. 24+ services. 4.6★ on Google. Book your free consultation today.",
  keywords:    "luxury interior design Mumbai, interior designer Mumbai, 2BHK interior Mumbai, modular kitchen Mumbai, AL Sana Interior",
  openGraph: {
    title:       "AL.Sana Interior | Luxury Interior Design Mumbai",
    description: "Transforming Mumbai homes into premium living spaces. 2700+ happy customers. 4.6★ Google rating.",
    type:        "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="antialiased">
        <CustomCursor />
        <ScrollReveal />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}

