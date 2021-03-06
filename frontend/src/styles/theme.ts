import { DefaultTheme } from "styled-components";

const colors = {
  header: "#1565C0",
  primary: "#6cc1ba",
  white: "#ffffff",
  black: "#000000",
  dateText: "#939FA5",
  grayText: "#323D45",
  border: "#b1acac",
  buttonHover: "#81baa3",
  menuHover: "#f5f5f5",
};

const fontSize = {
  title: 27,
  subTitle: 20,
  content: 18,
  text: 15,
  smallText: 13,
};

export type ColorTypes = typeof colors;
export type FontSizeTypes = typeof fontSize;

const theme: DefaultTheme = {
  colors,
  fontSize,
};

export default theme;
