"use client";

import classNames from "classnames";
import { FunctionComponent, useState } from "react";

import { AppLogo } from "./AppLogo";
import { NavLink } from "./NavLink";

export const AllNavLinks: FunctionComponent<{ onClose: () => void }> = ({ onClose }) => (
	<>
		<NavLink className="header-link" onClick={onClose} href="/">
			Home
		</NavLink>
		<NavLink className="header-link" onClick={onClose} href="/about">
			About
		</NavLink>
		<NavLink className="header-link" onClick={onClose} href="/portfolio">
			Portfolio
		</NavLink>
		<NavLink className="header-link" onClick={onClose} href="/blog">
			Blog
		</NavLink>
		<NavLink className="header-link" onClick={onClose} href="/resume">
			Resume
		</NavLink>
		<NavLink className="header-link" onClick={onClose} href="/contact">
			Contact
		</NavLink>
	</>
);

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
		<header className={classNames("header overflow-hidden print:hidden md:block", { closed })}>
			<div className="mx-auto flex h-full w-full max-w-5xl items-center justify-evenly md:text-sm">
				<NavLink className="header-logo ml-4 gap-2 px-4" href="/">
					<AppLogo />
					<span className="sr-only">Home</span>
				</NavLink>

				<div className="flex-1" />

				<nav className="flex h-full flex-col md:flex-row">
					<AllNavLinks onClose={onClose} />
				</nav>
			</div>
		</header>
	);
};
