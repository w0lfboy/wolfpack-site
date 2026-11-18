"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  COOKIE,
  PROPOSAL_PATH,
  expectedToken,
  safeEqual,
  tokenFor,
} from "./gate-lib";

export async function unlock(formData: FormData) {
  const expected = expectedToken();
  const entered = String(formData.get("passcode") ?? "").trim();

  /* There is no persistent rate limiter here, so a fixed delay on every
     attempt is what blunts online guessing. It also flattens any timing
     difference between a missing passcode and a wrong one. */
  await new Promise((resolve) => setTimeout(resolve, 400));

  if (!expected || !safeEqual(tokenFor(entered), expected)) {
    redirect(`${PROPOSAL_PATH}?e=1`);
  }

  (await cookies()).set(COOKIE, expected, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: PROPOSAL_PATH,
    maxAge: 60 * 60 * 24 * 30,
  });

  redirect(PROPOSAL_PATH);
}
