import styled from 'styled-components';
import { shade } from 'polished';

export const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 104px;

  img {
    margin-right: 32px;

    &:hover {
      color: ${shade(0.1, '#33E8F6')};
    }
  }

  a {
    font-weight: 600;
    font-size: 16px;

    &:hover {
      color: ${shade(0.01, '#33E8F6')};
    }
  }
`;
