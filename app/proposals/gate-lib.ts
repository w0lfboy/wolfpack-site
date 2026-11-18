import { createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

/* Passcode gate for client proposals.
 *
 * The cookie never holds the passcode itself, only a hash of it. Rotating
 * PROPOSAL_PASSCODE therefore invalidates every cookie already issued, with
 * nothing to clean up. If the variable is unset the gate denies everyone —
 * a missing secret must not expose the document. */

export const COOKIE = "wp_gsr_proposal";
export const PROPOSAL_PATH = "/proposals/green-shield-fy26-27-bf4cd2e9f1";

export function tokenFor(passcode: string): string {
  return createHash("sha256")
    .update(`wolfpack:gsr-fy26-27:${passcode}`)
    .digest("hex");
}

/** The token a valid cookie must carry, or null when no passcode is set. */
export function expectedToken(): string | null {
  const passcode = process.env.PROPOSAL_PASSCODE;
  if (!passcode) return null;
  return tokenFor(passcode);
}

/** Constant-time compare. Both arguments are hex digests of equal length. */
export function safeEqual(a: string, b: string): boolean {
  const left = Buffer.from(a, "utf8");
  const right = Buffer.from(b, "utf8");
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

export async function isUnlocked(): Promise<boolean> {
  const expected = expectedToken();
  if (!expected) return false;
  const presented = (await cookies()).get(COOKIE)?.value;
  if (!presented) return false;
  return safeEqual(presented, expected);
}
