import styled from "styled-components";

interface IProp extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
}

export const Toggle = ({ checked, ...rest }: IProp) => {
  return <CheckBox type="checkbox" checked={checked} {...rest} />;
};

const CheckBox = styled.input`
  all: unset;
  width: 40px;
  height: 14px;
  border-radius: 2em;
  display: flex;
  align-items: center;
  /* toggle off */
  background: ${({ theme }) => theme.colors.menuHover};
  ::after {
    content: "";
    z-index: 10;
    left: 0;
    width: 20px;
    height: 20px;
    display: block;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.white};
    position: relative;
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  }
  /* toggle on */
  &:checked {
    background-color: ${({ theme }) => theme.colors.menuHover};
    ::after {
      content: "";
      position: relative;
      display: block;
      width: 20px;
      height: 20px;
      left: 20px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.primary};
      transition: all 0.2s ease-in-out;
    }
  }
`;
