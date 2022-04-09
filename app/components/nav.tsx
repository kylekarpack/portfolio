import { Link } from "@remix-run/react";
import { FunctionComponent } from "react";

export const Nav: FunctionComponent = () => {

	return <nav>
		<Link to="/">Home</Link>
		<Link to="/about">About</Link>
		<Link to="/about">Resume</Link>
		<Link to="/portfolio">Portfolio</Link>
		<Link to="/contact">Contact</Link>
	</nav>;
}