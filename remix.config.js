const baseConfig =
  process.env.NODE_ENV === "production"
    ? // when running the Netify CLI or building on Netlify, we want to use
      {
        server: "./server.js",
        serverBuildPath: ".netlify/functions-internal/server.js",
      }
    : // otherwise support running remix dev, i.e. no custom server
      undefined;

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  ...baseConfig,
  ignoredRouteFiles: [".*"],
  future: {
    unstable_tailwind: true,
    unstable_postcss: true,
    unstable_cssSideEffectImports: true,
    v2_routeConvention: true,
  },
  serverDependenciesToBundle: [/^react-github-graph/, /^react-goodreads-shelf/],
};
