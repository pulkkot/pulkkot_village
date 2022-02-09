import styled from "styled-components";
import React, { ReactElement } from "react";
import Header from "components/Header";
import Breakpoints from "styles/breakpoints";
import media from "styles/media";

function MainPage(): ReactElement {
  return (
    <MainContainer>
      <Header />
      <MainContent>
        <MainLayout>메인 레이아웃</MainLayout>
      </MainContent>
    </MainContainer>
  );
}

export default MainPage;

const MainContainer = styled.div`
  height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
`;
const MainLayout = styled.main`
  width: ${Breakpoints.large}px;
  height: 200px;
  background-color: #e5fbff;

  // @Note 너비가 medium 초과부터 large까지는 red적용
  ${media.large} {
    background-color: red;
    width: ${Breakpoints.medium}px;
  }

  ${media.medium} {
    background-color: blue;
    width: ${Breakpoints.small}px;
  }

  ${media.custom(350)} {
    background-color: yellow;
    width: 350px;
  }
`;
