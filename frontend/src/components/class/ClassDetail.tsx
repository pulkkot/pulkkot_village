import { Viewer } from "@toast-ui/react-editor";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { IClass } from "types/class";

function ClassDetail() {
  const [classInfo, setClassInfo] = useState<IClass>();
  const params = useParams();
  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/articles/${params.id}`
      );
      setClassInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <ClassDetailContainer>
      <Title>{classInfo?.title}</Title>
      <ClassImage src={classInfo?.thumbnail_image}></ClassImage>
      <Content>
        {classInfo && <Viewer initialValue={classInfo.content} />}
      </Content>
    </ClassDetailContainer>
  );
}

export default ClassDetail;

const ClassDetailContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ClassImage = styled.img`
  margin-top: 20px;
  width: 380px;
  height: 380px;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.title}px;
  font-weight: 600;
`;
const Content = styled.div`
  margin-top: 100px;
  width: 75%;

  .toastui-editor-contents {
    font-size: ${({ theme }) => theme.fontSize.content}px;
    font-weight: 500;
    color: #363636;
  }
`;
