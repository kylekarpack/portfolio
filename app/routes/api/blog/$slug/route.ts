import type { LoaderFunction } from "@remix-run/node";
import { fetchFromGraphCMS } from "~/utils/graphcms";
import { getBlog } from "~/queries/getBlog";

export type LoaderData = {
  content: {
    markdown: string;
    text: string;
    raw: any;
  };
  id: string;
  slug: string;
  title: string;
  previewImage: {
    handle: string;
    url: string;
  };
};

export const loader: LoaderFunction = async (args): Promise<LoaderData> => {
  const { slug } = args.params;

  const data = await fetchFromGraphCMS(getBlog, { slug: slug });
  const res = await data.json();
  const blogs = res.data.blogs ?? [];

  if (blogs.length !== 1) {
    throw new Response(`Blog "${slug}" not found`, { status: 404 });
  }

  return blogs[0];
};
