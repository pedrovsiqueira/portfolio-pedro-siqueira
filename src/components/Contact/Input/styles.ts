import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #353535 0% 0%;
  margin-bottom: 32px;

  display: flex;
  align-items: center;
  border-radius: 10px;

  ${(props) =>
    props.isFocused &&
    css`
      border: 2px solid #41ebf8;
      color: #41ebf8;
    `}

  input {
    color: #f4ede8;
    flex: 1;
    background: transparent;
    font-size: 14px;
    padding: 20px 20px 20px 15px;
    width: 448px;
    height: 56px;

    &::placeholder {
      color: ${shade(20, '#f4ede8')};
    }
  }

  svg {
    color: #f4ede8;
    margin-left: 16px;

    ${(props) =>
      props.isFocused &&
      css`
        color: #41ebf8;
      `}

    ${(props) =>
      props.isFilled &&
      css`
        color: #41ebf8;
      `}
  }
`;
