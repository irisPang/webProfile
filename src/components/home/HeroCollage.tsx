import Image from "next/image";
import { OrbitLines } from "@/components/visual/OrbitLines";

export function HeroCollage() {
  return (
    <div className="hero-collage" aria-hidden="true">
      <div className="hero-portrait">
        <Image
          src="/images/iris-hero-portrait.jpg"
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="hero-vignette" />
      <div className="hero-orbits">
        <OrbitLines />
      </div>
      <div className="hero-orb">
        <Image
          src="/images/hero-ember-orb.jpg"
          alt=""
          fill
          sizes="(min-width: 1024px) 30vw, 55vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
