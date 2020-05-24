import styled from 'styled-components';

export const Content = styled.div`
  width: 80vw;
  max-width: 1366px;
  display: flex;
  justify-content: space-around;
`;

export const Card = styled.div`
  margin-top: 104px;
  background: #353535 0% 0% no-repeat padding-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 240px;
  transition: border 0.2s;

  &:hover {
    border: 2px solid #41ebf8;
  }

  h3 {
    font-weight: 600;
    background: -webkit-linear-gradient(82deg, #00dcec 0%, #53f3ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 15px;
  }

  p {
    width: 208px;
    font-size: 14px;
    font-weight: 500;
  }
`;
