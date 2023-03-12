/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  // When running locally in development mode, we use the built in remix server
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  ignoredRouteFiles: [".*"],
  future: {
    unstable_tailwind: true,
    unstable_postcss: true,
    unstable_cssSideEffectImports: true,
    v2_routeConvention: true,
  },
  serverDependenciesToBundle: [/^react-github-graph/, /^react-goodreads-shelf/],
};
