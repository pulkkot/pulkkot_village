import styled from "styled-components";
import MenuList from "./MenuList";
import User from "../User";

function Header() {
  return (
    <HeaderContainer>
      <MainLogo href="/">Pulkkot Village</MainLogo>
      <MenuList />
      <User />
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 2px 12px rgb(0 0 0 / 3%);
`;

const MainLogo = styled.a`
  font-size: ${({ theme }) => theme.fontSize.title}px;
`;
