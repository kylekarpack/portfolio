import { SITE_URL } from "../../config/constants";
import type { APIRoute } from "astro";

/** Robots file, mirroring the old `app/robots.ts`. */
export const GET: APIRoute = async () => {
  const body = `User-agent: *
Disallow: /api

Sitemap: ${SITE_URL}/sitemap.xml
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
