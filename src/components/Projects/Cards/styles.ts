import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 75px;
  width: 1088px;

  @media screen and (max-width: 414px) {
    width: 366px;
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
    margin: 41px 0px 25px 0px;
    font-weight: 600;
  }

  h5 {
    display: inline;
    margin: 0 10px 47px 0;
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

  @media screen and (max-width: 414px) {
    width: 366px;
    .switch-projects {
      flex-direction: column;
    }

    .switch-projects-reverse {
      flex-direction: column;
    }

    .img-container{
      width: 366px;
      height: 217px;
    }
  }
`;

export const CardContent = styled.div`
  width: 550px;

  @media screen and (max-width: 414px) {
    width: 366px;
  }
`;

export const Links = styled.div`
  margin-top: 47px;
  display: flex;
  align-items: center;

  img {
    margin: 0 32px;
  }

  a {
    font-weight: 600;
  }

  .link-color {
    background: -webkit-linear-gradient(82deg, #00dcec 0%, #53f3ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
