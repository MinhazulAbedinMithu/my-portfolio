import React, { useState } from "react";
import "./Navbar.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { NavbarData } from "./NavbarData";
import styled from "styled-components";

const NavbarNav = styled.div`
	position: absolute;
	top: 2%;
	right: 13.5%;
	margin: 0;

	.menu-bars {
		background-color: rgb(0, 0, 0);
		height: ${(props) => (props.sidebar ? "100vh" : "100px")};
		/* height: 95vh; */
		padding: 0 15px;
		font-size: 60px;
		color: yellow;
	}
`;
const Nav = styled.nav`
	background-color: black;
	padding: 40px 20px;
	margin: 0;
`;
const NavUl = styled.ul`
	list-style: none;
	margin: 0;
	text-align: center;
	& li{
		color: white;
		& :hover{
			color: yellow;
		}
	}
`;

export const Navbar = () => {
	const [sideBar, setSiteBar] = useState(false);
	const showNavbar = () => setSiteBar(!sideBar);

	return (
		<>
			<NavbarNav className="navbar col-md-1">
				<Link to="#" className="menu-bars" sidebar>
					{sideBar ? (
						<AiIcons.AiOutlineClose onClick={showNavbar} />
					) : (
						<FaIcons.FaBars onClick={showNavbar} />
					)}
				</Link>
				{sideBar && (
					<Nav className={sideBar ? "nav-menu active" : "nav-menu"}>
						<NavUl className="navbar-items">
							{NavbarData.map((item, index) => {
								return (
									<li key={index} className={item.cName}>
										<Link to={item.path}>{item.icon}</Link>
									</li>
								);
							})}
						</NavUl>
					</Nav>
				)}
			</NavbarNav>
		</>
	);
};
