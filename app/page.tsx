"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Process />
        <Industries />
        <AboutUs />
        <WhyWolfpack />
        <Frameworks />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

/* ─── Scroll Animation ─── */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("in-view");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

/* ─── Logo ─── */

function WolfMark({ size = 32 }: { size?: number }) {
  return (
    <img
      src="/wolfpack-mark.png"
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className="block object-contain"
    />
  );
}

/* ─── Navigation ─── */

function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-stone-800/60 bg-stone-950/90 backdrop-blur-md"
      aria-label="Primary navigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3 text-stone-100">
          <WolfMark size={32} />
          <div className="leading-none">
            <span className="block font-mono text-sm font-medium tracking-widest text-stone-100">
              WOLFPACK
            </span>
            <span className="block font-mono text-[10px] tracking-[0.2em] text-stone-500">
              SECURITY LLC
            </span>
          </div>
        </a>
        <a
          href="#contact"
          className="border border-accent/40 bg-accent/10 px-5 py-2 font-mono text-xs tracking-wider text-accent transition-colors hover:border-accent hover:bg-accent/20"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */

function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center pt-20">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="mb-6 font-mono text-xs tracking-[0.25em] text-stone-500">
            Harrisonburg, Virginia
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="max-w-4xl font-serif text-4xl leading-[1.15] font-light text-stone-200 md:text-5xl lg:text-6xl">
            Your business depends on trust.{" "}
            <span className="font-semibold text-stone-100">
              We help you prove it.
            </span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-400 md:text-xl">
            Cybersecurity consulting, compliance testing, and penetration testing
            for organizations that need to demonstrate their security
            posture&nbsp;&mdash; tailored to your size, your industry, and the
            frameworks your stakeholders require.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── The Problem ─── */

function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-stone-500">
            The Problem
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="max-w-3xl font-serif text-3xl leading-snug font-light text-stone-200 md:text-4xl">
            Every contract, every carrier, every partner is asking the same
            question:{" "}
            <span className="text-accent">
              can we trust you with our data?
            </span>
          </h2>
        </Reveal>
        <div className="mt-12 grid max-w-3xl gap-6">
          <Reveal delay={150}>
            <p className="text-base leading-relaxed text-stone-400 md:text-lg">
              You&rsquo;re a defense subcontractor being told you need CMMC
              certification or you&rsquo;ll lose your contract. You&rsquo;re an
              insurtech startup trying to close your first carrier deal but you
              can&rsquo;t pass their security questionnaire. You&rsquo;re a
              growing company that just got a 40-page vendor risk assessment from
              your biggest customer and you don&rsquo;t know where to start.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-base leading-relaxed text-stone-400 md:text-lg">
              The big consultancies want $150,000 and six months. You need clear
              answers, a practical plan, and someone who actually understands what
              the other side of the table is looking for.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── What We Do ─── */

const services = [
  {
    num: "01",
    title: "Compliance Testing & Risk Assessments",
    description:
      "Comprehensive compliance testing of your security controls against NIST 800-171, SOC 2, HIPAA, ISO 27001, or whichever framework your customers and contracts require. Whether you\u2019re a 20-person startup or a 500-person enterprise, we scope the assessment to fit\u00A0\u2014 and deliver a prioritized remediation roadmap, not a 200-page document that collects dust.",
  },
  {
    num: "02",
    title: "Penetration Testing",
    description:
      "Real-world penetration testing and attack simulation against your infrastructure, applications, and networks. We scope every engagement to your environment\u00A0\u2014 from a focused web application test for an early-stage company to a full-spectrum red team exercise for a mature organization. You get findings your leadership can act on, not just a vulnerability scanner export.",
  },
  {
    num: "03",
    title: "CMMC Compliance Readiness",
    description:
      "For defense contractors facing CMMC Level 1 or Level 2 requirements: gap assessments against all 110 NIST 800-171 controls, System Security Plan development, policy documentation, and preparation for your C3PAO assessment. We right-size the effort to your contract scope and current maturity\u00A0\u2014 no unnecessary overhead.",
  },
  {
    num: "04",
    title: "Vendor Risk Preparation",
    description:
      "If you\u2019re on the receiving end of a vendor risk questionnaire\u00A0\u2014 from a carrier, a prime contractor, or an enterprise customer\u00A0\u2014 we help you understand what they\u2019re really asking, prepare your evidence, and present a security posture that earns confidence. We\u2019ve seen hundreds of these from the other side of the table.",
  },
  {
    num: "05",
    title: "Ongoing Compliance Management",
    description:
      "Security isn\u2019t a one-time project. Quarterly reviews, policy updates, evidence maintenance, and reassessment preparation to keep you compliant year over year\u00A0\u2014 not just on certification day. Engagement cadence scales to your needs, from lightweight check-ins to embedded advisory.",
  },
];

