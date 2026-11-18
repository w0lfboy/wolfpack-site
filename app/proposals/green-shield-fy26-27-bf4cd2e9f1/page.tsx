import type { Metadata } from "next";
import { Gate } from "../Gate";
import { isUnlocked } from "../gate-lib";
import { ProposalDocument } from "./ProposalDocument";

/* Deliberately says nothing about which client this is for. Metadata is the
   same whether or not the viewer has the passcode, so naming them here would
   leak the one thing the gate exists to protect. */
export const metadata: Metadata = {
  title: "Confidential Proposal — Wolfpack Security LLC",
  description: "This document requires a passcode.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  openGraph: { title: "Confidential Proposal — Wolfpack Security LLC" },
};

export default async function ProposalPage({
  searchParams,
}: {
  searchParams: Promise<{ e?: string }>;
}) {
  if (!(await isUnlocked())) {
    const { e } = await searchParams;
    return <Gate error={e === "1"} />;
  }

  return <ProposalDocument />;
}
