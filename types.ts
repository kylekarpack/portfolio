export interface Portfolio {
  portfolioItemType: "current" | "past" | "student";
  date: Date;
  images: any;
  description: string;
  slug: string;
  title: string;
  content: {
    html: string;
  };
}

export interface Blog {
  content: {
    markdown: string;
    text: string;
    raw: any;
  };
  categories: string[];
  publicationDate: string;
  previewImage: {
    url: string;
    handle: string;
  };
  slug: string;
  title: string;
  description: string;
}
