import { NavLink } from "@remix-run/react";
import classNames from "classnames";
import { useState } from "react";

import { AppLogo } from "./AppLogo";

export const AppHeader = () => {
  // Hooks
  const [closed, setClosed] = useState(true);

  // Handlers
  const onClose = () => {
    setClosed(true);
  };

  const onToggle = () => {
    setClosed(!closed);
  };

  return (
    <header className={classNames("header hidden overflow-hidden print:hidden md:block", { closed })}>
      <div className="mx-auto flex h-full w-full max-w-5xl items-center justify-evenly md:text-sm">
        <button className="header-logo ml-4 gap-2 px-4 md:hidden" onClick={onToggle} title="Toggle menu" type="button">
          <img
            alt="Toggle Menu"
            className="max-h-4"
            height={16}
            loading="eager"
            src="/images/branding/menu.svg"
            width={19}
          />
        </button>
        <div className="flex-1 md:hidden" />

        <NavLink className="header-logo ml-4 gap-2 px-4" to="/">
          <AppLogo />
          <span className="sr-only">Home</span>
        </NavLink>

        <div className="flex-1" />

        <nav className="flex h-full flex-col md:flex-row">
          <NavLink className="header-link" onClick={onClose} prefetch="intent" to="/">
            About
          </NavLink>
          <NavLink className="header-link" onClick={onClose} prefetch="intent" to="/portfolio">
            Portfolio
          </NavLink>
          <NavLink className="header-link" onClick={onClose} prefetch="intent" to="/resume">
            Resume
          </NavLink>
          <NavLink className="header-link" onClick={onClose} prefetch="intent" to="/contact">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
