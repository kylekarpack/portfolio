import { useLocation } from "@remix-run/react";
import {
  SITE_AUTHOR,
  SITE_YEAR,
  SOCIAL_GITHUB,
  SOCIAL_LINKEDIN,
  SOCIAL_TWITTER,
} from "../config/constants";

export const AppFooter = () => {
  // Hooks
  const { pathname } = useLocation();

  // Setup
  const isResume = pathname.startsWith("/resume");

  // 🔌 Short Circuit
  if (isResume) return null;

  return (
    <footer className="mt-10 justify-center gap-2 text-center text-sm print:hidden md:mt-20">
      <div className="m-auto flex justify-center gap-4">
        <a
          className="p-2"
          href={SOCIAL_LINKEDIN}
          target="_blank"
          rel="noreferrer">
          <img
            alt="Follow me on LinkedIn"
            className="footer-social"
            height={16}
            loading="lazy"
            src="/images/svg/linkedin-dark.svg"
            width={16}
          />
        </a>
        <a
          className="p-2"
          href={SOCIAL_GITHUB}
          target="_blank"
          rel="noreferrer">
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
      <p className="font-font-monospace">
        &copy; {SITE_YEAR}, {SITE_AUTHOR}
      </p>
    </footer>
  );
};
