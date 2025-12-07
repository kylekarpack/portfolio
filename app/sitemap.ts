import { SITE_UPDATED } from "@/config/constants";
import { BASE_URL } from "@/config/settings.server";
import { getSitemap } from "@/queries/getSitemap";
import { Portfolio } from "@/types";
import { fetchFromGraphCMS } from "@/utils/graphcms";
import { MetadataRoute } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data } = await fetchFromGraphCMS<{ portfolios: Portfolio[] }>(getSitemap);
  const { portfolios } = data;

  const routes = ["/blog", "/portfolio", "/resume", "/uses"];

  const staticRoutes = routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: SITE_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 1.0,
  }));

  const portfolioRoutes = portfolios.map((p: any) => ({
    url: `${BASE_URL}/portfolio/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...staticRoutes,
    ...portfolioRoutes,
  ];
}
