import { Viewer } from "@toast-ui/react-editor";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import media from "styles/media";
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
      <TopClassDetail>
        <Title>{classInfo?.title}</Title>
        <SubTitle>
          꽃, 그리고 나에게만 집중하며 손끝으로 전해지는 계절의 아름다움을
          느껴보세요.
        </SubTitle>
        <ClassImage src={classInfo?.thumbnail_image}></ClassImage>
      </TopClassDetail>
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
  justify-content: center;
`;
const TopClassDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${media.medium} {
    padding-bottom: 40px;
    border-bottom: #d3d3d3 1px solid;
  }
`;

const SubTitle = styled.span`
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.grayText};
  display: block;
  width: 80%;
  text-align: center;
`;

const ClassImage = styled.img`
  margin-top: 20px;
  width: 380px;
  height: 380px;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.content}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.grayText};
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
