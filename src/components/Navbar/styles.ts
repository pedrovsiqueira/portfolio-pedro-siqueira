import styled from 'styled-components';

export const Container = styled.nav`
  margin: 30px 0;
  width: 100vw;
  max-width: 1366px;
  height: 80px;
`;

export const Content = styled.div`
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .pedro-siqueira-logo {
    background: -webkit-linear-gradient(82deg, #00dcec 0%, #53f3ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-right: 38px;
    font-weight: 400;
  }

  #details-logo {
    margin-right: 38px;
  }

  #contact-logo {
    margin-right: 8px;
  }

  .contact {
    display: flex;
    align-items: center;
    font-weight: 700;
  }
`;
