import Image from "next/image";
import Link from "next/link";
import { MediaFrame } from "@/components/editorial/MediaFrame";
import { PlaceholderBadge } from "@/components/editorial/PlaceholderBadge";

type StoryCardProps = {
  href?: string;
  title: string;
  summary?: string;
  kicker?: string;
  topics?: string[];
  placeholder?: boolean;
  variant?: "ember" | "lilac" | "green";
  image?: string;
  overlay?: boolean;
  className?: string;
};

export function StoryCard({
  href,
  title,
  summary,
  kicker,
  topics,
  placeholder,
  variant = "ember",
  image,
  overlay,
  className = "",
}: StoryCardProps) {
  const media = (
    <MediaFrame variant={variant} className={overlay ? "h-full min-h-64 md:min-h-80" : "min-h-52"}>
      {image ? (
        <Image src={image} alt="" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-midnight/85 via-midnight/15 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-between p-5 text-ivory">
        <div className="flex items-start justify-between gap-3">
          {kicker ? <p className="text-[0.7rem] tracking-[0.2em] uppercase opacity-80">{kicker}</p> : <span />}
          {placeholder ? <PlaceholderBadge /> : null}
        </div>
        <div>
          {overlay ? (
            <h3 className="max-w-sm font-serif text-3xl leading-tight tracking-tight md:text-4xl">{title}</h3>
          ) : null}
          {topics?.length ? (
            <p className="mt-3 text-[0.68rem] tracking-[0.16em] uppercase opacity-80">
              {topics.join(" · ")}
            </p>
          ) : null}
        </div>
      </div>
    </MediaFrame>
  );

  const inner = overlay ? (
    media
  ) : (
    <>
      {media}
      <div className="px-1 pt-4">
        <h3 className="font-serif text-2xl leading-tight tracking-tight text-ink">{title}</h3>
        {summary ? <p className="mt-2 text-sm leading-6 text-ink/65">{summary}</p> : null}
      </div>
    </>
  );

  const articleClass = overlay ? `h-full ${className}` : className;

  if (!href || placeholder) {
    return <article className={articleClass}>{inner}</article>;
  }

  return (
    <article className={articleClass}>
      <Link href={href} className="block h-full no-underline transition-opacity hover:opacity-90">
        {inner}
      </Link>
    </article>
  );
}
