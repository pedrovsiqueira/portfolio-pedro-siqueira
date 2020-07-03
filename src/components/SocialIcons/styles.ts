import styled from 'styled-components';

export const Icons = styled.div`
  display: flex;
  align-items: center;
  align-content: center;

  svg {
    width: 20px;
    height: 20px;
    &:hover {
      color: ${(props) => props.theme.colors.iconHoverColor};
    }
  }

  img {
    margin-right: 32px;
    width: 25px;
    height: 25px;

    &:first-child {
      margin-right: 16px;
    }
  }

  a {
    font-weight: 600;
    font-size: 16px;
    display: block;
    margin-right: 32px;
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.colors.iconHoverColor};
    }
  }

  @media screen and (max-width: 375px) {
    a {
      font-size: 11.3px;
      margin-top: 5px;
    }
  }
`;

export const Location = styled.div`
  display: flex;
`;

export const Social = styled.div`
  display: flex;
`;
