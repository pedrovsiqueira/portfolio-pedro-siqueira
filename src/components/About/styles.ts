import styled from 'styled-components';

export const Container = styled.div`
  height: 768px;
  width: 100vw;
  max-width: 1366px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
`;

export const AboutText = styled.div`
  width: 100vw;
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
    background: -webkit-linear-gradient(82deg, #00dcec 0%, #53f3ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    width: 854px;
    height: 80px;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    margin-bottom: 55px;
  }

  @media screen and (max-width: 414px) {
    p {
      width: 366px;
      height: 240px;
    }
  }
`;
