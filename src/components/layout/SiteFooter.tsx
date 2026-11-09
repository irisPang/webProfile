import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-paper px-5 py-10 text-ink md:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[92rem] flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-2xl tracking-[0.18em]">{site.shortName}</p>
          <p className="mt-2 text-sm text-ink/60">{site.pillars.join(" · ")}</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Footer">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/community">Community</Link>
        </nav>
        <p className="text-xs tracking-wide text-ink/60">Ideas, conversations and collective creation.</p>
      </div>
    </footer>
  );
}
