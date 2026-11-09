import { notFound } from "next/navigation";
import { articleBySlug, publishedArticles } from "@/lib/content";
import { pageTitle } from "@/lib/seo";

type ArticleParams = { slug: string };

export function generateStaticParams() {
  return publishedArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<ArticleParams> }) {
  const { slug } = await params;
  const article = articleBySlug(slug);
  if (!article) return pageTitle("Journal");
  return pageTitle(article.title);
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<ArticleParams>;
}) {
  const { slug } = await params;
  const article = articleBySlug(slug);
  if (!article) notFound();

  return (
    <main id="main" className="section-ivory min-h-screen pt-28">
      <article className="mx-auto max-w-2xl px-5 pb-24 md:px-8">
        <p className="text-[0.72rem] tracking-[0.22em] text-ink/50 uppercase">
          {article.date} · {article.language === "zh" ? "中文" : "English"}
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-ink md:text-5xl">
          {article.title}
        </h1>
        <div
          className={`mt-10 space-y-6 text-lg leading-9 text-ink/80 ${
            article.language === "zh" ? "font-cjk" : ""
          }`}
        >
          {article.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-12 text-sm text-ink/50">Iris Pang · personal writing, not an interview transcript.</p>
      </article>
    </main>
  );
}
