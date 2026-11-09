import type { PublishStatus } from "@/content/articles";

export type Conversation = {
  slug: string;
  kind: "series" | "episode";
  title: string;
  series: "beyond-the-tech" | "spaces" | "independent";
  summary: string;
  guestName?: string;
  guestRole?: string;
  publicationDate?: string;
  videoUrl?: string;
  topics: string[];
  status: PublishStatus;
  placeholder?: boolean;
};

export const stories: Conversation[] = [
  {
    slug: "beyond-the-tech",
    kind: "series",
    title: "Beyond the Tech",
    series: "beyond-the-tech",
    summary:
      "An independent conversation series from Sydney. It looks at the people, ideas and still-human questions behind technology, innovation and social change.",
    topics: ["People", "Technology", "Culture"],
    status: "published",
  },
];

export const prototypeConversationSlots: Conversation[] = [
  {
    slug: "layout-slot-a",
    kind: "episode",
    title: "Featured interview",
    series: "beyond-the-tech",
    summary: "A published episode will appear here once title, guest, date and media rights are confirmed.",
    topics: ["Layout"],
    status: "draft",
    placeholder: true,
  },
  {
    slug: "layout-slot-b",
    kind: "episode",
    title: "Featured interview",
    series: "spaces",
    summary: "Architecture and commercial-space conversations stay in their own series. No guest is listed until a piece is public.",
    topics: ["Layout"],
    status: "draft",
    placeholder: true,
  },
];
