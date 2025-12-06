import type { Metadata } from "next";
import { cookies } from "next/headers";
import Script from "next/script";
import classNames from "classnames";
import { AppFooter } from "@/components/AppFooter";
import { AppHeader } from "@/components/AppHeader";
import { AppHeaderMobile } from "@/components/AppHeaderMobile";
import Pwa from "@/components/Pwa";
import { SITE_DESCRIPTION, SITE_SHARE_IMAGE, SITE_TITLE, SITE_URL } from "@/config/constants";
import { GA_TRACKING_ID } from "@/config/settings.server";

import "../styles/index.css";

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
	const cookieStore = await cookies();
	const theme = cookieStore.get("theme")?.value || "light";
	const isDark = theme === "dark";
	const cssComponent = classNames(theme, { dark: isDark });

	return (
		<html lang="en" className={cssComponent}>
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
				{GA_TRACKING_ID && (
					<>
						<Script
							src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
							strategy="afterInteractive"
						/>
						<Script id="google-analytics" strategy="afterInteractive">
							{`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `}
						</Script>
					</>
				)}
			</body>
		</html>
	);
}
