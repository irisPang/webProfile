import type { PublishStatus } from "@/content/articles";

export type CommunityType = "ideas" | "gatherings" | "creation";

export type CommunityItem = {
  slug: string;
  title: string;
  type: CommunityType;
  summary: string;
  host?: string;
  irisRole?: string;
  date?: string;
  status: PublishStatus;
  officialLink?: string;
};

export const communityItems: CommunityItem[] = [
  {
    slug: "ideas-we-hold",
    title: "Ideas we hold in common",
    type: "ideas",
    summary:
      "The future of technology is shaped by the people who come together around it — around wisdom, culture, and the work of making ideas livable.",
    status: "published",
  },
];
