import Link from "next/link";
import { HeroCollage } from "@/components/home/HeroCollage";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero-editorial" aria-label="Introduction">
      <div className="hero-art">
        <HeroCollage />
        <p className="hero-wordmark" aria-hidden="true">
          <span>IRIS</span>
          <span className="hero-surname">PANG</span>
        </p>
      </div>
      <div className="hero-copy">
        <p className="hero-eyebrow">{site.name} / An editorial world</p>
        <h1 className="hero-statement">
          {site.statementLead}<br />
          <em>{site.statementAccent}</em><br />
          {site.statementTail}
        </h1>
        <p className="hero-pillars">{site.pillars.join(" · ")}</p>
        <p className="hero-dek">{site.dek}</p>
        <Link className="hero-explore" href="#conversations">
          Explore the conversations <span aria-hidden="true">↓</span>
        </Link>
      </div>
    </section>
  );
}
