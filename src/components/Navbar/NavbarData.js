import React from "react";
import * as FaIcons from "react-icons/fa";

export const NavbarData = [
	{
		title: "About",
		path: "/about",
		icon: <FaIcons.FaUser />,
		cName: "nav-text",
	},
	{
		title: "Projects",
		path: "/projects",
		icon: <FaIcons.FaReact />,
		cName: "nav-text",
	},
	{
		title: "Blogs",
		path: "/blogs",
		icon: <FaIcons.FaBloggerB />,
		cName: "nav-text",
	},
	{
		title: "Contact",
		path: "/contact",
		icon: <FaIcons.FaEnvelopeOpenText />,
		cName: "nav-text",
	},
];
