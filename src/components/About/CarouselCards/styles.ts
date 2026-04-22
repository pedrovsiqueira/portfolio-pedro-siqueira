import styled from 'styled-components';

export const Content = styled.div`
  max-width: 912px;
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .carousel-control-next,
  .carousel-control-prev {
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
  width: 300px;
  min-height: 240px;
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
    font-size: 22px;
  }

  p {
    width: 240px;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.6;
  }
`;
