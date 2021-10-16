import React from "react";
import styled from "styled-components";
import "./AboutShort.css";
import ProImg from "../../images/profilePic.png";
import * as FaIcons from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ChangingProgressProvider from "./ChangeProgressProvider";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { mobile } from "../../responsive";
// import { ProgressBar } from "react-bootstrap";

const skillData1 = [
	{
		title: "html",
		process: 95,
		cName: "progress-bar",
	},
	{
		title: "css",
		process: 95,
		cName: "progress-bar",
	},
	{
		title: "js",
		process: 55,
		cName: "progress-bar",
	},
	{
		title: "react",
		process: 95,
		cName: "progress-bar",
	},
	{
		title: "Node",
		process: 95,
		cName: "progress-bar",
	},
	{
		title: "Mongo",
		process: 95,
		cName: "progress-bar",
	},
];
const skillData2 = [
	"Bootstrap, Material UI",
	"Styled-Components, Sass",
	"Tailwind CSS",
	"Firebase authentication",
	"Git Knowledge",
];

const WrapperAbout = styled.div`
	margin: 0;
	padding: 0;
	height: 100vh;
	position: fixed;
	top: 15px;
	left: 10%;
	width: 100%;
	transition: all 0.5s ease;
	display: ${(props) => !props.show && "none"};

	${mobile({
		width: "100%",
		position: "absolute",
		top: "90px",
		left: "0%",
		right: "0%",
		zIndex: "5",
	})}

	/* background-color: #f4dd09; */
	& .pro-box {
		width: 100%;
		text-align: center;
		background-color: #25252f;
		color: white;
		padding: 10px 0;
		box-shadow: 2px 5px 5px rgb(41, 41, 41);
		& .contact {
			border-top: 2px solid rgb(59, 59, 59);

			/* border-bottom: 2px solid lightgray; */
			padding: 5px 0;
			& .social {
				& .icon {
					font-size: 40px;
					color: #f4dd09;
					padding: 5px;
				}
			}
			& .button {
				background-color: transparent;
				border: 2px solid yellow;
				color: white;
				font-weight: bold;
				margin-top: 10px;
			}
		}
	}
`;
const AboutImg = styled.img`
	height: 150px;
	width: 150px;
	margin: 0 auto;
	border: 1px solid green;
	background-color: rgb(09, 80, 97);
	border-radius: 50%;
`;
const SkillBox = styled.div`
	background-color: #20202a;
	color: white;
	padding: 15px 0;
	& h2 {
		text-align: center;
		font-family: cursive;
		color: yellow;
		font-weight: 700;
		border-bottom: 1px solid #f4dd09;
	}
`;
const SkillSet = styled.div`
	padding: 10px 0;
	& ul {
		list-style: none;
		padding: 10px;
		margin: 0;
		& li {
			padding: 5px 0;
			& .icon {
				color: #f4dd09;
			}
		}
	}
`;
const ProgressItem = styled.div``;
const CvButton = styled.div`
	text-align: center;
	background-color: #25252f;
	padding: 15px 0;
	& a {
		color: rgb(1, 0, 82);
		background-color: #f4dd09;
		font-weight: bold;
	}
`;

const ProfileShort = ({ showProfile }) => {
	console.log(showProfile);
	return (
		<WrapperAbout className="col-md-2 about-short" show={showProfile}>
			<div className="pro-box">
				<AboutImg src={ProImg}></AboutImg>
				<h4>Minhazul Abedin</h4>
				<p>Front-end Developer</p>
				<div className="contact">
					<div className="social">
						<a
							href="https://github.com/MinhazulAbedinMithu"
							target="_blank"
							rel="noreferrer"
						>
							<FaIcons.FaGithubSquare className="icon" />
						</a>
						<a
							href="https://www.linkedin.com/in/minhazulabedinmithu/"
							target="_blank"
							rel="noreferrer"
						>
							<FaIcons.FaLinkedin className="icon" />
						</a>
						<a
							href="mailto:minhazulabedinmithu@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							<FaIcons.FaGooglePlusSquare className="icon" />
						</a>
						<a
							href="https://www.facebook.com/MinhazulAbedinMithu"
							target="_blank"
							rel="noreferrer"
						>
							<FaIcons.FaFacebookSquare className="icon" />
						</a>
					</div>
					<Link to="/contact" className="btn button">
						Contact Me
					</Link>
				</div>
			</div>
			<SkillBox>
				<h2>Skills</h2>
				<SkillSet className="row px-4 py-2 ">
					{skillData1.map((item, index) => {
						return (
							<ProgressItem key={index} className="col-4 p-1">
								<ChangingProgressProvider values={[0, item.process]}>
									{(percentage) => (
										<CircularProgressbar
											value={percentage}
											text={item.title}
											styles={buildStyles({
												textColor: "white",
												pathColor: "#f4dd09",
												trailColor: "rgb(1, 0, 82)",
												pathTransition:
													percentage === 0
														? "none"
														: "stroke-dashoffset 0.5s ease 0s",
											})}
										/>
									)}
								</ChangingProgressProvider>
							</ProgressItem>
						);
					})}
				</SkillSet>
				<SkillSet>
					<ul>
						{skillData2.map((item, index) => {
							return (
								<li key={index}>
									<FaIcons.FaCheckCircle className="icon" /> <span>{item}</span>
								</li>
							);
						})}
					</ul>
				</SkillSet>
			</SkillBox>
			<CvButton>
				<a href="../../Minhazul_Abedin__resume.pdf" className="btn" download>
					<FaIcons.FaCloudDownloadAlt /> <span>Download CV</span>{" "}
				</a>
			</CvButton>
		</WrapperAbout>
	);
};

export default ProfileShort;
