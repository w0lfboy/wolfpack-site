import type { Metadata } from "next";
import { WolfMark } from "../../components/shared";
import { PrintButton } from "../PrintButton";

export const metadata: Metadata = {
  title: "Cost Proposal — Green Shield Risk Solutions | Wolfpack Security LLC",
  description:
    "Penetration testing cost proposal for the FY26-27 SOC 2 audit period.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  openGraph: { title: "Cost Proposal — Wolfpack Security LLC" },
};

/* Inverts the sheet to black-on-white for printing, so the browser's
   Save as PDF produces a document rather than a wall of ink. */
const printCss = `
@media print {
  nav, footer.site-footer { display: none !important; }
  html, body { background: #fff !important; color: #1C1917 !important; }
  .sheet { max-width: none !important; padding: 0 !important; }
  .sheet h1, .sheet h2, .sheet h3, .sheet .ink { color: #0C0A09 !important; }
  .sheet .quiet { color: #57534E !important; }
  .sheet .panel { background: #fff !important; }
  .sheet .lead-card { background: #fff !important; border-color: #8B3A2A !important; }
  .sheet .rule { border-color: #D6D3D1 !important; }
  .sheet section, .sheet .card { break-inside: avoid; }
  .sheet .mark { filter: invert(1); }
}
`;

const included = [
  {
    what: "External attack surface testing",
    detail: "All in-scope domains and internet-facing services.",
  },
  {
    what: "AWS account review",
    detail: "IAM, cross-account trust, data exposure, logging coverage.",
  },
  {
    what: "Authenticated application testing",
    detail: "As a standard user and as an admin.",
  },
  {
    what: "Reporting",
    detail:
      "Findings with impact and remediation steps. Scope statement naming your applications and your infrastructure.",
  },
  {
    what: "Retest and retest letter",
    detail:
      "One cycle against the findings you report as fixed. Signed letter for your auditor.",
  },
];

const separate = [
  {
    item: "Quarterly external vulnerability scans",
    fee: ["$350 / quarter", "$1,250 prepaid annually"],
  },
  { item: "Two-year term", fee: ["$5,600 / year"] },
  { item: "Three-year term", fee: ["$5,300 / year"] },
  { item: "Auth0 and Entra ID configuration review", fee: ["$600"] },
  { item: "Phishing campaign, up to 50 targets", fee: ["$900"] },
];

const timing = [
  {
    when: "DEC 7–18",
    what: "Testing window",
    detail: "Two weeks, remote.",
  },
  {
    when: "JAN 15",
    what: "Report delivered",
    detail: "Full report, executive summary and evidence.",
  },
  {
    when: "MAR 13",
    what: "Retest letter",
    detail: "Eighteen days before your period closes.",
  },
];

const team = [
  {
    name: "Taylor Fletcher",
    role: "CEO, Project Manager and Penetration Tester",
    certs: "CSM · CS · VMDR (QUALYS) · SECURITY+",
  },
  {
    name: "Rick Larabee",
    role: "Penetration Tester and Cloud Consultant",
    certs: "CISSP · OSCP",
  },
];

const eyebrow =
  "font-mono text-[11px] tracking-[0.25em] text-stone-500 mb-3.5";
const h2 = "font-serif text-2xl font-light leading-tight text-stone-200 sm:text-3xl";
const body = "max-w-[68ch] text-[14.5px] leading-relaxed text-stone-500 quiet";

