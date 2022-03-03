import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "styles/media";

interface IMenuItem {
  itemTitle: string;
  href: string;
}

function MenuItem({ itemTitle, href }: IMenuItem) {
  return (
    <MenuItemContainer>
      <Link to={href}>{itemTitle}</Link>
    </MenuItemContainer>
  );
}

export default MenuItem;

const MenuItemContainer = styled.li`
  height: 60px;
  display: flex;
  align-items: center;
  padding: 10px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.menuHover};
  }
  ${media.medium} {
    font-size: ${({ theme }) => theme.fontSize.text}px;
    padding-left: 20px;
    border-bottom: #d3d3d3 1px solid;
  }
`;
