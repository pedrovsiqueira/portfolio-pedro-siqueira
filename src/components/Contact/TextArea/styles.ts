import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${(props) => props.theme.colors.inputBackgroundColor} 0% 0%
    no-repeat padding-box;
  margin-bottom: 64px;
  display: flex;
  border-radius: 10px;

  ${(props) =>
    props.isFocused &&
    css`
      border: 2px solid ${(props) => props.theme.colors.inputColor};
    `}

  textarea {
    resize: none;
    color: ${(props) => props.theme.colors.inputTextColor};
    background: transparent;
    font-size: 14px;
    padding: 20px 20px 20px 15px;
    width: 448px;
    height: 128px;

    &::placeholder {
      color: ${(props) => props.theme.colors.inputPlaceholderColor};
    }
  }

  svg {
    color: ${(props) => props.theme.colors.iconColor};
    margin: 20px 0 0 16px;

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
