import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${(props) => props.theme.colors.inputBackgroundColor} 0% 0%;
  margin-bottom: 32px;

  display: flex;
  align-items: center;
  border-radius: 10px;

  border: 2px solid ${(props) => props.theme.colors.inputBackgroundColor};

  ${(props) =>
    props.isFocused &&
    css`
      border: 2px solid ${(props) => props.theme.colors.inputColor};
    `}

  input {
    color: ${(props) => props.theme.colors.inputTextColor};
    flex: 1;
    background: transparent;
    font-size: 14px;
    padding: 20px 20px 20px 15px;
    width: 448px;
    height: 56px;

    &::placeholder {
      color: ${(props) => props.theme.colors.inputPlaceholderColor};
    }
  }

  svg {
    color: ${(props) => props.theme.colors.iconColor};
    margin-left: 16px;

    ${(props) =>
      props.isFocused &&
      css`
        color: ${(props) => props.theme.colors.inputColor};
      `}

    ${(props) =>
      props.isFilled &&
      css`
        color: ${(props) => props.theme.colors.inputColor};
      `}
  }
`;
