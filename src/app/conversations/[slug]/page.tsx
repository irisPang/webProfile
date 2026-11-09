import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { publishedStories, storyBySlug } from "@/lib/content";
import { pageTitle } from "@/lib/seo";

type ConversationParams = { slug: string };

export function generateStaticParams() {
  return publishedStories().map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: { params: Promise<ConversationParams> }) {
  const { slug } = await params;
  const story = storyBySlug(slug);
  if (!story) return pageTitle("Conversations");
  return pageTitle(story.title);
}

export default async function ConversationDetailPage({
  params,
}: {
  params: Promise<ConversationParams>;
}) {
  const { slug } = await params;
  const story = storyBySlug(slug);
  if (!story) notFound();

  return (
    <PageShell eyebrow="Conversations" title={story.title} dek={story.summary}>
      <p className="text-sm tracking-[0.16em] text-ink/50 uppercase">
        {story.topics.join(" · ")}
      </p>
      <div className="prose mt-8 max-w-2xl text-ink/75">
        <p>
          {story.kind === "series"
            ? "Explore the people behind technology, the choices that shape their work, and the ideas that connect us. New episodes will be collected here as they are released."
            : story.summary}
        </p>
      </div>
    </PageShell>
  );
}
