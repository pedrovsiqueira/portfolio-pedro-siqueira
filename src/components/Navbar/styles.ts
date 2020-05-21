import styled from 'styled-components';

export const Container = styled.nav`
  margin-top: 5px;
  width: 100vw;
  max-width: 1366px;
  height: 80px;
`;

export const Content = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .pedro-siqueira-logo {
    font-weight: 600;
  }
`;

export const Links = styled.div`
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
`;

export const Contact = styled.div`
  display: inline;

  a {
    font-weight: 700;
  }
`;
