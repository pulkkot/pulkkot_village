import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { IClass } from "types/class";
import ClassItem from "./ClassItem";

function ClassList() {
  const [classList, setClassList] = useState<IClass[]>();
  const getClassData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/articles");
      setClassList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClassData();
  }, []);
  useEffect(() => {
    console.log(classList);
  }, [classList]);
  return (
    <ClassWrapper>
      {/* <Title>Flower Class</Title> */}
      <ClassListContainer>
        {classList &&
          classList?.map((item: IClass) => (
            <ClassItem
              key={`class_list_${item.id}`}
              id={item.id}
              title={item.title}
              content={item.content}
              thumbnail_image={item.thumbnail_image}
            />
          ))}
      </ClassListContainer>
    </ClassWrapper>
  );
}

export default ClassList;

const ClassWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 200px;
`;

const Title = styled.h1`
  font-size: 25px;
`;

const ClassListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
