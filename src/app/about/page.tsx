import { PageShell } from "@/components/layout/PageShell";
import { pageTitle } from "@/lib/seo";

export const metadata = pageTitle("About");

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="A world assembled from attention."
      dek="This site is not a curriculum vitae. It is the public room for the work Iris wants people to enter: conversations, writing, and communities forming around technology and consciousness."
    >
      <div className="max-w-2xl space-y-6 text-lg leading-8 text-ink/75">
        <p>
          Iris Pang works at the meeting of technology, media and community. The public
          through-line is curiosity: how tools change a life, how a question changes a room,
          and how people stay human while the future arrives.
        </p>
        <p>
          Beyond the Tech is an independent conversation series. The Journal holds writing
          that does not have to justify itself as content marketing. Community is treated as
          a destination of its own — ideas, gatherings, and making things with others.
        </p>
        <p>
          Professional facts, when they are needed, will sit quietly at the end of this page.
          They are not the opening argument.
        </p>
      </div>
    </PageShell>
  );
}
