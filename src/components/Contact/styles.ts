import styled from 'styled-components';

export const Container = styled.section`
  height: 688px;
  width: 100vw;
  max-width: 1366px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  h5 {
    font-style: bold;
    font-size: 13px;
    letter-spacing: 2.58px;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 17px;
  }

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

  a{
    font-weight: bold;
  }
`;
