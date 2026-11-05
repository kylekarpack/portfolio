import type { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  path: string;
  className?: string;
  children: ReactNode;
}

/**
 * Server-rendered link with `active` class when it matches the current path,
 * mirroring the old React `NavLink` (which only needed hydration for this).
 * The current path is passed down from the Astro shell at build time.
 */
export const NavLink = ({ href, path, className = "", children }: NavLinkProps) => {
  const isActive = (path.replace(/\/+$/, "") || "/") === href;
  return <a href={href} className={isActive ? `${className} active` : className}>{children}</a>;
};
