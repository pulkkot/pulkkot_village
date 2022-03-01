import { HamburgerIcon } from "assets/images";
import Button from "components/common/Button";
import styled from "styled-components";
import media from "styles/media";
import MenuList from "./MenuList";

function Header() {
  return (
    <HeaderContainer>
      <MainLogo href="/">Pulkkot Village</MainLogo>
      <HamburgerBtn>
        <img src={HamburgerIcon} alt="hb-menu-btn"></img>
      </HamburgerBtn>
      <MenuList />
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.black};
  align-items: center;
  justify-content: space-around;

  box-shadow: 0 2px 12px rgb(0 0 0 / 3%);
  ${media.medium} {
    justify-content: center;
  }
`;

const MainLogo = styled.a`
  font-size: ${({ theme }) => theme.fontSize.title}px;
  color: ${({ theme }) => theme.colors.white};
  ${media.medium} {
    width: 90%;
    text-align: center;
  }
`;

const HamburgerBtn = styled.button`
  all: unset;
  background-color: ${({ theme }) => theme.colors.black};
  display: none;
  cursor: pointer;
  ${media.medium} {
    width: 10%;
    display: inline;
    position: absolute;
    right: 0;
  }
  img {
    height: 14px;
  }
`;
