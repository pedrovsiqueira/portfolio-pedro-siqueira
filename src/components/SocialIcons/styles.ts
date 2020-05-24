import styled from 'styled-components';
import { shade } from 'polished';

export const Icons = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  margin-bottom: 104px;

  svg {
    width: 20px;
    height: 20px;
    &:hover {
      color: ${shade(0.1, '#33E8F6')};
    }
  }

  img {
    margin-right: 32px;
    width: 25px;
    height: 25px;
  }

  a {
    font-weight: 600;
    font-size: 16px;
    display: block;
    margin-right: 32px;

    &:hover {
      color: ${shade(0.01, '#33E8F6')};
    }
  }
`;
