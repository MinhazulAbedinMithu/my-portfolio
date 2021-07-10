import React from "react";
import styled from "styled-components";
import "./AboutShort.css";
import ProImg from "../../images/profilePic.png";
import * as FaIcons from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ChangingProgressProvider from "./ChangeProgressProvider";
import "react-circular-progressbar/dist/styles.css";
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
	& .pro-box {
		width: 100%;
		text-align: center;
		background-color: #25252f;
		color: white;
		padding: 15px 0;
		box-shadow: 2px 5px 5px rgb(41, 41, 41);
		& .contact {
			border-top: 2px solid rgb(59, 59, 59);

			/* border-bottom: 2px solid lightgray; */
			padding: 5px 0;
			& .social {
				& .icon {
					font-size: 40px;
					color: rgb(182, 195, 0);
					padding: 5px;
				}
			}
			& button {
				background-color: transparent;
				border: 1px solid yellow;
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
	& h2 {
		text-align: center;
		font-family: cursive;
		color: rgb(9, 0, 131);
		font-weight: 700;
		border-bottom: 2px solid white;
	}
`;
const SkillSet = styled.div`
	& ul {
		list-style: none;
		padding: 10px;
		margin: 0;
		& li {
			padding: 5px 0;
			& .icon {
				color: yellow;
			}
		}
	}
`;
const ProgressItem = styled.div``;
const CvButton = styled.div`
	text-align: center;
	background-color: #25252f;
	padding: 20px 0;
	& button {
		color: rgb(1, 0, 82);
		background-color: yellow;
		font-weight: bold;
	}
`;

const ProfileShort = () => {
	return (
		<WrapperAbout className="col-md-3 about-short">
			<div className="pro-box">
				<AboutImg src={ProImg}></AboutImg>
				<h4>Minhazul Abedin</h4>
				<p>Front-end Developer</p>
				<div className="contact">
					<div className="social">
						<FaIcons.FaGithubSquare className="icon" />
						<FaIcons.FaLinkedin className="icon" />
						<FaIcons.FaGooglePlusSquare className="icon" />
						<FaIcons.FaFacebookSquare className="icon" />
					</div>
					<button className="btn ">Contact Me</button>
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
												pathColor: "yellow",
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
				<button className="btn">
					<FaIcons.FaCloudDownloadAlt /> <span>Download CV</span>{" "}
				</button>
			</CvButton>
		</WrapperAbout>
	);
};

export default ProfileShort;
