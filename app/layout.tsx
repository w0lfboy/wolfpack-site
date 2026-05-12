import type { Metadata } from "next";
import { Crimson_Pro, Outfit, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://wolfpacksecurity.org";

export const metadata: Metadata = {
  title:
    "Wolfpack Security LLC — Compliance Testing & Penetration Testing Consulting",
  description:
    "Cybersecurity consulting firm specializing in compliance testing, penetration testing, CMMC readiness, and risk assessments. We tailor every engagement to your organization's size and regulatory requirements. Based in Harrisonburg, Virginia — serving clients nationwide.",
  metadataBase: new URL(siteUrl),
  keywords: [
    "compliance testing",
    "penetration testing",
    "cybersecurity consulting",
    "CMMC compliance",
    "CMMC readiness",
    "NIST 800-171 assessment",
    "SOC 2 compliance",
    "SOC 2 audit preparation",
    "HIPAA compliance testing",
    "ISO 27001 certification",
    "security risk assessment",
    "vendor risk management",
    "vulnerability assessment",
    "network penetration testing",
    "application penetration testing",
    "defense contractor cybersecurity",
    "cybersecurity consultant Harrisonburg Virginia",
    "third party risk management",
    "security compliance consultant",
    "C3PAO assessment preparation",
  ],
  authors: [{ name: "Wolfpack Security LLC" }],
  openGraph: {
    title:
      "Wolfpack Security LLC — Compliance Testing & Penetration Testing",
    description:
      "Cybersecurity consulting tailored to your organization. Compliance testing, penetration testing, CMMC readiness, and risk assessments — scoped to fit your size, industry, and regulatory requirements.",
    url: siteUrl,
    siteName: "Wolfpack Security LLC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title:
      "Wolfpack Security LLC — Compliance Testing & Penetration Testing",
    description:
      "Cybersecurity consulting tailored to your organization. Compliance testing, penetration testing, CMMC readiness, and risk assessments.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Wolfpack Security LLC",
    description:
      "Cybersecurity consulting firm specializing in compliance testing, penetration testing, CMMC readiness, and risk assessments. Engagements tailored to your organization's size and regulatory requirements.",
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Harrisonburg",
      addressRegion: "VA",
      addressCountry: "US",
    },
    areaServed: "US",
    serviceType: [
      "Compliance Testing",
      "Penetration Testing",
      "CMMC Compliance Readiness",
      "Security Risk Assessment",
      "NIST 800-171 Assessment",
      "SOC 2 Audit Preparation",
      "Vendor Risk Management",
      "Cybersecurity Consulting",
    ],
    email: "info@wolfpacksecurity.org",
  };

  return (
    <html
      lang="en"
      className={`${crimsonPro.variable} ${outfit.variable} ${ibmPlexMono.variable} antialiased`}
    >
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
