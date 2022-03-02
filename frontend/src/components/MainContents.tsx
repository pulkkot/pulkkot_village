import styled from "styled-components";
import { MainImg_2 } from "assets/images";
import { MainImg_4 } from "assets/images";
import { MainImg_5 } from "assets/images";
import MainCarousel from "./MainCarousel";

function MainContents() {
  return (
    <MainContentsContainer>
      <MainCarousel />
      <MainContentItem href="/products">
        <MainImage src={MainImg_5} />
      </MainContentItem>
      <MainContentItem href="/articles">
        <MainImage src={MainImg_4} />
      </MainContentItem>
      <MainContentItem href="/">
        <MainImage src={MainImg_2} />
      </MainContentItem>
    </MainContentsContainer>
  );
}

export default MainContents;

const MainContentsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MainImage = styled.img`
  width: 100%;
  margin-bottom: 200px;
  margin-top: 50px;
  box-shadow: 5px 5px 20px #f1ecec;
`;

const MainContentItem = styled.a``;
