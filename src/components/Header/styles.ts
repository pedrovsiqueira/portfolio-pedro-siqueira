import styled from 'styled-components';
import bgImg from '../../assets/bg-img2.jpg';

export const Container = styled.div`
  height: 768px;
  width: 100vw;
  max-width: 1366px;
`;

export const Content = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 220px;
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
      width: 491px;
      font-weight: 800;
      font-size: 60px;
    }
    p {
      font-size: 16px;
      max-width: 365px;
      font-weight: 500;
    }
  }
`;

export const Background = styled.img`
  background: url(${bgImg}) no-repeat;
  background-size: cover;
  width: 492px;
  height: 492px;
  border: none;
  outline: none;
  border-radius: 50%;
`;
