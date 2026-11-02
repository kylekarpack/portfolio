import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname, "."),
      "~": resolve(import.meta.dirname, "./app"),
    },
  },

  test: {
    coverage: {
      exclude: ["node_modules", "public/build/**/*", "**/*.test.{ts,tsx}"],
      include: ["app/**/*.{ts,tsx}"],
      reporter: ["text", "json", "html"],
    },
    globals: true,
    environment: "happy-dom",
    exclude: ["build", "node_modules", "public", ".templates/**"],
    setupFiles: "./test/setup.ts",
  },
});
