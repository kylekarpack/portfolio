import { SITE_UPDATED } from "@/config/constants";
import { BASE_URL } from "@/config/settings.server";
import { getBlogs, getPortfolios } from "@/lib/content";
import { MetadataRoute } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const portfolios = await getPortfolios();
  const blogs = await getBlogs();

  const routes = ["/about", "/about/reading", "/blog", "/contact", "/portfolio", "/resume"];

  const staticRoutes = routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: SITE_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 1.0,
  }));

  const portfolioRoutes = portfolios.map((p) => ({
    url: `${BASE_URL}/portfolio/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const blogRoutes = blogs.map((b) => ({
    url: `${BASE_URL}/blog/${b.slug}`,
    lastModified: new Date(b.publicationDate),
    changeFrequency: "monthly" as const,
    priority: 0.8,
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
    ...blogRoutes,
  ];
}
