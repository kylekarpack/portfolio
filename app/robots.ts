import { MetadataRoute } from "next";
import { BASE_URL } from "@/config/settings.server";

export const dynamic = "force-static";
export const revalidate = 86400;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/api",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
