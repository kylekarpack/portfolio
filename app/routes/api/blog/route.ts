import type { LoaderFunction } from "@remix-run/node";
import { fetchFromGraphCMS } from "~/utils/graphcms";
import { getBlogs } from "~/queries/getBlogs";

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
}

export type LoaderData = Blog[];

export const loader: LoaderFunction = async (args): Promise<LoaderData> => {
  const data = await fetchFromGraphCMS(getBlogs);
  const res = await data.json();
  const items = res.data.blogs ?? [];

  if (!items.length) {
    throw new Response(`Blog items not found`, { status: 404 });
  }

  return items;
};
