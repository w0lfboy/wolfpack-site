import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "FAQ — Compliance Testing & Penetration Testing | Wolfpack Security LLC",
  description:
    "Answers to common questions about penetration testing timelines, SOC 2 audit costs, CMMC Level 1 vs Level 2, vulnerability scans vs penetration tests, and compliance testing for small businesses.",
  openGraph: {
    title: "FAQ — Wolfpack Security LLC",
    description:
      "Answers to common questions about compliance testing, penetration testing, CMMC, SOC 2, and cybersecurity consulting.",
  },
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

export default function FAQLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
