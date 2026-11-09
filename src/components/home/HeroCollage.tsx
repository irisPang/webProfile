import Image from "next/image";
import { OrbitLines } from "@/components/visual/OrbitLines";

export function HeroCollage() {
  return (
    <div className="hero-collage" aria-hidden="true">
      <div className="hero-orb">
        <Image src="/images/hero-ember-orb.jpg" alt="" fill sizes="(min-width: 1024px) 50vw, 90vw" className="object-cover" />
      </div>
      <div className="hero-ridge">
        <Image src="/images/hero-ridge.jpg" alt="" fill sizes="(min-width: 1024px) 35vw, 70vw" className="object-cover object-top" />
      </div>
      <div className="hero-portrait">
        <Image src="/images/iris-photo-cutout-v3.png" alt="" fill preload sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain object-top" />
      </div>
      <div className="hero-orbits"><OrbitLines /></div>
      <div className="hero-vignette" />
    </div>
  );
}
