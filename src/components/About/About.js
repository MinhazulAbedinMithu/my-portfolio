import React from "react";
import Home from "../Home/Home";
import myImg from "../../images/minhaz-1.png";
import styled from "styled-components";
import * as GoIcons from "react-icons/go";
import * as FaIcons from "react-icons/fa";
import { Tabs, Tab, Row, Col, Nav } from "react-bootstrap";
import { EduData, SkillData, TrainData } from "./AboutData";

const Box = styled.div`
	color: white;
	background-color: #252525;
	border: 1px solid #2c2c35;
	border-radius: 10px;
	box-shadow: 5px 5px 5px #2c2c35;
	padding: 15px;
	margin: 15px 0;
	& h2.box-head {
		text-align: center;
		font-family: "Carter One", cursive;
		border-bottom: 1px solid yellow;
		margin-bottom: 25px;
	}
	& p {
		& .icon {
			color: yellow;
		}
		& span {
			color: #c3c3c3;
		}
	}
	& a {
		text-decoration: none;
		color: yellow;
		background-color: #072052;
		margin-left: 10px;
		margin-bottom: 10px;
		padding: 5px;
		border-bottom: 2px solid yellow;
		&:hover {
			color: green;
			border-bottom: 8px solid yellow;
			transition: all 0.3s;
		}
	}
`;
const SkillItem = styled.div`
	color: yellow;
	font-weight: bold;
	border: 2px solid #1b1b1b;
	border-radius: 50%;
	box-shadow: 5px 5px 10px #1b1b1b;
	align-items: center;
	text-align: center;
	padding: 15px;
	margin: 10px;
	& .nav-tabs .nav-item .nav-link {
		background-color: #0080ff;
		color: #fff;
	}
`;

const EduTabs = styled.div`
  
`;
const EduItem = styled.div`
	background-color: #202020;
	padding: 5px;
	margin: 5px;
	border-radius: 10px;
	& h4 {
		color: #5e6e00;
	}
	& ul {
		list-style-type: none;
		border-left: 2px solid yellow;
		padding-left: 25px;
		& li {
			font-weight: 700;
			& span {
				font-weight: 300;
				padding-left: 15px;
			}
		}
	}
`;

const About = () => {
	return (
		<div>
			<Home title="About Me" secImg={myImg} />
			<Box className="col-12 col-md-12">
				<h2>Minhazul Abedin</h2>
				<p>
					<GoIcons.GoLocation className="icon" /> <span>Dhaka, Bangladesh</span>
				</p>
				<p>
					I am a MERN-Stack WEB Developer. I am working with React, Node.js and
					MongoDB. I also have experience in developing static websites using
					HTML5, CSS3 and JavaScript (ES6). I am a quick learner. I believe in
					hard work and efficiency. That's why I am always ready to accomplish
					any task by working hard. I always focus on learning new technology.
					My goal is to become A World-Class Professional Web Developer.
					<a href="https://www.google.com/">More</a>
				</p>
			</Box>

			<Box>
				<h2 className="box-head">Skill Sets</h2>
				<Tab.Container id="left-tabs-example" defaultActiveKey="expert">
					<Row>
						<Col sm={3}>
							<Nav variant="pills" className="flex-column">
								<Nav.Item>
									<Nav.Link eventKey="expert">Expert</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="comfort">Comfortable</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="familiar">Familiar</Nav.Link>
								</Nav.Item>
							</Nav>
						</Col>
						<Col sm={9}>
							<Tab.Content>
								{SkillData.map((item, index) => {
									return (
										<Tab.Pane
											key={index}
											eventKey={item.key}
											className="float-left"
										>
											<SkillItem>
												<p>
													{item.icon} <span>{item.title}</span>{" "}
												</p>
											</SkillItem>
										</Tab.Pane>
									);
								})}
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>
			</Box>

			<Box>
				<h2 className="box-head">Education</h2>
				<EduTabs>
					<Tabs
						fill
						defaultActiveKey="education"
						transition={false}
						id="noanim-tab-example"
					>
						<Tab eventKey="education" title="Education" className="tab">
							{EduData.map((item, index) => {
								return (
									<EduItem key={index}>
										<h4>{item.title}</h4>
										<p>
											<FaIcons.FaCalendarAlt className="icon" />{" "}
											<span>{item.year}</span>{" "}
										</p>
										<ul>
											<li>
												Institution: <span>{item.Institution}</span>{" "}
											</li>
											<li>
												Department: <span>{item.Dept}</span>{" "}
											</li>
											<li>
												Result: <span>{item.result}</span>{" "}
											</li>
										</ul>
									</EduItem>
								);
							})}
						</Tab>
						<Tab eventKey="training" title="Training" className="tab">
							{TrainData.map((item, index) => {
								return (
									<EduItem key={index}>
										<h4>{item.title}</h4>
										<p>
											<FaIcons.FaCalendarAlt className="icon" />{" "}
											<span>{item.year}</span>{" "}
										</p>
										<ul>
											<li>
												Institution: <span>{item.Institution}</span>{" "}
											</li>
											<li>
												Batch: <span>{item.batch}</span>{" "}
											</li>
											<li>
												Details: <span>{item.details}</span>{" "}
											</li>
										</ul>
									</EduItem>
								);
							})}
						</Tab>
					</Tabs>
				</EduTabs>
			</Box>
		</div>
	);
};

export default About;
