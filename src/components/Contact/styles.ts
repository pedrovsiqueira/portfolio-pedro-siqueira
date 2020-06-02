import styled from 'styled-components';

export const Container = styled.section`
  height: 768px;
  width: 100vw;
  max-width: 1366px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 414px) {
    overflow-x: hidden;
  }
`;

export const Content = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 414px) {
    flex-direction: column;
    height: 800px;
    p {
      width: 366px;
    }
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;

  h2 {
    margin-bottom: 44px;
  }

  p {
    width: 429px;
    height: 142px;
    font-size: 16px;
    color: #dcdcdc;
    font-weight: 500;
  }

  a {
    font-weight: bold;
  }
`;
