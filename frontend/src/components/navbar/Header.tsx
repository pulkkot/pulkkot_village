import { HamburgerIcon } from "assets/images";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "styles/media";
import MenuList from "./MenuList";
import SideBar from "./SideBar";

function Header() {
  const [isMenuShowing, setIsMenuShowing] = useState(false);
  const onHandleSideBar = () => {
    setIsMenuShowing((prev) => !prev);
  };
  return (
    <>
      <HeaderContainer>
        <MainLogo>
          <Link to="/">Pulkkot Village</Link>
        </MainLogo>
        <MenuList />
        <HamburgerBtn onClick={onHandleSideBar}>
          <img src={HamburgerIcon} alt="hb-menu-btn"></img>
        </HamburgerBtn>
      </HeaderContainer>
      <SideBar
        isMenuShowing={isMenuShowing}
        onHandleSideBar={onHandleSideBar}
      />
    </>
  );
}

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
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

const MainLogo = styled.div`
  font-size: ${({ theme }) => theme.fontSize.title}px;
  color: ${({ theme }) => theme.colors.white};
  ${media.medium} {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.content}px;
  }
`;

const HamburgerBtn = styled.button`
  all: unset;
  background-color: ${({ theme }) => theme.colors.black};
  display: none;
  cursor: pointer;
  ${media.medium} {
    display: inline;
    position: absolute;
    left: 0;
    margin-left: 15px;
  }
  img {
    height: 14px;
  }
`;
