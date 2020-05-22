import styled from 'styled-components';
import bgImg from '../../assets/bg-img.jpg';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 1366px;
`;

export const Content = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 177px;
  display: flex;

  .background-text {
    z-index: 1;
    margin-left: -50px;

    h1 {
      background: -webkit-linear-gradient(82deg, #00dcec 0%, #53f3ff 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 36px;
      /* font-weight: 600;
      font-size: 119px */
    }
    p {
      max-width: 365px;
      font-weight: 600;
    }
  }
`;

export const Background = styled.img`
  background: url(${bgImg}) no-repeat;
  background-size: cover;
  width: 492px;
  height: 492px;
  border-radius: 50%;
  transform: scaleX(-1);
`;
