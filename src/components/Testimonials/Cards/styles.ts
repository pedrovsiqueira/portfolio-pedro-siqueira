import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  max-width: 1366px;
  display: flex;
  justify-content: space-around;
`;

export const Card = styled.div`
  background: #353535 0% 0% no-repeat padding-box;
  border-radius: 10px;
  width: 304px;
  height: 288px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  p{

    padding: 0px 48px 16px 48px;
    font-size: 14px;
    font-weight: 500;
  }

  h4{
    padding-left: 48px;
  }
`;
