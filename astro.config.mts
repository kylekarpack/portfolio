import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { SITE_URL } from "./src/config/site";

/**
 * Exposes build-time env with Vite's `import.meta.env` (prefixed vars);
 * unprefixed dashboard variables (e.g. Netlify `BASE_URL`) are read via
 * `process.env` in `src/config/site.ts`.
 */
const envPrefix = ["NEXT_PUBLIC_", "PUBLIC_"];

export default defineConfig({
  site: SITE_URL,
  output: "static",
  integrations: [react()],
  vite: {
    envPrefix,
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": new URL(".", import.meta.url).pathname,
        "~": new URL(".", import.meta.url).pathname,
      },
    },
  },
});
