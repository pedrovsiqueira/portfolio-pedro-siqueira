import styled from 'styled-components';

export const Container = styled.section`
  height: 768px;
  width: 100vw;
  max-width: 1366px;

  @media screen and (max-width: 480px) {
    height: 504px;
  }

  @media screen and (max-width: 1139px) {
    height: 1000px;
  }

  @media screen and (max-width: 770px) {
    height: 500px;
  }
`;

export const Content = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 30px;
    margin-bottom: 34px;
  }

  @media screen and (max-width: 393px) {
    h2 {
      font-size: 28px;
    }
  }

  @media screen and (max-width: 360px) {
    h2 {
      font-size: 27px;
    }
  }
`;
