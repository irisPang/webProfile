import { PageShell } from "@/components/layout/PageShell";
import { publishedExperiences } from "@/lib/content";
import { pageTitle } from "@/lib/seo";

export const metadata = pageTitle("Experiences");

export default function ExperiencesPage() {
  const items = publishedExperiences();

  return (
    <PageShell
      eyebrow="Experiences"
      title="What happened in the room."
      dek="Hosting, gatherings, exhibitions, travel and collaboration — told as scenes, not as a professional timeline."
    >
      {items.length === 0 ? (
        <p className="max-w-xl leading-7 text-ink/65">
          Stories will appear here once photographs, dates and permissions are cleared. This
          route is live so the navigation is honest; it is not filled with sample projects.
        </p>
      ) : (
        <ul className="grid gap-8">
          {items.map((item) => (
            <li key={item.slug}>
              <h2 className="font-serif text-3xl">{item.title}</h2>
              <p className="mt-3 text-ink/70">{item.narrative}</p>
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  );
}
