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
  height: 40px;
  display: flex;
  align-items: center;
  margin: 10px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.menuHover};
  }
  ${media.medium} {
    margin-left: 20px;
  }
`;
