[![Netlify Status](https://api.netlify.com/api/v1/badges/a0b47af2-a2ae-4b1f-b405-9ad2a442daaf/deploy-status)](https://app.netlify.com/sites/kylekarpack/deploys)

# Kyle Karpack's Portfolio

The professional portfolio of Kyle Karpack

**Technology:**

- [Astro](https://astro.build) (static output, React islands)
- [React](https://reactjs.org)
- [TailwindCSS](https://tailwindcss.com)
- [TanStack Highlight][highlight]
- [Netlify][netlify]

## Setup

```bash
# Add the following variables to your .env file
NEXT_PUBLIC_MAPBOX_API_KEY=<mapbox token>
NEXT_PUBLIC_HARDCOVER_API_KEY=<hardcover token>

# Optional: image CDN for non-Netlify builds
#   PUBLIC_IMAGE_CDN=cloudflare  → Cloudflare /cdn-cgi/image transforms
#   PUBLIC_IMAGE_CDN=off         → plain originals (wrangler look preview)
# Default: netlify

# Install dependencies
pnpm install

# Start developing
pnpm dev
```

## Image CDNs

`src/config/images.ts` selects the image CDN at build time:

- **Netlify** (default) — `/.netlify/images?...` transforms; used by the Netlify build.
- **Cloudflare** — `PUBLIC_IMAGE_CDN=cloudflare` generates `/cdn-cgi/image/...` URLs.
  Requires the production domain on a Cloudflare zone with
  [Transformations](https://developers.cloudflare.com/images/transform-images/transform-via-url/)
  enabled (free plan: 5,000 unique transformations/month). Not available on
  `*.workers.dev` subdomains.
- **Off** — plain originals; used by `pnpm run look` for local wrangler
  previews (`wrangler dev` can't transform images).

<!-- Links -->

[highlight]: https://tanstack.com/highlight "TanStack Highlight"
[netlify]: https://netlify.com "Netlify"
