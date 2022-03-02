import { ReactNode } from "react";
import styled from "styled-components";
import Breakpoints from "styles/breakpoints";
import media from "styles/media";
import scrollbar from "styles/scrollbar";

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
  min-width: ${Breakpoints.small}px;
  width: ${Breakpoints.large}px;
  height: 100vh;

  ${media.large} {
    width: ${Breakpoints.medium}px;
  }

  ${media.medium} {
    width: ${Breakpoints.small}px;
  }
`;
