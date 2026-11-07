interface ImportMetaEnv {
  readonly BASE_URL?: string;
  readonly GA_TRACKING_ID?: string;
  readonly NEXT_PUBLIC_MAPBOX_API_KEY?: string;
  readonly NEXT_PUBLIC_HARDCOVER_API_KEY?: string;
  /** Image CDN: "netlify" (default), "cloudflare", or "off" (wrangler look build). */
  readonly PUBLIC_IMAGE_CDN?: "netlify" | "cloudflare" | "off";
}
