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
  padding: 50px 0 20px 0;
  /* margin-bottom: 40px; */
  background-color: #484848;


  @media screen and (max-width: 414px) {
    margin: 20px 20px;

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
