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
  height: 100vh;

  ${media.large} {
    width: ${Breakpoints.medium}px;
  }

  ${media.medium} {
    width: ${Breakpoints.small}px;
  }
`;
