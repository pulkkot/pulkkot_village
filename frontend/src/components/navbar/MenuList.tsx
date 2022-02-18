import styled from "styled-components";
import MenuItem from "./MenuItem";

const menuList = ["ABOUT PULKKOT", "CLASS", "SHOP", "PROJECT", "STORE"];
function MenuList() {
  return (
    <MenuListContainer>
      {menuList.map((item: string) => (
        <MenuItem key={`menu_list_item_${item}`} itemTitle={item}></MenuItem>
      ))}
    </MenuListContainer>
  );
}

export default MenuList;

const MenuListContainer = styled.div`
  display: flex;
  align-items: center;
`;
