import type { MetaDescriptor } from "@remix-run/node";
import { SITE_AUTHOR, SITE_SHARE_IMAGE, SITE_TITLE, SITE_URL, SITE_YEAR } from "./config/constants";

export interface MetaDataOptions {
  description?: string;
  image?: string;
  title?: string;
}

const defaults: MetaDataOptions = {
  description: `The portfolio of ${SITE_AUTHOR}, a Software Engineer in Seattle`,
  image: `${SITE_URL}${SITE_SHARE_IMAGE}`,
  title: SITE_TITLE,
};

export const getMetaDataBase = (): MetaDescriptor => ({
  charset: "utf-8",
  author: SITE_AUTHOR,
  "color-scheme": "dark light",
  "theme-color": "#43a9d1",
  viewport: `initial-scale=1, viewport-fit=cover, width=device-width`,
  "mobile-web-app-capable": "yes",
  "apple-mobile-web-app-status-bar-style": "black",
  "apple-mobile-web-app-title": `${SITE_YEAR} Portfolio`,
});

export const getMetaData = (options: MetaDataOptions): MetaDescriptor => ({
  ...getMetaDataBase(),

  // SEO Meta Tags
  description: options.description || defaults.description,
  image: options.image || defaults.image,
  name: options.title || defaults.title,
  title: options.title || defaults.title,

  // Open Graph
  "og:description": options.description || defaults.description,
  "og:image": options.image || defaults.image,
  "og:title": options.title || defaults.title,
  "og:type": "website",

  // Twitter
  "twitter:card": `summary_large_image`,
  "twitter:description": options.description || defaults.description,
  "twitter:image": options.image || defaults.image,
  "twitter:title": options.title || defaults.title,
});
