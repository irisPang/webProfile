import { articles } from "@/content/articles";
import { communityItems } from "@/content/community";
import { experiences } from "@/content/experiences";
import { stories } from "@/content/stories";

export function publishedArticles() {
  return articles.filter((item) => item.status === "published");
}

export function articleBySlug(slug: string) {
  return publishedArticles().find((item) => item.slug === slug);
}

export function publishedStories() {
  return stories.filter((item) => item.status === "published");
}

export function storyBySlug(slug: string) {
  return publishedStories().find((item) => item.slug === slug);
}

export function publishedCommunity() {
  return communityItems.filter((item) => item.status === "published");
}

export function communityBySlug(slug: string) {
  return publishedCommunity().find((item) => item.slug === slug);
}

export function publishedExperiences() {
  return experiences.filter((item) => item.status === "published");
}
