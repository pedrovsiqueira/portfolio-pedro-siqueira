import styled from 'styled-components';

export const Content = styled.div`
  width: 90vw;
  max-width: 1150px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Container = styled.div`
  background: ${(props) => props.theme.colors.cardsBackgroundColor} 0% 0%
    no-repeat padding-box;
  margin-top: 104px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 240px;
  height: 240px;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: -7px;
  margin-bottom: 32px;
  width: 50px;
  height: 50px;
  background: ${(props) => props.theme.colors.iconBackgroundColor};
  border-radius: 50%;

  img {
    width: 32px;
    height: 32px;
    filter: brightness(0) invert(1);
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
    font-size: 20px;
  }

  p {
    width: 208px;
    font-size: 14px;
    font-weight: 500;
  }
`;
