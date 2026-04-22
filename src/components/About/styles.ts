import styled from 'styled-components';

export const Container = styled.section`
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
  padding: 0 20px;

  .section-eyebrow {
    display: block;
    text-align: center;
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 2.58px;
    color: ${(props) => props.theme.colors.h5TextColor};
    text-transform: uppercase;
    margin-bottom: 17px;
  }

  h2 {
    font-size: 31px;
    font-weight: 500;
    margin-bottom: 40px;
    max-width: 680px;
    text-align: center;
    line-height: 1.25;
    text-wrap: balance;
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
    h2 {
      max-width: 520px;
    }

    .about-me {
      padding: 0 24px;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 0 16px;

    h2 {
      font-size: 26px;
      max-width: 320px;
      margin-bottom: 24px;
      line-height: 1.2;
    }

    p {
      width: min(366px, 100%);
      font-size: 15px;
      line-height: 1.55;
    }

    .about-me {
      padding: 0;
    }
  }

  @media screen and (max-width: 393px) {
    h2 {
      font-size: 24px;
      max-width: 290px;
    }

    p {
      font-size: 14px;
    }
  }
`;
