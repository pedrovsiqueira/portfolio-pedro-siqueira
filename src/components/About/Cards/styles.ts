import styled from 'styled-components';

export const Content = styled.div`
  width: 90vw;
  max-width: 1150px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 16px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Container = styled.div`
  position: relative;
  background: ${(props) => props.theme.colors.cardsBackgroundColor} 0% 0%
    no-repeat padding-box;
  margin-top: 60px;
  padding: 48px 20px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 240px;
  min-height: 220px;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
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
  align-items: center;
  text-align: center;

  h3 {
    margin-bottom: 12px;
    font-size: 18px;
  }

  p {
    width: 200px;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.6;
  }
`;
