"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { ReactNode } from "react";

interface NavLinkProps {
	href: string;
	children: ReactNode;
	className?: string;
	onClick?: () => void;
	[key: string]: any;
}

export const NavLink = ({ href, children, className, ...props }: NavLinkProps) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={classNames(className, { active: isActive })}
			{...props}
		>
			{children}
		</Link>
	);
};
