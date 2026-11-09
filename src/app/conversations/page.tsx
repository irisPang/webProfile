import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { pageTitle } from "@/lib/seo";
import { publishedStories } from "@/lib/content";

export const metadata = pageTitle("Conversations");

export default function ConversationsPage() {
  const items = publishedStories();

  return (
    <PageShell
      eyebrow="Conversations"
      title="People, before the pitch."
      dek="Beyond the Tech is the home series. Architecture and commercial-space interviews remain a separate grouping. Explore the people and questions behind each series."
    >
      <div className="grid gap-10">
        {items.map((story) => (
          <article key={story.slug} className="border-t border-ink/10 pt-8">
            <p className="text-[0.72rem] tracking-[0.18em] text-ink/50 uppercase">{story.kind === "series" ? "Series" : "Conversation"}</p>
            <h2 className="mt-2 font-serif text-3xl text-ink">
              <Link href={`/conversations/${story.slug}`}>{story.title}</Link>
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-ink/70">{story.summary}</p>
          </article>
        ))}
        <p className="text-sm text-ink/55">
          New conversations will be collected here as they are released.
        </p>
      </div>
    </PageShell>
  );
}
