import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  max-width: 1000px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (max-width: 414px) {
    display: none;
  }
`;

export const Card = styled.div`
  background: #353535 0% 0% no-repeat padding-box;
  border-radius: 10px;
  width: 304px;
  height: 288px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 10px;
  margin-bottom: 32px;
  /* border: 1.5px solid #41ebf8; */
  /* border: 2px solid #41ebf8; */

  p {
    padding: 10px 48px 0px 48px;
    font-size: 14px;
    font-weight: 500;
    height: 160px;
  }

  h3 {
    padding: 10px 0 0 48px;
  }
`;
