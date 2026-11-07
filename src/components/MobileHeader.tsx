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

const menuScript = `(function () {
  var header = document.getElementById("mobile-header");
  var toggle = document.getElementById("menu-toggle");
  if (header && toggle) {
    toggle.addEventListener("click", function () {
      header.classList.toggle("closed");
    });
  }
})();`;

/**
 * Mobile header. Same markup as before, minus hydration — the menu toggle is
 * a few lines of vanilla JS flipping the CSS `closed` class. The nav is
 * always rendered and hidden by the fixed header height while closed.
 */
export const MobileHeader = ({ path }: { path: string }) => (
  <>
    <header id="mobile-header" className="header overflow-hidden print:hidden md:hidden closed">
      <div className="flex h-14 w-full items-center md:text-sm">
        <button
          className="header-logo ml-2 h-full gap-2 px-4 md:hidden"
          id="menu-toggle"
          title="Toggle menu"
          type="button">
          <img alt="Toggle Menu" className="max-h-4" height={16} loading="eager" src="/images/svg/menu.svg" width={19} />
        </button>
        <div className="flex-1 md:hidden" />

        <NavLink path={path} className="header-logo ml-4 flex h-full items-center gap-2 px-4" href="/">
          <Logo />
          <span className="sr-only">Home</span>
        </NavLink>

        <div className="flex-1 pl-20" />
      </div>

      <div className="h-full md:flex-row">
        <nav className="mt-14 flex flex-col items-center gap-4 text-2xl md:flex-row">
          {links.map((link) => (
            <NavLink path={path} className="header-link" key={link.href} href={link.href}>
              {link.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
    <script dangerouslySetInnerHTML={{ __html: menuScript }} />
  </>
);
