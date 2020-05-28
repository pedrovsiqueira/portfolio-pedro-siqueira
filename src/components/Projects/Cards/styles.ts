import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 75px;
  width: 1088px;
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;

  p {
    margin-bottom: 17px;
    font-size: 16px;
  }

  h4 {
    font-size: 31px;
    margin: 41px 0px 25px 0px;
  }

  h5 {
    display: inline;
    margin: 0 15px 47px 0;
  }

  .project-img {
    filter: grayscale(100%);
    width: 512px;
    height: 304px;
    border-radius: 10px;
    transition: filter 1.2s ease;

    &:hover {
      filter: none;
    }
  }
`;

export const CardContent = styled.div`
  width: 550px;
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
