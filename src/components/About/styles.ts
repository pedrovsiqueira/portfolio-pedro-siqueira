import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  padding-bottom: 80px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
`;

export const AboutText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 31px;
    font-weight: 500;
    margin-bottom: 40px;
  }

  span {
    font-weight: 600;
    ${(props) => props.theme.colors.mainColor}
  }

  p {
    width: min(854px, 90%);
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    margin-bottom: 55px;
  }

  @media screen and (max-width: 840px) {
    .about-me {
      padding: 0px 50px;
    }
  }

  @media screen and (max-width: 480px) {
    p {
      width: min(366px, 90%);
    }

    .about-me {
      padding: 0;
    }
  }

  @media screen and (max-width: 393px) {
    h1 {
      font-size: 28px;
    }
  }
`;
