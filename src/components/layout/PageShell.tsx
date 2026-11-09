import type { ReactNode } from "react";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  dek?: string;
  children: ReactNode;
};

export function PageShell({ eyebrow, title, dek, children }: PageShellProps) {
  return (
    <main id="main" className="section-ivory min-h-screen pt-28">
      <div className="mx-auto max-w-5xl px-5 pb-24 md:px-8">
        {eyebrow ? (
          <p className="mb-3 text-[0.72rem] tracking-[0.22em] text-ink/50 uppercase">{eyebrow}</p>
        ) : null}
        <h1 className="font-serif text-5xl leading-none tracking-tight text-ink md:text-6xl">
          {title}
        </h1>
        {dek ? <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70">{dek}</p> : null}
        <div className="mt-12">{children}</div>
      </div>
    </main>
  );
}
