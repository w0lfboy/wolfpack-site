"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Services />
        <AboutUs />
        <WhyWolfpack />
        <Frameworks />
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

/* ─── Framework Bar ─── */

const frameworks = [
  "NIST 800-171",
  "CMMC 2.0",
  "SOC 2",
  "ISO 27001",
  "HIPAA",
  "NYDFS",
];

function Frameworks() {
  return (
    <section
      className="border-y border-stone-800/60 py-12"
      aria-label="Compliance frameworks"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-6">
        {frameworks.map((f) => (
          <span
            key={f}
            className="border border-stone-700/50 px-4 py-1.5 font-mono text-xs tracking-wider text-stone-500"
          >
            {f}
          </span>
        ))}
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
