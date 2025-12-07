import { AppFooter } from "@/components/AppFooter";
import { AppHeader } from "@/components/AppHeader";
import { AppHeaderMobile } from "@/components/AppHeaderMobile";
import Pwa from "@/components/Pwa";
import { SITE_DESCRIPTION, SITE_SHARE_IMAGE, SITE_TITLE, SITE_URL } from "@/config/constants";
import { GA_TRACKING_ID } from "@/config/settings.server";
import "@/styles/index.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}${SITE_SHARE_IMAGE}`],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="icon" href="/images/favicon/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <Pwa />
      </head>
      <body>
        <AppHeader />
        <AppHeaderMobile />
        <main>{children}</main>
        <AppFooter />
        {GA_TRACKING_ID && <GoogleAnalytics gaId={GA_TRACKING_ID} />}
      </body>
    </html>
  );
}
