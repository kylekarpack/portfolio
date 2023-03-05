import { Response } from "@remix-run/cloudflare";
import type { LoaderFunction } from "@remix-run/cloudflare";

import { fetchFromGraphCMS } from "~/utils/graphcms";
import { getPortfolioBySlug } from "~/queries/getPortfolio";

export type LoaderData = {
  content: {
    html: string;
  };
  id: string;
  images: [
    {
      url: string;
    }
  ];
  description: string;
  slug: string;
  title: string;
};

export const loader: LoaderFunction = async (args): Promise<LoaderData> => {
  const { slug } = args.params;

  const data = await fetchFromGraphCMS(getPortfolioBySlug, { slug: slug });
  const res = await data.json();
  const portfolios = res.data.portfolios ?? [];

  if (portfolios.length !== 1) {
    throw new Response(`Portfolio "${slug}" not found`, { status: 404 });
  }

  return portfolios[0];
};
