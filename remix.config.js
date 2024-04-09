/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  ignoredRouteFiles: [".*"],
  future: {
    unstable_tailwind: true,
    unstable_postcss: true,
    unstable_cssSideEffectImports: true,
    v2_routeConvention: true,
    v2_dev: true,
  },
  serverDependenciesToBundle: [/^react-github-graph/, /^react-goodreads-shelf/],
  serverBuildDirectory: "netlify/functions/server/build",
};
