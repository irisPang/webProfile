type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
}: SectionHeadingProps) {
  const color = tone === "light" ? "text-ivory" : "text-ink";
  const muted = tone === "light" ? "text-ivory/70" : "text-ink/65";

  return (
    <header className={`max-w-xl ${color}`}>
      {eyebrow ? (
        <p className={`mb-3 text-[0.72rem] tracking-[0.22em] uppercase ${muted}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-4xl leading-none tracking-tight md:text-5xl">
        {title}
      </h2>
      {description ? <p className={`mt-4 text-base leading-7 ${muted}`}>{description}</p> : null}
    </header>
  );
}
