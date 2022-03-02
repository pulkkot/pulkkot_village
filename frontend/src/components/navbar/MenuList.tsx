import styled from "styled-components";
import media from "styles/media";
import { menuList } from "utils/constants";
import MenuItem from "./MenuItem";

interface IMenu {
  menuId: number;
  menuName: string;
  menuLink: string;
}

function MenuList() {
  return (
    <MenuListContainer>
      {menuList.map((item: IMenu) => (
        <MenuItem
          key={`menu_list_item_${item.menuId}`}
          itemTitle={item.menuName}
          href={item.menuLink}
        ></MenuItem>
      ))}
    </MenuListContainer>
  );
}

export default MenuList;

const MenuListContainer = styled.div`
  display: flex;
  align-items: center;
  ${media.medium} {
    display: none;
  }
`;
