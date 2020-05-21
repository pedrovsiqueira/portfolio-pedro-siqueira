import styled from 'styled-components';
import bgImg from '../../assets/bg-img.jpg';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 1366px;
`;

export const Content = styled.div`
  width: 100vh;
`;

export const BackgroundText = styled.div`
  display: flex;
`;

export const Background = styled.img`
  background: url(${bgImg}) no-repeat;
  background-size: cover;
  width: 492px;
  height: 492px;
  border-radius: 50%;
  transform: scaleX(-1);
`;
