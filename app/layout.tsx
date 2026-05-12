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
    "DFARS compliance",
    "NYDFS cybersecurity regulation",
    "HITRUST certification",
    "cybersecurity for defense contractors",
    "cybersecurity for healthcare",
    "cybersecurity for financial services",
    "SOC 2 Type II readiness",
    "security policy development",
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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does a penetration test take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most penetration testing engagements take one to three weeks of active testing, depending on the scope. A focused web application test can be completed in five to seven business days. A full network penetration test typically takes two to three weeks.",
        },
      },
      {
        "@type": "Question",
        name: "What's the difference between CMMC Level 1 and Level 2?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CMMC Level 1 covers 17 basic safeguarding practices and requires annual self-assessment. Level 2 maps to all 110 controls in NIST 800-171 and requires either self-assessment or third-party assessment by a C3PAO, depending on CUI sensitivity. Most defense subcontractors handling CUI will need Level 2.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a SOC 2 audit cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Readiness preparation typically runs $15,000 to $50,000, and the audit itself adds another $20,000 to $60,000. Total cost depends on your organization's size, complexity, and current security maturity.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need penetration testing for compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many frameworks either require or strongly recommend it. SOC 2 expects regular vulnerability management and testing. CMMC Level 2 requires vulnerability scanning. HIPAA requires regular technical evaluation. NYDFS explicitly requires annual penetration testing.",
        },
      },
      {
        "@type": "Question",
        name: "What's the difference between a vulnerability scan and a penetration test?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A vulnerability scan is an automated tool that identifies known weaknesses. A penetration test is a hands-on, manual exercise where a security professional actively attempts to exploit vulnerabilities, chain findings together, and demonstrate real-world impact.",
        },
      },
      {
        "@type": "Question",
        name: "We're a small company. Is compliance testing realistic for us?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We work with organizations from 10 to 500 people. The scope of a compliance testing engagement scales to your size — a 20-person startup doesn't need the same controls documentation as a 300-person enterprise.",
        },
      },
      {
        "@type": "Question",
        name: "What happens after we get our SOC 2 report or CMMC certification?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Certification is the starting line, not the finish. We offer ongoing compliance management — quarterly reviews, evidence maintenance, policy updates, and reassessment preparation — so you stay compliant year over year.",
        },
      },
    ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
