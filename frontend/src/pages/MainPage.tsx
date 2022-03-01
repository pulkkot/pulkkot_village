import styled from "styled-components";
import React, { ReactElement } from "react";
import MainContents from "components/MainContents";
import MainLayout from "components/MainLayout";

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

const MainContainer = styled.div``;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
`;
