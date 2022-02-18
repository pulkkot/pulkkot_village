import React, { ReactElement } from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width: string;
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
  padding: 5px 10px;
  border-radius: ${({ borderRadius }) => borderRadius};
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ fontSize }) => fontSize};
`;

export default Input;
