import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import styled from "styled-components";
import ProfileShort from "./components/ProfileShort/ProfileShort";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { mobile } from "./responsive";
import { useState } from "react";

const FullBody = styled.body`
	background-color: #191923;
	min-height: 100vh;
	padding: 15px 0;
	font-family: "Roboto", sans-serif;
	& .content-box {
		position: relative;
		margin: 0 auto;
		background-color: #1e1e28;
		padding-top: 15px;
	}
`;

const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 99;
	width: 45%;
	margin: 0 auto;
	background-color: #18181f;
	border-radius: 8px;
	box-shadow: 2px 3px 15px #f9f9f9;
	display: flex;
	height: 80px;
	align-items: center;
	justify-content: space-between;

	${mobile({ width: '100%', borderRadius: "0" })}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: left;
`;

const Center = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Logo = styled.div`
	width: 100px;
`;
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: right;
`;

const Button = styled.button`
	display: none;
	border: none;
	color: #F8F821;
	font-weight: 800;
	font-size: 30px;
	background-color: transparent;
	${mobile({ display: "block" })}
`;

const Img = styled.img`
	width: 80px;
`;

function App() {
	const [showNav, setShowNav] = useState(false);
	const [showProfile, setShowProfile] = useState(false);

	return (
		<FullBody>
			<Router>
				<div className="container">
					<div className="row">
						<Container>
							<Left>
								<Button onClick={(e) => setShowProfile(!showProfile)}>
									<AiOutlineMenuFold />
								</Button>
							</Left>
							<Center>
								<Logo>
									<Img src="https://i.ibb.co/xCbzjLT/logo.png" />
								</Logo>
							</Center>
							<Right>
								<Button onClick={(e) => setShowNav(!showNav)}>
									<AiOutlineMenuUnfold />
								</Button>
							</Right>
						</Container>
					</div>
					<div className="row">
						<ProfileShort showProfile={showProfile}/>
						<Switch>
							<div className="col-md-9 content-box">
								<Route path="/about" component={About} />
								<Route path="/projects" component={Projects} />
								<Route path="/blogs" component={Blog} />
								<Route path="/contact" component={Contact} />
								<Route exact path="/" component={About} />
							</div>
						</Switch>
						<Navbar showNav={showNav}/>
					</div>
				</div>
			</Router>
		</FullBody>
	);
}

export default App;
