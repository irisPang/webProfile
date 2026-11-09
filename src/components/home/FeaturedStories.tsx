import Link from "next/link";
import { publishedStories } from "@/lib/content";
import { StoryCard } from "@/components/editorial/StoryCard";

export function FeaturedStories() {
  const items = publishedStories().filter((item) => !item.placeholder).slice(0, 2);
  if (!items.length) return null;
  return (
    <section id="conversations" className="section-ivory px-5 py-16 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[92rem] gap-10 lg:grid-cols-[minmax(14rem,0.7fr)_minmax(0,1.6fr)]">
        <header className="py-4">
          <p className="mb-5 text-xs tracking-[0.2em] text-ink/65 uppercase">The conversations</p>
          <h2 className="font-serif text-4xl leading-none tracking-tight text-ink md:text-5xl">Technology.<br />Still human.</h2>
          <span className="mt-6 block h-[2px] w-16 bg-coral" />
          <p className="mt-6 max-w-xs text-sm leading-7 text-ink/75">People, ideas and the questions that stay with us. Discover the world of Beyond the Tech.</p>
          <Link href="/conversations" className="mt-6 inline-block py-2 text-sm underline underline-offset-4">Explore conversations →</Link>
        </header>
        <div className={`grid gap-6 ${items.length > 1 ? "md:grid-cols-2" : ""}`}>
          {items.map((story) => <StoryCard key={story.slug} href={`/conversations/${story.slug}`} title={story.title} kicker={story.kind === "series" ? "Discover the series" : "Conversation"} topics={story.topics} image="/images/hero-marble-cast.jpg" overlay />)}
        </div>
      </div>
    </section>
  );
}
