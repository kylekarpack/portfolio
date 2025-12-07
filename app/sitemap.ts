import { MetadataRoute } from "next";
import { fetchFromGraphCMS } from "@/utils/graphcms";
import { getSitemap } from "@/queries/getSitemap";
import { BASE_URL } from "@/config/settings.server";
import { SITE_UPDATED } from "@/config/constants";

export const dynamic = "force-static";
export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await fetchFromGraphCMS(getSitemap);
  const res = await data.json();
  const { portfolios } = res.data;

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
