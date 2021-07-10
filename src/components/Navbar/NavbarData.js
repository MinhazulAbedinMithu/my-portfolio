import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GrIcons from "react-icons/gr";

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
