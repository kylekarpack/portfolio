export interface Portfolio {
  portfolioItemType: "current" | "past" | "student";
  date: string;
  images: string[];
  description: string;
  slug: string;
  title: string;
  content: string;
}

export interface Blog {
  content: string;
  categories: string[];
  publicationDate: string;
  previewImage?: string;
  slug: string;
  title: string;
  description: string;
}
