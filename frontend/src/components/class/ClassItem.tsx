import styled from "styled-components";
import { IClass } from "types/class";

function ClassItem({ title, content }: IClass) {
  return (
    <ClassContatiner>
      <ClassTitle>{title} </ClassTitle>
      <ClassContent> {content}</ClassContent>
    </ClassContatiner>
  );
}

export default ClassItem;

const ClassContatiner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px;
  border: 0.5px solid gray;
`;
const ClassTitle = styled.h2`
  font-size: 20px;
`;
const ClassContent = styled.div``;
