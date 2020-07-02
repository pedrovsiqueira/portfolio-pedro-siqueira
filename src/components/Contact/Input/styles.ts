import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${(props) => props.theme.inputBackgroundColor} 0% 0%;
  margin-bottom: 32px;

  display: flex;
  align-items: center;
  border-radius: 10px;

  ${(props) =>
    props.isFocused &&
    css`
      border: 2px solid ${(props) => props.theme.inputColor};
    `}

  input {
    color: ${(props) => props.theme.inputTextColor};
    flex: 1;
    background: transparent;
    font-size: 14px;
    padding: 20px 20px 20px 15px;
    width: 448px;
    height: 56px;

    &::placeholder {
      color: ${(props) => props.theme.inputPlaceholderColor};
    }
  }

  svg {
    color: ${(props) => props.theme.iconColor};
    margin-left: 16px;

    ${(props) =>
      props.isFocused &&
      css`
        color: ${(props) => props.theme.inputColor};
      `}

    ${(props) =>
      props.isFilled &&
      css`
        color: ${(props) => props.theme.inputColor};
      `}
  }
`;
