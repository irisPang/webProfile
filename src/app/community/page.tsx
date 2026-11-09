import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { publishedCommunity } from "@/lib/content";
import { pageTitle } from "@/lib/seo";

export const metadata = pageTitle("Community");

const structure = [
  {
    title: "Ideas",
    body: "Questions about future technology, wisdom, culture and the lives they touch.",
  },
  {
    title: "Gatherings",
    body: "Forums, rooms and encounters that actually happened — with host, role and source named accurately.",
  },
  {
    title: "Collective creation",
    body: "Where conversation becomes a project or a collaboration. No inflated membership or outcome claims.",
  },
];

export default function CommunityPage() {
  const items = publishedCommunity();

  return (
    <PageShell
      eyebrow="Community"
      title="A first-class destination, not a side note."
      dek="The future of technology is shaped by the people who come together around it. A space for conversations, shared curiosity and communities moving ideas forward."
    >
      <div className="grid gap-8 md:grid-cols-3">
        {structure.map((item) => (
          <section key={item.title} className="border-t border-ink/15 pt-5">
            <h2 className="font-serif text-2xl text-ink">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-ink/65">{item.body}</p>
          </section>
        ))}
      </div>
      <div className="mt-16 grid gap-8">
        {items.map((item) => (
          <article key={item.slug} className="border-t border-ink/10 pt-8">
            <p className="text-[0.72rem] tracking-[0.18em] text-ink/50 uppercase">{item.type}</p>
            <h2 className="mt-2 font-serif text-3xl">
              <Link href={`/community/${item.slug}`}>{item.title}</Link>
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-ink/70">{item.summary}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
