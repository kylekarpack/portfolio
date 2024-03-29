import { cssBundleHref } from "@remix-run/css-bundle";
import type { DataFunctionArgs, LinksFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useCatch, useLoaderData } from "@remix-run/react";
import classnames from "classnames";
import { AppFooter } from "~/components/AppFooter";
import { AppHeader } from "~/components/AppHeader";
import { AppHeaderMobile } from "~/components/AppHeaderMobile";
import { SITE_DESCRIPTION, SITE_SHARE_IMAGE, SITE_TITLE, SITE_URL } from "~/config/constants";
import { BASE_URL } from "~/config/settings.server";
import { cookieTheme } from "~/cookies";
import { useIntro } from "~/hooks/useIntro";
import { usePageTracking } from "~/hooks/usePageTracking";
import { getMetaData } from "~/metadata";

import styles from "~/styles/index.css";
import Pwa from "./components/Pwa";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: cssBundleHref! },
    { rel: "stylesheet", href: styles },
  ];
};

export const loader = async (args: DataFunctionArgs) => {
  const { request } = args;

  const baseUrl = BASE_URL;
  const canonical = request.url;
  const header = request.headers.get("cookie");
  const cookie = (await cookieTheme.parse(header)) ?? {};
  const { theme = "light" } = cookie;

  return json({ baseUrl, canonical, theme });
};

export const meta: MetaFunction = (args) => ({
  ...getMetaData({
    canonical: args.data?.canonical,
    description: SITE_DESCRIPTION,
    image: `${SITE_URL}${SITE_SHARE_IMAGE}`,
    title: SITE_TITLE,
  }),
});

export default function App() {
  // Hooks
  const data = useLoaderData<typeof loader>();

  // Setup
  const { canonical, theme } = data;
  const isDark = theme === "dark";
  const favicon = "/images/favicon/favicon.ico";
  const manifest = "/manifest.json";

  // Styles
  const cssComponent = classnames(theme ?? "", isDark);

  // Life Cycle
  useIntro();
  usePageTracking();

  return (
    <html lang="en" className={cssComponent}>
      <head>
        <link href={canonical} rel="canonical" />
        <link href={favicon} rel="favicon" />
        <link href={favicon} rel="icon" type="image/svg+xml" />
        <link href={favicon} rel="mask-icon" type="image/svg+xml" />
        <link href={manifest} rel="manifest" />
        <Pwa />

        <Links />
        <Meta />
      </head>
      <body>
        <AppHeader />
        <AppHeaderMobile />
        <main>
          <Outlet />
        </main>
        <AppFooter />

        {/* Remix */}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  // Hooks
  const caught = useCatch();

  // Setup
  const favicon = "/images/svg/logo.svg";
  const manifest = "/manifest.json";

  return (
    <html>
      <head>
        <title>Error</title>
        <Meta />
        <link href={favicon} rel="apple-touch-icon" sizes="48x48" />
        <link href={favicon} rel="favicon" />
        <link href={favicon} rel="icon" type="image/svg+xml" />
        <link href={favicon} rel="mask-icon" type="image/svg+xml" />
        <link href={manifest} rel="manifest" />
        <Links />
      </head>

      <body>
        <AppHeader />
        <AppHeaderMobile />

        <main>
          <div className="mx-auto max-w-5xl pt-10">
            <h1>
              {caught.status} {caught.statusText} - Error
            </h1>
            <pre>{JSON.stringify(caught, null, 4)}</pre>
          </div>
        </main>

        <AppFooter />

        {/* Analytics */}
        {/* <TrackingGA id={googleAnalytics} /> */}

        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: unknown }) {
  // Setup
  const favicon = "/images/svg/logo.svg";
  const manifest = "/manifest.json";

  return (
    <html>
      <head>
        <title>Error</title>
        <Meta />
        <link href={favicon} rel="apple-touch-icon" sizes="48x48" />
        <link href={favicon} rel="favicon" />
        <link href={favicon} rel="icon" type="image/svg+xml" />
        <link href={favicon} rel="mask-icon" type="image/svg+xml" />
        <link href={manifest} rel="manifest" />
        <Links />
      </head>

      <body>
        <div className="m-auto flex h-screen max-w-5xl flex-col justify-center">
          <h1 className="mb-4 text-2xl">Error</h1>
          <p>Something went wrong</p>
          <pre>{JSON.stringify(error, null, 4)}</pre>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
