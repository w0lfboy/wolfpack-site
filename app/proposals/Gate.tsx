import { WolfMark } from "../components/shared";
import { unlock } from "./actions";

export function Gate({ error }: { error?: boolean }) {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-4 py-16 sm:px-6">
      <div className="flex items-center gap-3.5">
        <WolfMark size={40} />
        <div className="leading-tight">
          <span className="block font-mono text-xs font-medium tracking-[0.22em] text-stone-200">
            WOLFPACK
          </span>
          <span className="block font-mono text-xs tracking-[0.22em] text-stone-600">
            SECURITY LLC
          </span>
        </div>
      </div>

      <p className="mt-12 font-mono text-[11px] tracking-[0.25em] text-stone-500">
        Confidential
      </p>
      <h1 className="mt-3.5 font-serif text-3xl font-light leading-tight text-stone-200">
        This proposal is <span className="text-accent">passcode protected.</span>
      </h1>
      <p className="mt-4 text-[14.5px] leading-relaxed text-stone-500">
        Enter the passcode from your email to continue. If you don&apos;t have
        it, reply to the message and we&apos;ll send it over.
      </p>

      <form action={unlock} className="mt-8">
        <label
          htmlFor="passcode"
          className="block font-mono text-[10.5px] tracking-[0.2em] text-stone-500"
        >
          PASSCODE
        </label>
        <input
          id="passcode"
          name="passcode"
          type="password"
          required
          autoFocus
          autoComplete="off"
          spellCheck={false}
          aria-describedby={error ? "passcode-error" : undefined}
          aria-invalid={error || undefined}
          className={`mt-2 w-full border bg-stone-900/40 px-4 py-3 font-mono text-sm tracking-wider text-stone-200 outline-none placeholder:text-stone-600 focus:border-accent ${
            error ? "border-accent-dark" : "border-stone-800"
          }`}
        />

        {error ? (
          <p
            id="passcode-error"
            role="alert"
            className="mt-3 font-mono text-[11px] tracking-wider text-accent-light"
          >
            That passcode isn&apos;t right. Try again.
          </p>
        ) : null}

        <button
          type="submit"
          className="mt-5 w-full border border-accent/40 bg-accent-10 px-5 py-3 font-mono text-xs tracking-[0.2em] text-accent transition-colors hover:border-accent hover:bg-accent-20"
        >
          VIEW PROPOSAL
        </button>
      </form>

      <p className="mt-10 font-mono text-[10.5px] leading-relaxed tracking-[0.14em] text-stone-700">
        WOLFPACK SECURITY LLC · HARRISONBURG, VIRGINIA
      </p>
    </main>
  );
}
