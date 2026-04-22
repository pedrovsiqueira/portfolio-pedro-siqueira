import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 0;
`;

export const Content = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    width: 100%;

    p {
      max-width: 100%;
    }
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 429px;

  h2 {
    margin-bottom: 44px;
  }

  p {
    max-width: 429px;
    font-size: 16px;
    color: ${(props) => props.theme.colors.textColor};
    font-weight: 500;
    line-height: 1.7;
  }

  a {
    font-weight: bold;
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme.colors.inputColor};
    }
  }

  @media screen and (max-width: 768px) {
    margin-right: 0;
  }

  @media screen and (max-width: 393px) {
    h2 {
      font-size: 28px;
    }
    p {
      max-width: 100%;
    }
  }

  @media screen and (max-width: 360px) {
    h2 {
      font-size: 27px;
    }
  }
`;
