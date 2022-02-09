import styled from "styled-components";
import MenuItem from "./MenuItem";

const menuList = ["CLASS", "SHOP NOW", "ABOUT PULKKOT", "SUBSCRIBE"];
function MenuList() {
  return (
    <MenuListContainer>
      {menuList.map((item: string) => (
        <MenuItem itemTitle={item}></MenuItem>
      ))}
    </MenuListContainer>
  );
}

export default MenuList;

const MenuListContainer = styled.div`
  display: flex;
  align-items: center;
`;
