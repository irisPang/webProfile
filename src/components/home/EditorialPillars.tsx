import Image from "next/image";
import Link from "next/link";
import { publishedArticles } from "@/lib/content";

const pillars = [
  {
    href: "/journal",
    title: "Journal",
    body: "Ideas, reflections and explorations on technology, consciousness and the future.",
    image: "/images/panel-journal.jpg",
  },
  {
    href: "/community",
    title: "Community",
    body: "A growing circle of curious minds, creators and builders.",
    image: "/images/panel-community.jpg",
  },
  {
    href: "/experiences",
    title: "Experiences",
    body: "From conversations to real-world collaborations and creations.",
    image: "/images/panel-experiences.jpg",
  },
];

export function EditorialPillars() {
  const article = publishedArticles()[0];

  return (
    <section className="bg-[#efe6d6] px-5 pb-16 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[92rem] gap-3 md:grid-cols-3">
        {pillars.map((pillar) => (
          <Link
            key={pillar.href}
            href={pillar.href}
            className="group relative min-h-64 overflow-hidden no-underline md:min-h-72"
          >
            <Image src={pillar.image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/25 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-ivory">
              <h2 className="font-serif text-4xl tracking-tight">{pillar.title}</h2>
              <p className="mt-3 max-w-sm text-sm leading-6 text-ivory/85">{pillar.body}</p>
              {pillar.title === "Journal" && article ? (
                <p className="mt-4 text-xs tracking-[0.14em] text-ivory/70 uppercase">
                  Now reading · {article.title}
                </p>
              ) : null}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
