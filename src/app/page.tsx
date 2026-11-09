import { EditorialPillars } from "@/components/home/EditorialPillars";
import { FeaturedStories } from "@/components/home/FeaturedStories";
import { Hero } from "@/components/home/Hero";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <FeaturedStories />
      <EditorialPillars />
    </main>
  );
}
