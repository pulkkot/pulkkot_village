import React, { ReactElement } from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  height: string;
  borderRadius?: string;
  fontSize?: string;
}

function Input({
  width,
  height,
  borderRadius = "4px",
  fontSize = "18px",
  ...rest
}: InputProps): ReactElement {
  return (
    <StyledInput
      {...rest}
      borderRadius={borderRadius}
      width={width}
      height={height}
      fontSize={fontSize}
    />
  );
}

const StyledInput = styled.input<{ borderRadius: string; fontSize: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: 0 0;
  font-size: ${({ fontSize }) => fontSize};
  padding: 0 20px;
  color: #999;
`;

export default Input;
