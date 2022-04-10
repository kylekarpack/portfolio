import { Link } from "@remix-run/react";
import type { FunctionComponent } from "react";

export const Nav: FunctionComponent = () => {
  return (
    <header>
      <nav className="container flex">
        <Link className="p-4" to="/">Home</Link>
        <Link className="p-4" to="/about">About</Link>
        <Link className="p-4" to="/resume">Resume</Link>
        <Link className="p-4" to="/portfolio">Portfolio</Link>
        <Link className="p-4" to="/contact">Contact</Link>
      </nav>
    </header>
  );
};
