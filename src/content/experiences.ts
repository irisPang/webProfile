import type { PublishStatus } from "@/content/articles";

export type Experience = {
  slug: string;
  title: string;
  narrative: string;
  role?: string;
  date?: string;
  status: PublishStatus;
};

export const experiences: Experience[] = [];
