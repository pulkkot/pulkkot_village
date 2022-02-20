import { Viewer } from "@toast-ui/react-editor";
import axios from "axios";
import MainLayout from "components/MainLayout";
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
    <MainLayout>
      <ClassDetailContainer>
        <Title>{classInfo?.title}</Title>
        <Content>
          {classInfo && <Viewer initialValue={classInfo.content} />}
        </Content>
      </ClassDetailContainer>
    </MainLayout>
  );
}

export default ClassDetail;

const ClassDetailContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
`;
const Content = styled.div`
  margin-top: 100px;
`;
