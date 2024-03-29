import { NavLink } from "@remix-run/react";
import classNames from "classnames";
import { useState } from "react";
import { AllNavLinks } from "./AppHeader";
import { AppLogo } from "./AppLogo";

export const AppHeaderMobile = () => {
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
    <header
      className={classNames("header overflow-hidden print:hidden md:hidden", {
        closed,
      })}>
      <div className="flex h-14 w-full items-center md:text-sm">
        <button
          className="header-logo ml-2 h-full gap-2 px-4 md:hidden"
          onClick={onToggle}
          title="Toggle menu"
          type="button">
          <img
            alt="Toggle Menu"
            className="max-h-4"
            height={16}
            loading="eager"
            src="/images/svg/menu.svg"
            width={19}
          />
        </button>
        <div className="flex-1 md:hidden" />

        <NavLink className="header-logo ml-4 flex h-full items-center gap-2 px-4" to="/">
          <AppLogo />
          <span className="sr-only">Home</span>
        </NavLink>

        <div className="flex-1 pl-20" />
      </div>

      <div className="h-full md:flex-row">
        {!closed && (
          <nav className="mt-14 flex flex-col items-center gap-4 text-2xl md:flex-row">
            <AllNavLinks onClose={onClose} />
          </nav>
        )}
      </div>
    </header>
  );
};
