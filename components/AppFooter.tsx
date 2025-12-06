"use client";

import { usePathname } from "next/navigation";
import { SITE_AUTHOR, SITE_YEAR, SOCIAL_GITHUB, SOCIAL_LINKEDIN } from "../config/constants";

export const AppFooter = () => {
	// Hooks
	const pathname = usePathname();

	// Setup
	const isResume = pathname.startsWith("/resume");

	// 🔌 Short Circuit
	if (isResume) return null;

	return (
		<footer className="justify-center gap-2 py-10 text-center text-sm print:hidden md:py-20">
			<div className="m-auto flex justify-center gap-4">
				<a className="p-2" href={SOCIAL_LINKEDIN} target="_blank" rel="noreferrer">
					<img
						alt="Follow me on LinkedIn"
						className="footer-social"
						height={16}
						loading="lazy"
						src="/images/svg/linkedin-dark.svg"
						width={16}
					/>
				</a>
				<a className="p-2" href={SOCIAL_GITHUB} target="_blank" rel="noreferrer">
					<img
						alt="Follow me on GitHub"
						className="footer-social"
						height={16}
						loading="lazy"
						src="/images/svg/github-dark.svg"
						width={16}
					/>
				</a>
			</div>
			<p className="text-color-copy-light">
				{SITE_YEAR} {SITE_AUTHOR}
			</p>
		</footer>
	);
};
