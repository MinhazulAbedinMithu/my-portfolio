import React from "react";
import Home from "../Home/Home";
import projectImg from "../../images/projects.png";
import styled from "styled-components";

const ProjectCont = styled.div``;
const ProjectItem = styled.div``;

const Projects = () => {
	return (
		<div>
			<Home title="Projects" secImg={projectImg} />
			<ProjectCont>
			
				<ProjectItem>
					<h2>Mithu</h2>
				</ProjectItem>
			</ProjectCont>
		</div>
	);
};

export default Projects;
