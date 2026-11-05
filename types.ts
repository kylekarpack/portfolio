export interface Portfolio {
  portfolioItemType: "current" | "past" | "student";
  date: string;
  images: string[];
  description: string;
  slug: string;
  title: string;
  content: string;
}

