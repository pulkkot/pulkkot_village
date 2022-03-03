import styled from "styled-components";
import React, { ReactElement } from "react";
import MainContents from "components/home/MainContents";
import MainLayout from "components/home/MainLayout";
import media from "styles/media";

function MainPage(): ReactElement {
  return (
    <MainContainer>
      <MainContent>
        <MainLayout>
          <MainContents />
        </MainLayout>
      </MainContent>
    </MainContainer>
  );
}

export default MainPage;

const MainContainer = styled.div`
  margin-bottom: 4200px;
  ${media.large} {
    margin-bottom: 3200px;
  }
  ${media.medium} {
    margin-bottom: 1500px;
  }
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
`;
