/**
 * Shared build-time configuration.
 *
 * Reads from the Vite-loaded env (`.env`, prefixed vars) first, then from
 * `process.env` (Netlify dashboard variables), with the same fallbacks the
 * old Next.js `config/settings.server.ts` used.
 */
const env = import.meta.env as unknown as Record<string, string | undefined>;
const processEnv = typeof process !== "undefined" ? (process.env as Record<string, string | undefined>) : {};

function absoluteUrl(candidate: string | undefined, fallback: string): string {
  return candidate && /^https?:\/\//.test(candidate) ? candidate : fallback;
}

/** The deployed site URL, from `PUBLIC_SITE_URL` or `BASE_URL`. */
export const SITE_URL = absoluteUrl(env.PUBLIC_SITE_URL ?? processEnv.BASE_URL, "https://kylekarpack.com");

/** Google Analytics measurement id, from `PUBLIC_GA_TRACKING_ID` or `GA_TRACKING_ID`. */
export const GA_TRACKING_ID =
  env.PUBLIC_GA_TRACKING_ID ?? processEnv.GA_TRACKING_ID ?? env.GA_TRACKING_ID ?? "G-SJJCJWNVY2";
