import styled from "styled-components";

interface IMenuItem {
  itemTitle: string;
  href?: string;
}

function MenuItem({ itemTitle, href }: IMenuItem) {
  return <MenuItemContainer href={href}>{itemTitle}</MenuItemContainer>;
}

export default MenuItem;

const MenuItemContainer = styled.a`
  height: 40px;
  display: flex;
  align-items: center;
  margin: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.menuHover};
  }
`;
