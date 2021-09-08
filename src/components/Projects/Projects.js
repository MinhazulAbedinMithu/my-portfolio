import React from "react";
import Home from "../Home/Home";
import projectImg from "../../images/projects.png";
import styled from "styled-components";
import { projectsData } from "./ProjectsData";
import ProjectItem from "./ProjectItem";

const ProjectCont = styled.div`
	color: white;
`;

const Projects = () => {
	return (
		<div>
			<Home title="Projects" desc="" secImg={projectImg} />
			<ProjectCont>
				{projectsData.map(pj => <ProjectItem pj={pj} />)}
			</ProjectCont>
		</div>
	);
};

export default Projects;
