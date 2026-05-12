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
  title: "Wolfpack Security LLC — Cybersecurity Consulting",
  description:
    "Cybersecurity consulting for organizations that need to demonstrate their security posture. CMMC readiness, penetration testing, risk assessments, and compliance management. Based in Harrisonburg, Virginia.",
  metadataBase: new URL(siteUrl),
  keywords: [
    "cybersecurity consulting",
    "CMMC compliance",
    "penetration testing",
    "NIST 800-171",
    "SOC 2",
    "vendor risk management",
    "Harrisonburg Virginia",
    "defense contractor security",
    "security assessment",
  ],
  authors: [{ name: "Wolfpack Security LLC" }],
  openGraph: {
    title: "Wolfpack Security LLC — Cybersecurity Consulting",
    description:
      "Cybersecurity consulting for organizations that need to demonstrate their security posture to the people who matter.",
    url: siteUrl,
    siteName: "Wolfpack Security LLC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Wolfpack Security LLC — Cybersecurity Consulting",
    description:
      "Cybersecurity consulting for organizations that need to demonstrate their security posture to the people who matter.",
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
      "Cybersecurity consulting for organizations that need to demonstrate their security posture.",
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Harrisonburg",
      addressRegion: "VA",
      addressCountry: "US",
    },
    areaServed: "US",
    serviceType: [
      "Cybersecurity Consulting",
      "CMMC Compliance",
      "Penetration Testing",
      "Security Assessments",
      "Vendor Risk Management",
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
