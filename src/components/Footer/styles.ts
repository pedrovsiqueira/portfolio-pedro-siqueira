import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  max-width: 1366px;
  height: 80px;
`;

export const Content = styled.footer`
width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-weight: 500;
    margin-bottom: 20px;
  }
  em {
    font-weight: 700;
  }
`;
