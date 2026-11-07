import { getCollection } from "astro:content";
import { SITE_UPDATED, SITE_URL } from "../../config/constants";
import type { APIRoute } from "astro";

const xmlEscape = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

interface SitemapEntry {
  url: string;
  lastModified: Date;
  changeFrequency: "monthly";
  priority: number;
}

/** Sitemap generation, mirroring the old `app/sitemap.ts`. */
export const GET: APIRoute = async () => {
  const portfolios = await getCollection("portfolio");
  const blogs = await getCollection("blog");

  const routes = ["/about", "/about/reading", "/blog", "/contact", "/portfolio", "/resume"];

  const staticRoutes: SitemapEntry[] = routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: SITE_UPDATED,
    changeFrequency: "monthly",
    priority: 1.0,
  }));

  const portfolioRoutes: SitemapEntry[] = portfolios.map((p) => ({
    url: `${SITE_URL}/portfolio/${p.id}`,
    lastModified: new Date(p.data.date),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const blogRoutes: SitemapEntry[] = blogs.map((b) => ({
    url: `${SITE_URL}/blog/${b.id}`,
    lastModified: new Date(b.data.publicationDate),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const entries: SitemapEntry[] = [
    {
      url: SITE_URL,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...staticRoutes,
    ...portfolioRoutes,
    ...blogRoutes,
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) =>
      `  <url>\n    <loc>${xmlEscape(entry.url)}</loc>\n    <lastmod>${entry.lastModified.toISOString()}</lastmod>\n    <changefreq>${entry.changeFrequency}</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
