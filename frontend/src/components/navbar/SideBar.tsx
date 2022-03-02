import styled, { css } from "styled-components";
import media from "styles/media";
import { menuList } from "utils/constants";
import MenuItem from "./MenuItem";

interface ISideBarProps {
  isMenuShowing: boolean;
  onHandleSideBar: () => void;
}

function SideBar({ isMenuShowing, onHandleSideBar }: ISideBarProps) {
  return (
    <SideBarContainer>
      <MenuListContainer visible={isMenuShowing}>
        {menuList.map((menu) => (
          <MenuItem
            key={menu.menuId}
            itemTitle={menu.menuName}
            href={menu.menuLink}
          />
        ))}
      </MenuListContainer>
      <Background onClick={onHandleSideBar} visible={isMenuShowing} />
    </SideBarContainer>
  );
}

export default SideBar;

const SideBarContainer = styled.div`
  display: none;
  z-index: 999;
  ${media.medium} {
    display: unset;
    position: fixed;
  }
`;

const MenuListContainer = styled.ul<{ visible: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.black};
  position: absolute;
  top: 60px;
  height: 100vh;
  width: 75vw;
  z-index: 999;
  ${(props) =>
    props.visible
      ? css`
          visibility: visible;
        `
      : css`
          visibility: hidden;
        `};

  transition: all 0.5s ease-in-out;
  transform: translateX(${({ visible }) => (visible ? 0 : -75)}vw);
`;

const Background = styled.div<{ visible: boolean }>`
  ${(props) =>
    props.visible
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}

  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 100;
  position: absolute;
  opacity: 0.5;
  left: 0;
  top: 0;
  cursor: pointer;
`;
