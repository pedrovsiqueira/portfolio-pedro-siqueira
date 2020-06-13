import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  max-width: 1366px;
`;

export const Content = styled.footer`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0 20px 0;
  background-color: #353535;


  @media screen and (max-width: 480px) {
    margin-top: 20px;

    p {
      width: 100%;
      text-align: center;
      font-size: 14px;
    }
  }

  p {
    font-weight: 500;
    margin-bottom: 20px;
  }
  em {
    font-weight: 700;
  }
`;
