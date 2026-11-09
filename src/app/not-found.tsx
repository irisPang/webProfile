import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="section-ivory flex min-h-screen items-center px-5 pt-24">
      <div>
        <p className="text-[0.72rem] tracking-[0.22em] text-ink/50 uppercase">404</p>
        <h1 className="mt-3 font-serif text-5xl text-ink">This page is not here.</h1>
        <p className="mt-4 text-ink/65">
          <Link href="/">Return home</Link>
        </p>
      </div>
    </main>
  );
}
