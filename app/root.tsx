import type { DataFunctionArgs, LinksFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData, useRouteError } from "@remix-run/react";
import classnames from "classnames";
import { AppFooter } from "~/components/AppFooter";
import { AppHeader } from "~/components/AppHeader";
import { AppHeaderMobile } from "~/components/AppHeaderMobile";
import { SITE_DESCRIPTION, SITE_SHARE_IMAGE, SITE_TITLE, SITE_URL } from "~/config/constants";
import { BASE_URL } from "~/config/settings.server";
import { cookieTheme } from "~/cookies.server";
import { useIntro } from "~/hooks/useIntro";
import { getMetaData } from "~/metadata";

import styles from "~/styles/index.css?url";
import Pwa from "./components/Pwa";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
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

export const meta: MetaFunction = () => [
  {
    ...getMetaData({
      description: SITE_DESCRIPTION,
      image: `${SITE_URL}${SITE_SHARE_IMAGE}`,
      title: SITE_TITLE,
    }),
  },
];

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
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        Something went wrong: {(error as any)?.data}
        <Scripts />
      </body>
    </html>
  );
}
