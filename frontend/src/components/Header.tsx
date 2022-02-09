import styled from "styled-components";
import MenuList from "./MenuList";
import User from "./User";

function Header() {
  return (
    <HeaderContainer>
      <MainLogo>Pulkkot Village</MainLogo>
      <MenuList />
      <User />
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  height: 70px;
  background-color: pink;
  align-items: center;
  justify-content: space-around;
`;

const MainLogo = styled.div``;
