export type PublishStatus = "draft" | "published" | "upcoming" | "archived";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  date: string;
  language: "en" | "zh";
  tags: string[];
  status: PublishStatus;
  coverCredit?: string;
};

export const articles: Article[] = [
  {
    slug: "not-every-goal",
    title: "不是所有目标，都要先看见终点",
    excerpt: "有些方向，不是在出发前就能完全想明白的。",
    date: "2026",
    language: "zh",
    tags: ["Reflections"],
    status: "published",
    body: [
      "人生像一场大型的“地球 Online”游戏。我们一边闯关，一边积累经验、解锁技能，也在一次次选择中，重新认识自己，不断校准方向。",
      "站在第一关时，我们很难提前拥有第五关所需要的能力与认知。",
      "能做的，只是先走好当下的每一段路，带着途中积累的经验与判断，以及命运偶尔赠予的小秘籍和道具，一点点看清下一段路。",
      "有些方向，不是在出发前就能完全想明白的。有些风景，也只有真正走上这条路以后，才会慢慢显现。很多答案，本来就是边走边长出来的。",
    ],
  },
];
