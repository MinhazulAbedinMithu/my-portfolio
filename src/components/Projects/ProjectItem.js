import React from 'react';
import styled from 'styled-components';
import {FaExternalLinkAlt, FaGithub} from 'react-icons/fa';

const ItemWrapper = styled.div`
  width: 90%;
  margin: 10px auto 20px 20px;
  color: white;
  border: 1px solid #f4dd09;
  padding: 10px;
  border-radius: 12px;
  & h4, h5{
    color: yellow;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 10px;
`;
const Title = styled.h2`
  text-align: center;
  font-family: cursive;
  margin: 10px 0;
  & a{
    color: #f4dd09;
  }
`;
const ToolSpan = styled.span`
  font-size: 16px;
  color: white;
`;


const ProjectItem = (props) => {
  const {img, title, features, tools, live, repo} = props.pj;
  return (
    <ItemWrapper>
      <div className="row">
        <div className="col-md-4">
          <Img src={img} alt="project thumble" />
          <Title>{title}</Title>
          <Title><a href={live} target="_blank" rel="noreferrer" className="mx-3"><FaExternalLinkAlt/></a> <a href={repo} target="_blank" rel="noreferrer"><FaGithub/></a></Title>
        </div>
        <div className="col-md-8">
          <h4>Features: </h4>
          <ul className="pl-3">
            {
              Object.keys(features).map((key) => <li>{features[key]}</li>)
            }
          </ul>
          <h4 className="">Tools: <ToolSpan>{tools}</ToolSpan></h4>
        </div>
      </div>
    </ItemWrapper>
  );
};

export default ProjectItem;