import styled from 'styled-components';

export const Container = styled.section`
  height: 768px;
  width: 100vw;
  max-width: 1366px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    overflow-x: hidden;
  }

  @media screen and (max-width: 1920px) {
    height: 840px;
  }

  @media screen and (max-width: 1536px) {
    height: 768px;
  }

  @media screen and (max-width: 136px) {
    height: 700px;
  }
`;

export const Content = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    height: 800px;
    width: 96vw;
    margin-left: 15px;
    p {
      width: 366px;
    }
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;

  h2 {
    margin-bottom: 44px;
  }

  p {
    width: 429px;
    height: 142px;
    font-size: 16px;
    color: ${(props) => props.theme.colors.textColor};
    font-weight: 500;
  }

  a {
    font-weight: bold;
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme.colors.inputColor};
    }
  }

  @media screen and (max-width: 393px) {
    margin-right: 0px;
    h2 {
      font-size: 28px;
    }
    p {
      width: 348px;
    }
  }

  @media screen and (max-width: 360px) {
    h2 {
      font-size: 27px;
    }
  }
`;
