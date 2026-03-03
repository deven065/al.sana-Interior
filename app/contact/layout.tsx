import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Consultation | AL.Sana Interior",
  description:
    "Apply for a premium interior consultation with AL.Sana Interior through a multi-step qualification form.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

