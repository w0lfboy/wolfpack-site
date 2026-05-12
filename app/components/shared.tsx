"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";

/* ─── Scroll Animation ─── */

export function Reveal({
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

export function WolfMark({ size = 32 }: { size?: number }) {
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

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/faq" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-stone-800/60 bg-stone-950/90 backdrop-blur-md"
      aria-label="Primary navigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-stone-100">
          <WolfMark size={32} />
          <div className="leading-none">
            <span className="block font-mono text-sm font-medium tracking-widest text-stone-100">
              WOLFPACK
            </span>
            <span className="block font-mono text-[10px] tracking-[0.2em] text-stone-500">
              SECURITY LLC
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-mono text-xs tracking-wider text-stone-400 transition-colors hover:text-stone-100"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="border border-accent/40 bg-accent/10 px-5 py-2 font-mono text-xs tracking-wider text-accent transition-colors hover:border-accent hover:bg-accent/20"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className="block h-px w-5 bg-stone-300 transition-transform"
            style={{
              transform: mobileOpen
                ? "rotate(45deg) translate(2px, 2px)"
                : "none",
            }}
          />
          <span
            className="block h-px w-5 bg-stone-300 transition-opacity"
            style={{ opacity: mobileOpen ? 0 : 1 }}
          />
          <span
            className="block h-px w-5 bg-stone-300 transition-transform"
            style={{
              transform: mobileOpen
                ? "rotate(-45deg) translate(2px, -2px)"
                : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.2,0,0,1)] md:hidden"
        style={{ gridTemplateRows: mobileOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1 border-t border-stone-800/60 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 font-mono text-sm tracking-wider text-stone-400 transition-colors hover:text-stone-100"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 border border-accent/40 bg-accent/10 px-5 py-3 text-center font-mono text-xs tracking-wider text-accent transition-colors hover:border-accent hover:bg-accent/20"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

/* ─── Footer ─── */

export function Footer() {
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
