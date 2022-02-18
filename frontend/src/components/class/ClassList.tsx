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
    <ClassListContainer>
      This is Class List Page
      {classList &&
        classList?.map((item: IClass, index: number) => (
          <ClassItem
            key={`class_list_${index}`}
            title={item.title}
            content={item.content}
          />
        ))}
    </ClassListContainer>
  );
}

export default ClassList;

const ClassListContainer = styled.div`
  width: 100%;
`;
