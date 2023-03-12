/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  // When running locally in development mode, we use the built in remix
  // server. This does not understand the vercel lambda module format,
  // so we default back to the standard build output.
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  ignoredRouteFiles: [".*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "api/index.js",
  // publicPath: "/build/",
  // devServerPort: 8002
  future: {
    unstable_tailwind: true,
    unstable_postcss: true,
    unstable_cssSideEffectImports: true,
    v2_routeConvention: true,
  },
  serverDependenciesToBundle: [/^react-github-graph/, /^react-goodreads-shelf/],
};
