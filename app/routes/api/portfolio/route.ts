import { Response } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { fetchFromGraphCMS } from "~/utils/graphcms";
import { getPortfolios } from "~/queries/getPortfolios";

export interface Portfolio {
  current: boolean;
  date: Date;
  images: any;
  description: string;
  slug: string;
  title: string;
}

export type LoaderData = Portfolio[];

export const loader: LoaderFunction = async (args): Promise<LoaderData> => {
  const data = await fetchFromGraphCMS(getPortfolios);
  const res = await data.json();
  const items = res.data.portfolios ?? [];

  if (!items.length) {
    throw new Response(`Portfolio items not found`, { status: 404 });
  }

  return items;
};
