import { NavLink } from "./NavLink";
import { Logo } from "./Logo";

const links = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/portfolio", title: "Portfolio" },
  { href: "/blog", title: "Blog" },
  { href: "/resume", title: "Resume" },
  { href: "/contact", title: "Contact" },
];

/**
 * Desktop header. The old React version kept `closed` in state but never
 * opened it, so it renders statically with the `closed` class.
 */
export const Header = ({ path }: { path: string }) => (
  <header className="header overflow-hidden print:hidden md:block closed">
    <div className="mx-auto flex h-full w-full max-w-5xl items-center justify-evenly md:text-sm">
      <NavLink path={path} className="header-logo ml-4 gap-2 px-4" href="/">
        <Logo />
        <span className="sr-only">Home</span>
      </NavLink>

      <div className="flex-1" />

      <nav className="flex h-full flex-col md:flex-row">
        {links.map((link) => (
          <NavLink path={path} className="header-link" key={link.href} href={link.href}>
            {link.title}
          </NavLink>
        ))}
      </nav>
    </div>
  </header>
);
