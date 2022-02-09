import { DefaultTheme } from "styled-components";

const colors = {
  header: "#1565C0",
  primary: "#2196F3",
  white: "#ffffff",
  black: "#000000",
  buttonOrange: "#FFA000",
  dateText: "#939FA5",
  grayText: "#323D45",
  border: "#E5E5E5",
};

const fontSize = {
  title: 20,
  subTitle: 16,
  text: 14,
  smallText: 12,
};

export type ColorTypes = typeof colors;
export type fontSize = typeof fontSize;

const theme: DefaultTheme = {
  colors,
  fontSize,
};

export default theme;
