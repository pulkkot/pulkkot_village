import { Link } from "react-router-dom";
import styled from "styled-components";

const menus = ["WEDDING", "CAFE & RESTAURANT", "PLANTERIOR"];

function ProjectList() {
  return (
    <ProjectMenuWrapper>
      {menus.map((menu, index) => {
        return (
          <Link to={`/projects/${index}`}>
            <ProjectMenuContent key={index}>{menu}</ProjectMenuContent>
          </Link>
        );
      })}
    </ProjectMenuWrapper>
  );
}

export default ProjectList;

const ProjectMenuWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 100px;
  justify-content: center;
`;
const ProjectMenuContent = styled.span`
  margin: 10px;
  cursor: pointer;
`;
