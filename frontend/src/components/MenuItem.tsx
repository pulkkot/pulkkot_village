import styled from "styled-components";

interface IMenuItem {
  itemTitle: string;
}

function MenuItem({ itemTitle }: IMenuItem) {
  return <MenuItemContainer>{itemTitle}</MenuItemContainer>;
}

export default MenuItem;

const MenuItemContainer = styled.div`
  height: 40px;
  background-color: blue;
  display: flex;
  align-items: center;
  margin: 10px;
`;