function Services() {
  return (
    <section id="services" className="bg-stone-900/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-stone-500">
            What We Do
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mb-16 max-w-3xl font-serif text-3xl leading-snug font-light text-stone-200 md:text-4xl">
            We meet you where you are&nbsp;&mdash; then build a plan to get you
            where you need to be.
          </h2>
        </Reveal>
        <div className="grid gap-12 md:gap-16">
          {services.map((s, i) => (
            <Reveal key={s.num} delay={i * 80}>
              <article className="grid gap-4 border-t border-stone-800 pt-8 md:grid-cols-[4rem_1fr] md:gap-8">
                <span className="font-mono text-sm text-stone-600">
                  {s.num}
                </span>
                <div>
                  <h3 className="mb-3 font-serif text-xl font-medium text-stone-200 md:text-2xl">
                    {s.title}
                  </h3>
                  <p className="max-w-2xl text-base leading-relaxed text-stone-400">
                    {s.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How We Work ─── */

const steps = [
  {
    num: "01",
    title: "Discovery",
    description:
      "We start with a conversation. We learn about your business, your contracts, your regulatory obligations, and the security questions you\u2019re being asked. No forms, no sales pitch\u00A0\u2014 just a direct conversation about what you\u2019re facing.",
  },
  {
    num: "02",
    title: "Scoping & Assessment",
    description:
      "We define the engagement scope based on your compliance framework, environment size, and timeline. Then we conduct a thorough assessment\u00A0\u2014 whether that\u2019s compliance testing against NIST 800-171, a penetration test of your network, or a full gap analysis across multiple frameworks.",
  },
  {
    num: "03",
    title: "Findings & Roadmap",
    description:
      "You receive a clear, prioritized report of findings with a remediation roadmap ordered by risk and effort. We walk your team through every finding in plain language so leadership and technical staff both understand the path forward.",
  },
  {
    num: "04",
    title: "Remediation Support",
    description:
      "We don\u2019t hand you a report and disappear. We work alongside your team to close gaps\u00A0\u2014 writing policies, configuring controls, preparing evidence packages, and validating fixes. The depth of support scales to what your organization needs.",
  },
  {
    num: "05",
    title: "Certification & Ongoing",
    description:
      "When you\u2019re ready for your formal audit or assessment, we prepare you for the assessor. After certification, we offer ongoing compliance management to keep your security posture current\u00A0\u2014 quarterly reviews, evidence maintenance, and reassessment prep.",
  },
];

function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-stone-500">
            How We Work
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mb-16 max-w-3xl font-serif text-3xl leading-snug font-light text-stone-200 md:text-4xl">
            A clear process from first conversation to{" "}
            <span className="text-accent">certification day and beyond.</span>
          </h2>
        </Reveal>
        <div className="relative grid gap-0">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 80}>
              <div className="grid gap-4 border-l border-stone-800 py-8 pl-8 md:grid-cols-[4rem_1fr] md:gap-8 md:py-10 md:pl-12">
                <div className="relative">
                  <span className="absolute -left-[calc(2rem+5.5px)] top-0 block h-3 w-3 border-2 border-accent bg-stone-950 md:-left-[calc(3rem+5.5px)]" />
                  <span className="font-mono text-sm text-stone-600">
                    {s.num}
                  </span>
                </div>
                <div>
                  <h3 className="mb-3 font-serif text-xl font-medium text-stone-200">
                    {s.title}
                  </h3>
                  <p className="max-w-2xl text-base leading-relaxed text-stone-400">
                    {s.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Industries We Serve ─── */

const industries = [
  {
    title: "Defense & Government Contractors",
    frameworks: "CMMC 2.0, NIST 800-171, DFARS 252.204-7012",
    description:
      "Defense subcontractors and government suppliers facing CMMC certification requirements or DFARS compliance obligations. We understand the defense industrial base procurement process and prepare you for C3PAO assessments.",
  },
  {
    title: "Financial Services & Insurtech",
    frameworks: "SOC 2, NYDFS 23 NYCRR 500, ISO 27001",
    description:
      "Banks, fintechs, insurance carriers, and insurtechs navigating SOC 2 audits, NYDFS cybersecurity regulations, and carrier security questionnaires. We help you pass the due diligence that closes deals.",
  },
  {
    title: "Healthcare & Life Sciences",
    frameworks: "HIPAA, HITRUST, SOC 2",
    description:
      "Healthcare providers, health IT companies, and life sciences organizations that handle protected health information. Compliance testing and risk assessments aligned to HIPAA Security Rule requirements.",
  },
  {
    title: "SaaS & Technology",
    frameworks: "SOC 2, ISO 27001, SOC 2 + HIPAA",
    description:
      "Software companies whose enterprise customers require SOC 2 reports or ISO 27001 certification before signing. We scope the audit to your product architecture and help you build compliance into your development lifecycle.",
  },
  {
    title: "Manufacturing & Critical Infrastructure",
    frameworks: "NIST CSF, CMMC 2.0, ICS/OT Security",
    description:
      "Manufacturers in the defense supply chain or critical infrastructure sectors facing cybersecurity requirements from prime contractors, regulators, or insurance carriers. Practical security programs for operational environments.",
  },
  {
    title: "Professional Services & Consulting",
    frameworks: "SOC 2, ISO 27001, Vendor Risk Questionnaires",
    description:
      "Law firms, accounting practices, and consulting companies handling sensitive client data. We prepare you for the vendor risk assessments your clients are increasingly requiring before engagement.",
  },
];

function Industries() {
  return (
    <section id="industries" className="bg-stone-900/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-stone-500">
            Industries We Serve
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mb-16 max-w-3xl font-serif text-3xl leading-snug font-light text-stone-200 md:text-4xl">
            Security looks different in every industry.{" "}
            <span className="text-accent">We know the difference.</span>
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={i * 60}>
              <div className="flex h-full flex-col border border-stone-800 bg-stone-900/30 p-6 transition-colors hover:border-stone-700">
                <h3 className="mb-2 font-serif text-lg font-medium text-stone-200">
                  {ind.title}
                </h3>
                <p className="mb-4 font-mono text-[11px] tracking-wider text-accent">
                  {ind.frameworks}
                </p>
                <p className="text-sm leading-relaxed text-stone-400">
                  {ind.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── About Us ─── */

function AboutUs() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-stone-500">
            About Us
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mb-12 max-w-3xl font-serif text-3xl leading-snug font-light text-stone-200 md:text-4xl">
            A consultancy built around one idea:{" "}
            <span className="text-accent">
              security should fit the organization, not the other way around.
            </span>
          </h2>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal delay={150}>
            <div className="border border-stone-800 bg-stone-900/50 p-8 md:p-10">
              <p className="mb-4 font-serif text-lg font-medium text-stone-200">
                How we work
              </p>
              <p className="text-base leading-relaxed text-stone-400">
                Wolfpack Security is a cybersecurity consulting firm that
                specializes in compliance testing, penetration testing, and risk
                management for organizations across the defense industrial base,
                financial services, healthcare, and technology sectors. We scope
                every engagement to the client&rsquo;s size, maturity, and
                regulatory requirements&nbsp;&mdash; because a 30-person defense
                subcontractor and a 300-person insurtech company face very
                different challenges, even when the compliance framework is the
                same.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="border border-stone-800 bg-stone-900/50 p-8 md:p-10">
              <p className="mb-4 font-serif text-lg font-medium text-stone-200">
                What sets us apart
              </p>
              <p className="text-base leading-relaxed text-stone-400">
                Our team brings direct experience from the assessor side of
                third-party risk management&nbsp;&mdash; evaluating vendor
                security posture for enterprise buyers, government agencies, and
                defense organizations. That perspective means we know what
                auditors and procurement teams actually look for, and we prepare
                our clients accordingly. No guesswork, no generic
                checklists&nbsp;&mdash; just practical guidance from people who
                have sat on both sides of the table.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={250}>
          <div className="mt-8 border border-stone-800 bg-stone-900/30 p-8 md:p-10">
            <p className="mb-4 font-serif text-lg font-medium text-stone-200">
              Right-sized for you
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <p className="mb-2 font-mono text-xs tracking-[0.25em] text-accent">
                  Early stage
                </p>
                <p className="text-sm leading-relaxed text-stone-400">
                  Startups and small teams facing their first security
                  questionnaire or compliance requirement. We help you build a
                  security foundation that scales&nbsp;&mdash; without
                  overengineering for where you are today.
                </p>
              </div>
              <div>
                <p className="mb-2 font-mono text-xs tracking-[0.25em] text-accent">
                  Growth
                </p>
                <p className="text-sm leading-relaxed text-stone-400">
                  Mid-market companies with real compliance obligations and
                  growing customer expectations. We close the gaps between where
                  you are and where your contracts require you to be.
                </p>
              </div>
              <div>
                <p className="mb-2 font-mono text-xs tracking-[0.25em] text-accent">
                  Established
                </p>
                <p className="text-sm leading-relaxed text-stone-400">
                  Mature organizations that need specialized penetration testing,
                  ongoing compliance management, or preparation for formal
                  certification audits like CMMC or SOC 2.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Why Wolfpack ─── */

const differentiators = [
  {
    title: "Assessor-side perspective",
    body: "We\u2019ve evaluated vendor security posture for Fortune 100 buyers and defense organizations. We know what the other side looks for.",
  },
  {
    title: "Right-sized engagements",
    body: "Enterprise-grade compliance testing and penetration testing expertise, scoped to fit your organization\u2019s size and budget.",
  },
  {
    title: "Outcomes over artifacts",
    body: "We stay through remediation and certification\u00A0\u2014 not just the report. Your compliance program should work, not just exist.",
  },
  {
    title: "Valley roots, national reach",
    body: "Based in Harrisonburg, VA. Serving the defense industrial corridor and organizations nationwide.",
  },
];

function WhyWolfpack() {
  return (
    <section id="why" className="bg-stone-900/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-stone-500">
            Why Wolfpack
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mb-16 max-w-3xl font-serif text-3xl leading-snug font-light text-stone-200 md:text-4xl">
            We know what the other side of the table is looking
            for&nbsp;&mdash;{" "}
            <span className="text-accent">
              because we&rsquo;ve sat there.
            </span>
          </h2>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {differentiators.map((d, i) => (
            <Reveal key={d.title} delay={i * 80}>
              <div className="h-full border border-stone-800 bg-stone-900/30 p-6 transition-colors hover:border-stone-700">
                <p className="mb-2 font-serif text-lg font-medium text-stone-200">
                  {d.title}
                </p>
                <p className="text-sm leading-relaxed text-stone-400">
                  {d.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Compliance Frameworks ─── */

const frameworks = [
  {
    name: "NIST 800-171",
    description:
      "The foundational cybersecurity standard for protecting Controlled Unclassified Information (CUI) in non-federal systems. Required for defense contractors and government suppliers. We assess all 110 security controls and build your System Security Plan.",
  },
  {
    name: "CMMC 2.0",
    description:
      "The Cybersecurity Maturity Model Certification required for Department of Defense contracts. We prepare you for Level 1 (basic safeguarding) or Level 2 (110 NIST 800-171 controls) assessments, including C3PAO readiness.",
  },
  {
    name: "SOC 2",
    description:
      "The trust services criteria framework that enterprise customers and partners require from SaaS vendors and service providers. We help you scope your audit, build controls, collect evidence, and prepare for your Type I or Type II examination.",
  },
  {
    name: "ISO 27001",
    description:
      "The international standard for information security management systems. We guide you through risk assessment, control implementation, documentation, and certification audit preparation for globally-recognized security compliance.",
  },
  {
    name: "HIPAA",
    description:
      "The Health Insurance Portability and Accountability Act Security Rule for organizations handling protected health information. We conduct HIPAA compliance testing, risk analyses, and remediation planning for healthcare providers and health IT companies.",
  },
  {
    name: "NYDFS",
    description:
      "The New York Department of Financial Services cybersecurity regulation (23 NYCRR 500) for financial services companies. We help you meet the evolving requirements for risk assessments, penetration testing, access controls, and incident response.",
  },
];

function Frameworks() {
  return (
    <section id="frameworks" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-stone-500">
            Compliance Frameworks
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mb-16 max-w-3xl font-serif text-3xl leading-snug font-light text-stone-200 md:text-4xl">
            Deep expertise across the frameworks{" "}
            <span className="text-accent">
              your customers and contracts require.
            </span>
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {frameworks.map((f, i) => (
            <Reveal key={f.name} delay={i * 60}>
              <div className="flex h-full flex-col border border-stone-800 bg-stone-900/30 p-6 transition-colors hover:border-stone-700">
                <p className="mb-3 font-mono text-sm font-medium tracking-wider text-accent">
                  {f.name}
                </p>
                <p className="text-sm leading-relaxed text-stone-400">
                  {f.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */

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

function FAQ() {
  return (
    <section id="faq" className="bg-stone-900/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-stone-500">
            Frequently Asked Questions
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mb-16 max-w-3xl font-serif text-3xl leading-snug font-light text-stone-200 md:text-4xl">
            Answers to the questions we hear most from prospective clients.
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="border-t border-stone-800">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Contact ─── */

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-xl">
          <Reveal>
            <div className="overflow-hidden border border-stone-800 bg-stone-900/50">
              <div className="h-1 bg-gradient-to-r from-accent-dark via-accent to-accent-dark" />
              <div className="p-8 text-center md:p-12">
                <div className="mx-auto mb-8 w-14">
                  <WolfMark size={56} />
                </div>
                <h2 className="mb-4 font-serif text-3xl font-light text-stone-200">
                  Let&rsquo;s talk about your security.
                </h2>
                <p className="mb-8 text-base leading-relaxed text-stone-400">
                  Initial consultations are free. We&rsquo;ll discuss your
                  compliance testing requirements, assess your current posture,
                  and outline a practical path forward&nbsp;&mdash; sized to your
                  organization.
                </p>
                <a
                  href="mailto:info@wolfpacksecurity.org"
                  className="inline-block border border-accent bg-accent/10 px-8 py-3 font-mono text-sm tracking-wider text-accent transition-colors hover:bg-accent/20"
                >
                  info@wolfpacksecurity.org
                </a>
                <p className="mt-6 font-mono text-xs tracking-wider text-stone-600">
                  Harrisonburg, VA &middot; Nationwide
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */

function Footer() {
  return (
    <footer className="border-t border-stone-800/60 py-8">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="font-mono text-xs tracking-wider text-stone-600">
          &copy; 2026 Wolfpack Security LLC
        </p>
      </div>
    </footer>
  );
}
