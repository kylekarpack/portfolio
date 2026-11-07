import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname, "."),
    },
  },

  test: {
    coverage: {
      exclude: ["node_modules", "public/**", "**/*.test.{ts,tsx}", ".astro/**", "dist/**"],
      include: ["src/**/*.{ts,tsx}"],
      reporter: ["text", "json", "html"],
    },
    globals: true,
    environment: "happy-dom",
    exclude: ["build", "dist", "node_modules", "public", ".templates/**", ".astro/**"],
    setupFiles: "./test/setup.ts",
  },
});
