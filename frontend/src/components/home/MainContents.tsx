import styled from "styled-components";
import { MainImg_2 } from "assets/images";
import { MainImg_4 } from "assets/images";
import { MainImg_5 } from "assets/images";
import MainCarousel from "./MainCarousel";
import { Link } from "react-router-dom";

function MainContents() {
  return (
    <MainContentsContainer>
      <MainCarousel />
      <Link to="/products">
        <MainContentItem>
          <MainImage src={MainImg_5} />
        </MainContentItem>
      </Link>
      <Link to="/articles">
        <MainContentItem>
          <MainImage src={MainImg_4} />
        </MainContentItem>
      </Link>
      <Link to="/about">
        <MainContentItem>
          <MainImage src={MainImg_2} />
        </MainContentItem>
      </Link>
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

const MainContentItem = styled.div``;
