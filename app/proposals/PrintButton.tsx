"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="border border-stone-700 px-4 py-2 font-mono text-[10px] tracking-[0.2em] text-stone-400 transition-colors hover:border-accent hover:text-accent print:hidden"
    >
      SAVE AS PDF
    </button>
  );
}
