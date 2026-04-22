import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  padding: 80px 0;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .section-eyebrow {
    display: block;
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 2.58px;
    color: ${(props) => props.theme.colors.h5TextColor};
    text-transform: uppercase;
    margin-bottom: 17px;
  }
`;

export const Grid = styled.div`
  width: 90%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 560px) {
    grid-template-columns: 1fr;
    width: 85%;
  }
`;

export const Card = styled.div`
  background: ${(props) => props.theme.colors.cardsBackgroundColor};
  border-radius: 10px;
  padding: 24px;
`;

export const CategoryTitle = styled.h3`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 14px;
  ${(props) => props.theme.colors.mainColor}
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.span`
  background: ${(props) => props.theme.colors.tagBackgroundColor};
  color: ${(props) => props.theme.colors.textColor};
  font-size: 12px;
  font-weight: 500;
  padding: 5px 12px;
  border-radius: 20px;
  white-space: nowrap;
`;
