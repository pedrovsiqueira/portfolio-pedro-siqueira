import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  display: none;

  @media screen and (max-width: 770px) {
    display: flex;
  }
`;

export const Card = styled.div`
  background: ${(props) => props.theme.colors.cardsBackgroundColor} 0% 0%
    no-repeat padding-box;
  border-radius: 10px;
  width: 364px;
  height: 348px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 10px;

  p {
    padding: 10px 48px 0px 48px;
    font-size: 17px;
    font-weight: 500;
    height: 200px;
  }

  h3 {
    padding: 30px 0 0 48px;
    font-size: 24px;
  }

  .carousel-indicators {
    display: none;
  }
`;
