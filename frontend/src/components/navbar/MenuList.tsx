import styled from "styled-components";
import MenuItem from "./MenuItem";

interface IMenu {
  menuId: number;
  menuName: string;
  menuLink: string;
}
const menuList = [
  {
    menuId: 1,
    menuName: "ABOUT",
    menuLink: "/",
  },
  {
    menuId: 2,
    menuName: "CLASS",
    menuLink: "/class",
  },
  {
    menuId: 3,
    menuName: "SHOP",
    menuLink: "/products",
  },
  {
    menuId: 4,
    menuName: "PROJECT",
    menuLink: "/",
  },
  {
    menuId: 5,
    menuName: "STORE",
    menuLink: "/",
  },
];
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
`;
