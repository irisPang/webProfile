"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const onHome = pathname === "/";
  const tone = onHome ? "text-ivory" : "text-ink";
  const muted = onHome ? "text-ivory/80" : "text-ink/70";
  const border = onHome ? "border-ivory/30" : "border-ink/20";
  const bar = onHome ? "" : "bg-paper/90 backdrop-blur-md";

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`absolute inset-x-0 top-0 z-40 ${bar}`}>
      <div className="mx-auto flex max-w-[92rem] items-center justify-between gap-6 px-5 py-5 md:px-8 lg:px-12">
        <Link
          href="/"
          className={`font-serif text-xl tracking-[0.18em] whitespace-nowrap no-underline ${tone}`}
        >
          {site.name}
        </Link>
        <nav className={`hidden items-center gap-6 text-sm lg:gap-7 lg:flex ${muted}`} aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link no-underline transition-colors ${onHome ? "hover:text-ivory" : "hover:text-ink"}`}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`rounded-full border px-4 py-1.5 text-sm no-underline ${border} ${tone}`}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className={`inline-flex items-center rounded-full border px-3 py-1.5 text-sm lg:hidden ${border} ${tone}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className={`border-t px-5 py-4 lg:hidden ${onHome ? "border-ivory/10 bg-midnight/95" : "border-ink/10 bg-paper"}`}
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3 text-lg">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`nav-link no-underline ${tone}`}
                  aria-current={pathname === item.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="text-coral no-underline" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
