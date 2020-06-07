import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin-top: 75px;
  width: 1088px;

  @media screen and (max-width: 375px) {
    width: 350px;
  }

  @media screen and (max-width: 900px) {
    width: 500px;
  }

  @media screen and (max-width: 414px) {
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  margin-bottom: 80px;

  .switch-projects {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .switch-projects-reverse {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
  }

  p {
    margin-bottom: 17px;
    font-size: 16px;
  }

  h4 {
    font-size: 31px;
    margin: 20px 0px 25px 0px;
    font-weight: 600;
  }

  h5 {
    display: inline;
    margin: 0 15px 47px 0;

    h5:last-child {
      display: none;
    }
  }

  .ball-divider {
    margin-right: 15px;
  }

  [class~='ball-divider']:last-of-type {
    display: none;
  }

  .img-container {
    width: 512px;
    height: 304px;
    overflow: hidden;
    border-radius: 10px;
  }

  .project-img {
    filter: grayscale(100%);
    width: 100%;
    transition: filter 1.2s ease;
    border-radius: 10px;
    object-fit: cover;
    &:hover {
      filter: none;
    }
  }

  @media screen and (max-width: 1072px) {
    /* width: 1000px; */
    margin-left: 100px;

    .switch-projects {
      width: 100%;
      justify-content: center;
    }
    .switch-projects-reverse {
      width: 100%;
    }
    .img-container {
      margin: 0 30px;
    }
  }

  @media screen and (max-width: 900px) {
    margin-left: 20px;
    /* width: 800px; */

    .switch-projects {
      flex-direction: column;
      align-items: center;
    }

    .switch-projects-reverse {
      flex-direction: column;
      align-items: center;
    }

    .img-container {
      width: 560px;
    }
  }

  @media screen and (max-width: 414px) {
    width: 366px;
    .switch-projects {
      flex-direction: column;
    }

    .switch-projects-reverse {
      flex-direction: column;
    }

    .img-container {
      width: 366px;
      height: 217px;
    }

    h4 {
      margin-top: 0;
    }
  }

  @media screen and (max-width: 375px) {
    width: 330px;

    h5 {
      margin: 0 10px 30px 0px;
    }
    .img-container {
      width: 340px;
      height: 217px;
    }
  }

  @media screen and (max-width: 360px) {
    h5 {
      font-size: 10px;
    }
  }
`;

export const CardContent = styled.div`
  width: 550px;

  @media screen and (max-width: 414px) {
    width: 366px;
  }

  @media screen and (max-width: 360px) {
    width: 330px;
  }
`;

export const Links = styled.div`
  margin-top: 47px;
  display: flex;

  img {
    margin: 0 32px;
  }

  a {
    font-weight: 600;
    text-decoration: none;
    &:hover {
      color: ${shade(0.01, '#33E8F6')};
    }
  }

  .link-color {
    background: -webkit-linear-gradient(82deg, #00dcec 0%, #53f3ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (max-width: 414px) {
    margin-bottom: 41px;
  }

  @media screen and (max-width: 1072px) {
    margin-top: 20px;
  }

  @media screen and (max-width: 900px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 375px) {
    /* width: 330px; */
    margin: 20px 0px;
    a {
      font-size: 14px;
    }
  }
`;
