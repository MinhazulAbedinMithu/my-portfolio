import React, { useState } from "react";
import "./Navbar.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { NavbarData } from "./NavbarData";
import styled from "styled-components";

const NavbarNav = styled.div`
	position: fixed;
	top: 15px;
	right: 22%;
	height: 100vh;
	width: 100px;
	background-color: black;

	.menu-bars {
		background-color: rgb(0, 0, 0);
		padding: 0 10px;
		font-size: 60px;
		color: yellow;
	}
`;
const Nav = styled.nav`
	background-color: black;
	padding: 50px 10px;
	margin: 0 auto;
`;
const NavUl = styled.ul`
	list-style: none;
	margin: 0;
	text-align: center;
	& li {
		color: white;
		margin: 40px 0;
		& :hover {
			color: yellow;
		}
		& .tooltip{
			color: white;
			background-color: black;
			border: 1px solid yellow;
		}
	}
`;

// <Link to="#" className="menu-bars" sidebar>
// 					{sideBar ? (
// 						<AiIcons.AiOutlineClose onClick={showNavbar} />
// 					) : (
// 						<FaIcons.FaBars onClick={showNavbar} />
// 					)}
// 				</Link>
export const Navbar = () => {
	const [sideBar, setSiteBar] = useState(false);
	const showNavbar = () => setSiteBar(!sideBar);

	return (
		<>
			<NavbarNav className="navbar">
				<Nav className={sideBar ? "nav-menu active" : "nav-menu"}>
					<NavUl className="navbar-items">
						{NavbarData.map((item, index) => {
							return (
								<li key={index} className={`${item.cName} position-relative`}>
									<Link to={item.path}>{item.icon}</Link>
									<span className="tooltip">{item.title}</span>
								</li>
							);
						})}
					</NavUl>
				</Nav>
			</NavbarNav>
		</>
	);
};
