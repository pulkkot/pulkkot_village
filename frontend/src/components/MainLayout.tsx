import { ReactNode } from "react";
import styled from "styled-components";
import Breakpoints from "styles/breakpoints";
import media from "styles/media";

interface AppLayoutProps {
  children: ReactNode;
}
function MainLayout({ children }: AppLayoutProps) {
  return (
    <LayoutContainer>
      <Layout>{children}</Layout>
    </LayoutContainer>
  );
}

export default MainLayout;

const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Layout = styled.div`
  width: ${Breakpoints.large}px;
  /* background-color: #e9f6f8; */
  height: 100vh;
  // @Note 너비가 medium 초과부터 large까지는 red적용
  ${media.large} {
    /* background-color: #f1c9c9; */
    width: ${Breakpoints.medium}px;
  }

  ${media.medium} {
    /* background-color: #c9c9f3; */
    width: ${Breakpoints.small}px;
  }

  ${media.custom(350)} {
    /* background-color: #ececa6; */
    width: 350px;
  }
`;
