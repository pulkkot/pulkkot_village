import React from "react";
import styled, { css } from "styled-components";

interface IStyledButton {
  variant?: "primary" | "secondary";
  width?: string;
  height?: string;
}

interface IButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    IStyledButton {
  children: React.ReactNode;
}

function Button({
  variant = "primary",
  width,
  height = "20px",
  children,
  ...rest
}: IButton) {
  return (
    <StyledButton variant={variant} width={width} height={height} {...rest}>
      {children}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button<IStyledButton>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSize.text}px;
  box-sizing: border-box;
  transition: 0.15s ease-in-out;
  cursor: pointer;
  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return css`
          background-color: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.white};
          border: none;
          &:hover {
            background-color: ${({ theme }) => theme.colors.buttonHover};
          }
        `;
      case "secondary":
        return css`
          background-color: ${({ theme }) => theme.colors.white};
          color: ${({ theme }) => theme.colors.primary};
          border: 1px solid ${({ theme }) => theme.colors.primary};
          &:hover {
            background-color: ${({ theme }) => theme.colors.primary};
            color: ${({ theme }) => theme.colors.white};
          }
        `;
    }
  }};
  &:first-of-type {
    margin-right: 8px;
  }
`;
