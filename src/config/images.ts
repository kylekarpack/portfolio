/**
 * Image CDN selection, shared by `AppImage` and the markdown pipeline.
 *
 * - Default: Netlify's image CDN (`/.netlify/images?...`).
 * - `PUBLIC_IMAGE_CDN=cloudflare`: Cloudflare's `/cdn-cgi/image/...`
 *   transforms (requires the production domain on a Cloudflare **zone**
 *   with transformations enabled; not usable on `*.workers.dev` or in
 *   local `wrangler dev`).
 * - `PUBLIC_IMAGE_CDN=off`: plain originals with no transforms (used by the
 *   `pnpm run look` wrangler preview build).
 */
type ImageCdn = "netlify" | "cloudflare" | "off";

const envCdn = import.meta.env.PUBLIC_IMAGE_CDN as ImageCdn | undefined;
export const IMAGE_CDN: ImageCdn = envCdn === "off" ? "off" : (envCdn ?? "netlify");

export const imageOptions =
  IMAGE_CDN === "netlify"
    ? { cdn: "netlify" as const, operations: { netlify: { quality: 50 } } }
    : IMAGE_CDN === "cloudflare"
      ? { cdn: "cloudflare" as const, operations: { cloudflare: { quality: 50 } } }
      : { cdn: undefined, operations: undefined };
