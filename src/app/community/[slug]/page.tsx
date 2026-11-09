import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { communityBySlug, publishedCommunity } from "@/lib/content";
import { pageTitle } from "@/lib/seo";

type CommunityParams = { slug: string };

export function generateStaticParams() {
  return publishedCommunity().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<CommunityParams> }) {
  const { slug } = await params;
  const item = communityBySlug(slug);
  if (!item) return pageTitle("Community");
  return pageTitle(item.title);
}

export default async function CommunityDetailPage({
  params,
}: {
  params: Promise<CommunityParams>;
}) {
  const { slug } = await params;
  const item = communityBySlug(slug);
  if (!item) notFound();

  return (
    <PageShell eyebrow="Community" title={item.title} dek={item.summary}>
      <p className="text-sm text-ink/60">
        Event photography, organisation names and Iris&apos;s role will be added only from
        confirmed records. Titles such as association office are not used as homepage
        headlines.
      </p>
    </PageShell>
  );
}
