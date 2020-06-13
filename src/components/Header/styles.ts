import styled from 'styled-components';
import bgImg from '../../assets/main-pictures/bg-img1.jpg';

export const Container = styled.div`
  height: 768px;
  width: 100vw;
  max-width: 1366px;

  @media screen and (max-width: 840px) {
    height: 784px;
    margin-top: 0px;
  }
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

  @media screen and (max-width: 840px) {
    flex-direction: column-reverse;
    margin-top: 30px;
    height: 736px;
    width: 100%;

    .background-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 40px;
      z-index: 0;
      h1 {
        font-size: 50px;
        width: 400px;
      }

      p {
        margin-bottom: 36px;
      }
    }
  }

  @media screen and (max-width: 1920px) {
    margin-top: 315px;
  }

  @media screen and (max-width: 1536px) {
    margin-top: 220px;
  }

  @media screen and (max-width: 840px) {
    margin-top: 30px;
  }

  @media screen and (max-width: 475px) {
    .background-text {
      margin-left: 15px;
      h1 {
        font-size: 45px;
      }
    }
  }

  @media screen and (max-width: 375px) {
    .background-text {
      h1 {
        font-size: 38px;
        max-width: 345px;
      }

      p {
        max-width: 340px;
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

  @media screen and (max-width: 414px) {
    width: 354px;
    height: 354px;
    display: flex;
    justify-content: center;
    /* border-radius: 50%; */
  }
`;
