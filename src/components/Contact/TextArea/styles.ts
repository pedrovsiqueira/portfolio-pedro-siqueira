import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #484848 0% 0% no-repeat padding-box;
  margin-bottom: 64px;
  display: flex;
  border-radius: 10px;

  ${(props) =>
    props.isFocused &&
    css`
      border: 2px solid #41ebf8;
      color: #41ebf8;
    `}

  textarea {
    color: #f4ede8;
    background: transparent;
    font-size: 14px;
    padding: 20px 20px 20px 15px;
    width: 448px;
    height: 128px;

    &::placeholder {
      color: #f4ede8;
    }
  }

  svg {
    color: #dcdcdc;
    margin: 20px 0 0 16px;

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
