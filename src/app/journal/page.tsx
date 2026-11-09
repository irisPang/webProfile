import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { publishedArticles } from "@/lib/content";
import { pageTitle } from "@/lib/seo";

export const metadata = pageTitle("Journal");

export default function JournalPage() {
  const items = publishedArticles();

  return (
    <PageShell
      eyebrow="Journal"
      title="Notes that can be read slowly."
      dek="Technology, consciousness, people, culture, places. Not every piece has to serve a product or a résumé."
    >
      <ul className="grid gap-0">
        {items.map((article) => (
          <li key={article.slug} className="border-t border-ink/10 py-8">
            <Link href={`/journal/${article.slug}`} className="no-underline">
              <p className="text-sm text-ink/50">
                {article.date} · {article.language === "zh" ? "中文" : "English"}
              </p>
              <h2 className="mt-2 font-serif text-3xl text-ink">{article.title}</h2>
              <p className="mt-2 text-ink/65">{article.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
