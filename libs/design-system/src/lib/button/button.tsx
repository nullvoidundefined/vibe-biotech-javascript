import { ReactNode } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps {
  children: ReactNode;
}

const StyledButton = styled.div`
  color: pink;
`;

export function Button({ children }: ButtonProps) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
