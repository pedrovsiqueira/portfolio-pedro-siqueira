import styled from 'styled-components';
import bgImg from '../../assets/main-pictures/bg-img1.webp';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  overflow: hidden;

  @media screen and (max-width: 840px) {
    min-height: auto;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 220px;
  display: flex;

  .background-text {
    z-index: 1;

    h1 {
      ${(props) => props.theme.colors.mainColor}
      margin-bottom: 36px;
      max-width: 491px;
      width: 100%;
      font-weight: 800;
      font-size: 60px;
    }
    p {
      font-size: 16px;
      max-width: 365px;
      font-weight: 500;
    }
  }

  @media screen and (max-width: 1920px) {
    margin-top: 315px;
  }

  @media screen and (max-width: 1536px) {
    margin-top: 220px;
  }

  @media screen and (max-width: 840px) {
    flex-direction: column-reverse;
    margin-top: 90px;
    padding-bottom: 48px;
    width: 100%;

    .background-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-left: 0;
      padding: 0 24px;
      text-align: center;
      z-index: 0;

      h1 {
        font-size: 50px;
        max-width: 400px;
        width: 100%;
      }

      p {
        margin-bottom: 36px;
        max-width: 400px;
      }
    }
  }

  @media screen and (max-width: 475px) {
    margin-top: 80px;

    .background-text {
      h1 {
        font-size: 42px;
        max-width: 320px;
      }

      p {
        max-width: 320px;
      }
    }
  }

  @media screen and (max-width: 375px) {
    .background-text {
      h1 {
        font-size: 36px;
        max-width: 290px;
      }

      p {
        max-width: 290px;
      }
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

  @media screen and (max-width: 840px) {
    width: 400px;
    height: 400px;
  }

  @media screen and (max-width: 480px) {
    width: 354px;
    height: 354px;
    display: flex;
    justify-content: center;
    /* border-radius: 50%; */
  }
`;
