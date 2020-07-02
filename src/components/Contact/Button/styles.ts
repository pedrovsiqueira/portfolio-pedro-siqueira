import styled from 'styled-components';

export const Container = styled.button`
  color: #fff;
  ${(props) => props.theme.buttonColor}
  width: 174px;
  height: 48px;
  font-weight: bold;
  font-size: 16px;
  border-radius: 10px;

  &:hover {
    background: ${(props) => props.theme.buttonHover};
  }
`;
