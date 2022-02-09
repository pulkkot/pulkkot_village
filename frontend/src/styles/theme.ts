import { DefaultTheme } from "styled-components";

const colors = {
  header: "#1565C0",
  primary: "#b2edd4",
  white: "#ffffff",
  black: "#000000",
  dateText: "#939FA5",
  grayText: "#323D45",
  border: "#E5E5E5",
  buttonHover: "#81baa3",
  menuHover: "#f5f5f5",
};

const fontSize = {
  title: 20,
  subTitle: 16,
  text: 14,
  smallText: 12,
};

export type ColorTypes = typeof colors;
export type FontSizeTypes = typeof fontSize;

const theme: DefaultTheme = {
  colors,
  fontSize,
};

export default theme;
