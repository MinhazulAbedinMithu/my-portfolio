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

const FullBody = styled.body`
	background-color: #191923;
	padding: 15px 0;
	font-family: "Roboto", sans-serif;
	& .content-box {
		position: relative;
		background-color: #1e1e28;
		padding-top: 15px;
	}
`;

function App() {
	return (
		<FullBody>
			<Router>
				<div className="container">
					<div className="row">
						<ProfileShort />
						<Switch>
							<div className="col-md-9 content-box">
								<Route path="/about" component={About} />
								<Route path="/projects" component={Projects} />
								<Route path="/blogs" component={Blog} />
								<Route path="/contact" component={Contact} />
								<Route exact path="/" component={About} />
							</div>
						</Switch>
						<Navbar />
					</div>
				</div>
			</Router>
		</FullBody>
	);
}

export default App;
