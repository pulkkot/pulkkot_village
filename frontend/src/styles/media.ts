import Breakpoints from "./breakpoints";

// @Note 최대 maxWidth 까지만 적용
const mediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`;

const { xlarge, large, medium, small } = Breakpoints;

const media = {
  xlarge: mediaQuery(xlarge),
  large: mediaQuery(large),
  medium: mediaQuery(medium),
  small: mediaQuery(small),
  custom: mediaQuery,
};

export default media;
