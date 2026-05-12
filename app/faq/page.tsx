"use client";

import { useState } from "react";
import { Nav, Footer, Reveal } from "../components/shared";

const faqs = [
  {
    q: "How long does a penetration test take?",
    a: "Most penetration testing engagements take one to three weeks of active testing, depending on the scope. A focused web application test for a single product can be completed in five to seven business days. A full network penetration test covering internal and external infrastructure typically takes two to three weeks. We define the timeline during scoping so there are no surprises.",
  },
  {
    q: "What\u2019s the difference between CMMC Level 1 and Level 2?",
    a: "CMMC Level 1 covers 17 basic safeguarding practices based on FAR 52.204-21 and requires annual self-assessment. Level 2 maps to all 110 controls in NIST 800-171 and requires either self-assessment or third-party assessment by a C3PAO, depending on the sensitivity of the CUI you handle. Most defense subcontractors handling CUI will need Level 2.",
  },
  {
    q: "How much does a SOC 2 audit cost?",
    a: "Total cost depends on your organization\u2019s size, complexity, and current security maturity. Readiness preparation typically runs $15,000 to $50,000, and the audit itself (conducted by a licensed CPA firm) adds another $20,000 to $60,000. We scope our readiness engagements to fit your budget and existing controls\u00A0\u2014 you don\u2019t pay to build what you\u2019ve already built.",
  },
  {
    q: "Do I need penetration testing for compliance?",
    a: "Many frameworks either require or strongly recommend it. SOC 2 Trust Services Criteria expects regular vulnerability management and testing. CMMC Level 2 requires vulnerability scanning and can benefit from penetration testing during assessment preparation. HIPAA requires regular technical evaluation of security controls. NYDFS explicitly requires annual penetration testing. We help you determine what\u2019s required for your specific compliance obligations.",
  },
  {
    q: "What\u2019s the difference between a vulnerability scan and a penetration test?",
    a: "A vulnerability scan is an automated tool that identifies known weaknesses in your systems. A penetration test is a hands-on, manual exercise where a security professional actively attempts to exploit vulnerabilities, chain findings together, and demonstrate real-world impact. Scans find known issues. Penetration testing finds what\u2019s actually exploitable and how far an attacker could get.",
  },
  {
    q: "We\u2019re a small company. Is compliance testing even realistic for us?",
    a: "Yes. We work with organizations from 10 to 500 people. The scope of a compliance testing engagement scales to your size\u00A0\u2014 a 20-person startup doesn\u2019t need the same controls documentation as a 300-person enterprise. We help you build a compliance program that\u2019s right-sized for where you are today and designed to grow with you.",
  },
  {
    q: "What happens after we get our SOC 2 report or CMMC certification?",
    a: "Certification is the starting line, not the finish. SOC 2 Type II requires ongoing evidence collection throughout the audit period. CMMC requires continuous compliance. We offer ongoing compliance management\u00A0\u2014 quarterly reviews, evidence maintenance, policy updates, and reassessment preparation\u00A0\u2014 so you stay compliant year over year.",
  },
  {
    q: "How do you handle vendor risk questionnaires?",
    a: "We review the questionnaire with you, help you understand what the assessor is really looking for behind each question, prepare your responses with appropriate evidence, and identify any gaps that need to be addressed before submission. We\u2019ve seen these from both sides of the table\u00A0\u2014 as the vendor responding and as the team evaluating vendor responses.",
  },
  {
    q: "Can you help with security policies and documentation?",
    a: "Yes. Policy development is a core part of most compliance engagements. We write security policies, procedures, and plans\u00A0\u2014 including System Security Plans for CMMC, information security policies for SOC 2 and ISO 27001, and incident response plans required across most frameworks. Every document is tailored to your actual operations, not boilerplate.",
  },
  {
    q: "What does the initial consultation look like?",
    a: "A 30-minute conversation. We learn about your business, your compliance requirements, and the specific challenge you\u2019re facing. You\u2019ll walk away with a clear understanding of what\u2019s involved, a realistic timeline, and a sense of scope\u00A0\u2014 whether or not you decide to work with us. No cost, no obligation.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-stone-800">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 py-6 text-left transition-colors hover:text-stone-100"
        aria-expanded={open}
      >
        <span className="font-serif text-lg font-medium text-stone-200">
          {q}
        </span>
        <span
          className="mt-1 flex-shrink-0 font-mono text-sm text-stone-600 transition-transform"
          style={{ transform: open ? "rotate(45deg)" : "none" }}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.2,0,0,1)]"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-6 max-w-3xl text-base leading-relaxed text-stone-400">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <p className="mb-4 font-mono text-xs tracking-[0.25em] text-stone-500">
                Frequently Asked Questions
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mb-16 max-w-3xl font-serif text-4xl leading-snug font-light text-stone-200 md:text-5xl">
                Answers to the questions we hear most about compliance testing
                and penetration testing.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <div className="border-t border-stone-800">
                {faqs.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-16 border border-stone-800 bg-stone-900/50 p-8 md:p-10">
                <p className="mb-4 font-serif text-xl font-medium text-stone-200">
                  Have a question that isn&rsquo;t listed here?
                </p>
                <p className="mb-6 text-base leading-relaxed text-stone-400">
                  Initial consultations are free. We&rsquo;re happy to walk
                  through your specific situation and compliance requirements.
                </p>
                <a
                  href="mailto:info@wolfpacksecurity.org"
                  className="inline-block border border-accent bg-accent/10 px-8 py-3 font-mono text-sm tracking-wider text-accent transition-colors hover:bg-accent/20"
                >
                  info@wolfpacksecurity.org
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
