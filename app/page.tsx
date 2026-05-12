export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Services />
        <WhyWolfpack />
        <Frameworks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

/* ─── Logo ─── */

function ShieldLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 2L4 8v8c0 7.73 5.12 14.95 12 16 6.88-1.05 12-8.27 12-16V8L16 2z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M11 16l4 4 7-8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
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
          <ShieldLogo className="h-8 w-8 text-accent" />
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
        <p className="mb-6 font-mono text-xs tracking-[0.25em] text-stone-500">
          Harrisonburg, Virginia
        </p>
        <h1 className="max-w-4xl font-serif text-4xl leading-[1.15] font-light text-stone-200 md:text-5xl lg:text-6xl">
          Your business depends on trust.{" "}
          <span className="font-semibold text-stone-100">
            We help you prove it.
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-400 md:text-xl">
          Cybersecurity consulting for organizations that need to demonstrate
          their security posture to the people who matter&nbsp;&mdash; customers,
          carriers, auditors, and the Department of Defense.
        </p>
      </div>
    </section>
  );
}

/* ─── The Problem ─── */

function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 font-mono text-xs tracking-[0.25em] text-stone-500">
          The Problem
        </p>
        <h2 className="max-w-3xl font-serif text-3xl leading-snug font-light text-stone-200 md:text-4xl">
          Every contract, every carrier, every partner is asking the same
          question:{" "}
          <span className="text-accent">
            can we trust you with our data?
          </span>
        </h2>
        <div className="mt-12 grid max-w-3xl gap-6">
          <p className="text-base leading-relaxed text-stone-400 md:text-lg">
            You&rsquo;re a defense subcontractor being told you need CMMC
            certification or you&rsquo;ll lose your contract. You&rsquo;re an
            insurtech startup trying to close your first carrier deal but you
            can&rsquo;t pass their security questionnaire. You&rsquo;re a
            growing company that just got a 40-page vendor risk assessment from
            your biggest customer and you don&rsquo;t know where to start.
          </p>
          <p className="text-base leading-relaxed text-stone-400 md:text-lg">
            The big consultancies want $150,000 and six months. You need clear
            answers, a practical plan, and someone who actually understands what
            the other side of the table is looking for.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── What We Do ─── */

const services = [
  {
    num: "01",
    title: "Security & Risk Assessments",
    description:
      "Comprehensive evaluation of your security controls against NIST 800-171, SOC 2, HIPAA, ISO 27001, or whichever framework your customers and contracts require. You get a prioritized findings report with a clear remediation roadmap\u00A0\u2014 not a 200-page document that collects dust.",
  },
  {
    num: "02",
    title: "Penetration Testing",
    description:
      "Real-world attack simulation against your infrastructure, applications, and networks. We find what\u2019s exploitable before a threat actor does, and we explain the business impact in language your leadership can act on.",
  },
  {
    num: "03",
    title: "CMMC Compliance Readiness",
    description:
      "For defense contractors facing CMMC Level 1 or Level 2 requirements: gap assessments against all 110 NIST 800-171 controls, System Security Plan development, policy documentation, and preparation for your C3PAO assessment. We get you audit-ready.",
  },
  {
    num: "04",
    title: "Vendor Risk Preparation",
    description:
      "If you\u2019re on the receiving end of a vendor risk questionnaire\u00A0\u2014 from a carrier, a prime contractor, or an enterprise customer\u00A0\u2014 we help you understand what they\u2019re really asking, prepare your evidence, and present a security posture that earns confidence.",
  },
  {
    num: "05",
    title: "Ongoing Compliance Management",
    description:
      "Security isn\u2019t a one-time project. Quarterly reviews, policy updates, evidence maintenance, and reassessment preparation to keep you compliant year over year\u00A0\u2014 not just on certification day.",
  },
];

function Services() {
  return (
    <section id="services" className="bg-stone-900/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 font-mono text-xs tracking-[0.25em] text-stone-500">
          What We Do
        </p>
        <h2 className="mb-16 max-w-3xl font-serif text-3xl leading-snug font-light text-stone-200 md:text-4xl">
          We assess where you are, build a plan to close the gaps, and stay with
          you until the job is done.
        </h2>
        <div className="grid gap-12 md:gap-16">
          {services.map((s) => (
            <article
              key={s.num}
              className="grid gap-4 border-t border-stone-800 pt-8 md:grid-cols-[4rem_1fr] md:gap-8"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Wolfpack ─── */

const differentiators = [
  {
    title: "Assessor-side perspective",
    body: "We build the tools that evaluate vendors. We know what they look for.",
  },
  {
    title: "Right-sized engagements",
    body: "Enterprise-grade expertise without the enterprise price tag.",
  },
  {
    title: "Outcomes over artifacts",
    body: "We stay through remediation and certification\u00A0\u2014 not just the report.",
  },
  {
    title: "Valley roots, national reach",
    body: "Based in Harrisonburg, VA. Serving the defense industrial corridor and beyond.",
  },
];

function WhyWolfpack() {
  return (
    <section id="why" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 font-mono text-xs tracking-[0.25em] text-stone-500">
          Why Wolfpack
        </p>
        <h2 className="mb-16 max-w-3xl font-serif text-3xl leading-snug font-light text-stone-200 md:text-4xl">
          We know what the other side of the table is looking for&nbsp;&mdash;{" "}
          <span className="text-accent">because we&rsquo;ve sat there.</span>
        </h2>

        {/* Founder card */}
        <div className="mb-16 border border-stone-800 bg-stone-900/50 p-8 md:p-12">
          <p className="mb-1 font-serif text-xl font-medium text-stone-200">
            Taylor Fletcher
          </p>
          <p className="mb-6 font-mono text-xs tracking-wider text-stone-500">
            Founder &amp; Principal Consultant
          </p>
          <p className="max-w-3xl text-base leading-relaxed text-stone-400">
            Taylor brings hands-on experience in cybersecurity product management
            and third-party risk management from BlueVoyant, where he works on
            the platform that Fortune 100 companies, government agencies, and
            defense organizations use to monitor and manage supply chain cyber
            risk. This dual perspective&nbsp;&mdash; understanding what assessors
            look for and what organizations need to do&nbsp;&mdash; gives
            Wolfpack clients an edge that generic security consultants
            can&rsquo;t match.
          </p>
        </div>

        {/* Differentiator cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {differentiators.map((d) => (
            <div
              key={d.title}
              className="border border-stone-800 bg-stone-900/30 p-6 transition-colors hover:border-stone-700"
            >
              <p className="mb-2 font-serif text-lg font-medium text-stone-200">
                {d.title}
              </p>
              <p className="text-sm leading-relaxed text-stone-400">
                {d.body}
              </p>
            </div>
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
          <div className="overflow-hidden border border-stone-800 bg-stone-900/50">
            <div className="h-1 bg-gradient-to-r from-accent-dark via-accent to-accent-dark" />
            <div className="p-8 text-center md:p-12">
              <ShieldLogo className="mx-auto mb-8 h-10 w-10 text-accent" />
              <h2 className="mb-4 font-serif text-3xl font-light text-stone-200">
                Let&rsquo;s talk about your security.
              </h2>
              <p className="mb-8 text-base leading-relaxed text-stone-400">
                Initial consultations are free. We&rsquo;ll discuss your
                compliance requirements, assess your current posture, and
                outline a practical path forward.
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
