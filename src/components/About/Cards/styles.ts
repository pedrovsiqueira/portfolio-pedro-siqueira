import styled from 'styled-components';

export const Content = styled.div`
  width: 80vw;
  max-width: 1366px;
  display: flex;
  justify-content: space-around;
`;

export const Container = styled.div`
  background: #353535 0% 0% no-repeat padding-box;
  margin-top: 104px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 240px;
  height: 240px;
  border: 2px solid #41ebf8;

`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: -23px;
  margin-bottom: 44px;
  width: 50px;
  height: 50px;
  background: transparent linear-gradient(76deg, #00dcec 0%, #53f3ff 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 50%;

  svg {
    width: 32px;
    height: 32px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: border 0.2s;

  h3 {
    margin-bottom: 15px;
  }

  p {
    width: 208px;
    font-size: 14px;
    font-weight: 500;
  }
`;