export default function GreenShieldProposal() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: printCss }} />

      <main className="sheet mx-auto max-w-[920px] px-4 pb-20 sm:px-6">
        {/* ── Masthead ── */}
        <header className="rule flex flex-wrap items-start justify-between gap-5 border-b border-stone-800 pt-10 pb-8">
          <div className="flex min-w-0 items-center gap-3.5">
            <span className="mark block shrink-0">
              <WolfMark size={46} />
            </span>
            <div className="leading-tight">
              <span className="block font-mono text-xs font-medium tracking-[0.22em] text-stone-200">
                WOLFPACK
              </span>
              <span className="block font-mono text-xs tracking-[0.22em] text-stone-600">
                SECURITY LLC
              </span>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <div className="font-mono text-[11px] leading-7 tracking-wider text-stone-600 sm:text-right">
              <span className="block text-stone-500">Engagement</span>
              GSR-PENTEST-FY26-27
              <span className="mt-1 block text-stone-500">Issued</span>
              17 November 2026
            </div>
            <PrintButton />
          </div>
        </header>

        {/* ── Opening ── */}
        <div className="pt-14 pb-12">
          <p className={eyebrow}>Cost Proposal</p>
          <h1 className="font-serif text-[32px] font-light leading-[1.12] tracking-tight text-stone-200 text-balance sm:text-5xl">
            Penetration testing for your{" "}
            <span className="text-accent">FY26–27 SOC&nbsp;2 period.</span>
          </h1>
          <p className="ink mt-6 max-w-[62ch] text-[17px] leading-relaxed text-stone-300">
            Prepared for Green Shield Risk Solutions, covering the audit period
            1&nbsp;April&nbsp;2026 to 31&nbsp;March&nbsp;2027. Two fixed-fee
            options, depending on what your auditor confirms about account scope.
          </p>
        </div>

        {/* ── Fee ── */}
        <section className="rule border-t border-stone-800 py-11">
          <p className={eyebrow}>Fee</p>
          <h2 className={h2}>Two options, fixed fee.</h2>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <div className="card lead-card relative flex min-w-0 flex-col gap-3.5 border border-accent bg-accent-10 px-6 py-7">
              <span className="absolute inset-x-[-1px] top-[-1px] h-0.5 bg-gradient-to-r from-accent-dark via-accent to-accent-dark" />
              <div className="font-mono text-[11px] tracking-[0.2em] text-accent-light">
                OPTION A · FULL SCOPE
              </div>
              <div className="ink font-serif text-[46px] font-light leading-none tracking-tight text-stone-200 tabular-nums">
                $5,900
              </div>
              <div className="ink text-sm text-stone-300">
                All 11 AWS accounts — Property Guardian (7) and MGA (4), plus
                your production web applications.
              </div>
              <div className="quiet mt-auto pt-1 text-[13px] text-stone-500">
                If the auditor requires all accounts.
              </div>
            </div>

            <div className="card panel flex min-w-0 flex-col gap-3.5 border border-stone-800 bg-stone-900/30 px-6 py-7">
              <div className="font-mono text-[11px] tracking-[0.2em] text-stone-500">
                OPTION B · PRODUCTION ONLY
              </div>
              <div className="ink font-serif text-[46px] font-light leading-none tracking-tight text-stone-200 tabular-nums">
                $5,200
              </div>
              <div className="ink text-sm text-stone-300">
                The 3 production AWS accounts, plus your production web
                applications.
              </div>
              <div className="quiet mt-auto pt-1 text-[13px] text-stone-500">
                If the auditor confirms production-only scope.
              </div>
            </div>
          </div>

          <p className={`mt-6 ${body}`}>
            The $700 between them is the 8 non-production accounts. They can be
            added mid-engagement at the same price if the auditor decides late.
            The 2025 engagement was $6,550 all&#8209;in — $5,800 plus a $750 AWS
            review added afterward. Option A covers four more accounts and adds
            admin-role testing. No hourly billing either way.
          </p>
        </section>

        {/* ── Scope ── */}
        <section className="rule border-t border-stone-800 py-11">
          <p className={eyebrow}>Scope</p>
          <h2 className={h2}>Included in both options.</h2>
          <ul className="mt-6 list-none p-0">
            {included.map((row, i) => (
              <li
                key={row.what}
                className="rule grid min-w-0 grid-cols-[2.6rem_1fr] items-baseline gap-4 border-t border-stone-800 py-3.5 last:border-b"
              >
                <span className="font-mono text-xs text-stone-600 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="ink min-w-0 text-stone-200">
                  {row.what}
                  <span className="quiet mt-0.5 block text-[13.5px] text-stone-500">
                    {row.detail}
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <p className={`mt-6 ${body}`}>
            Testing is non-destructive. Denial of service, social engineering and
            physical security are out of scope unless added below.
          </p>
        </section>

        {/* ── Priced separately ── */}
        <section className="rule border-t border-stone-800 py-11">
          <p className={eyebrow}>Priced separately</p>
          <h2 className={h2}>Not included in the fee above.</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-[14.5px]">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="rule border-b border-stone-800 pr-4 pb-3 text-left font-mono text-[10.5px] font-normal tracking-[0.2em] whitespace-nowrap text-stone-500"
                  >
                    Item
                  </th>
                  <th
                    scope="col"
                    className="rule border-b border-stone-800 pb-3 text-right font-mono text-[10.5px] font-normal tracking-[0.2em] whitespace-nowrap text-stone-500"
                  >
                    Fee
                  </th>
                </tr>
              </thead>
              <tbody>
                {separate.map((row) => (
                  <tr key={row.item}>
                    <td className="ink rule border-b border-stone-800 py-3.5 pr-4 align-top text-stone-200">
                      {row.item}
                    </td>
                    <td className="ink rule border-b border-stone-800 py-3.5 text-right align-top whitespace-nowrap text-stone-200 tabular-nums">
                      {row.fee.map((f) => (
                        <span key={f} className="block">
                          {f}
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={`mt-6 ${body}`}>
            Multi-year terms lock the fee. No annual escalation.
          </p>
        </section>

        {/* ── Timing ── */}
        <section className="rule border-t border-stone-800 py-11">
          <p className={eyebrow}>Timing</p>
          <h2 className={h2}>
            Report and retest letter before{" "}
            <span className="text-accent">31 March.</span>
          </h2>
          <div className="mt-7 grid sm:grid-cols-3">
            {timing.map((stop, i) => (
              <div
                key={stop.when}
                className={`rule min-w-0 border-t pt-4 pb-1 sm:border-t-0 sm:border-l sm:px-[18px] sm:pt-0 ${
                  i === 0 ? "border-accent" : "border-stone-800"
                }`}
              >
                <span className="mb-1.5 block font-mono text-[11px] tracking-[0.14em] text-accent">
                  {stop.when}
                </span>
                <div className="ink text-[14.5px] text-stone-200">
                  {stop.what}
                </div>
                <div className="quiet mt-0.5 text-[13px] text-stone-500">
                  {stop.detail}
                </div>
              </div>
            ))}
          </div>
          <div className="panel rule mt-7 max-w-[72ch] border border-stone-800 bg-stone-900/55 px-6 py-5 text-[14.5px] text-stone-400">
            January also works, but leaves four days of margin and no room for a
            second remediation round. To hold December we need the Rules of
            Engagement signed by{" "}
            <strong className="ink font-medium text-stone-200">
              30 November
            </strong>{" "}
            and access in place by{" "}
            <strong className="ink font-medium text-stone-200">
              1 December
            </strong>
            .
          </div>
        </section>

        {/* ── Next steps ── */}
        <section className="rule border-t border-stone-800 py-11">
          <p className={eyebrow}>Next steps</p>
          <h2 className={h2}>What we need from you.</h2>
          <p className={`mt-5 ${body}`}>
            Confirm the account scope, the fourth MGA account, and your
            production application list. Payment is 40% on signature, 60% on
            delivery, net 30. Scope detail, rules of engagement and the test plan
            follow on signature.
          </p>
        </section>

        {/* ── Footer ── */}
        <div className="rule border-t border-stone-800 pt-10">
          <p className="mb-3.5 font-mono text-[11px] tracking-[0.25em] text-accent">
            Prepared by
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {team.map((p) => (
              <div key={p.name}>
                <div className="ink text-[15px] text-stone-200">{p.name}</div>
                <div className="quiet mt-px text-[13.5px] text-stone-500">
                  {p.role}
                </div>
                <div className="mt-1.5 font-mono text-[10.5px] tracking-[0.12em] text-accent">
                  {p.certs}
                </div>
              </div>
            ))}
          </div>
          <p className={`mt-7 ${body}`}>
            Testing follows NIST&nbsp;SP&nbsp;800-115, the OWASP Testing
            Guide&nbsp;v4 and Lloyd&apos;s Minimum Standards, under the existing
            mutual NDA between Wolfpack Security LLC and Green Shield Risk
            Solutions. This quote is valid until 17&nbsp;December&nbsp;2026.
          </p>
          <div className="rule mt-8 flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-stone-800 pt-5 font-mono text-[10.5px] tracking-[0.14em] text-stone-600">
            <span>
              CONFIDENTIAL · WOLFPACK SECURITY LLC · HARRISONBURG, VIRGINIA
            </span>
            <span>
              <a
                href="https://www.wolfpack-security.org"
                className="border-b border-stone-700 text-stone-500 no-underline transition-colors hover:border-accent hover:text-accent"
              >
                WOLFPACK-SECURITY.ORG
              </a>
            </span>
          </div>
        </div>
      </main>
    </>
  );
}
