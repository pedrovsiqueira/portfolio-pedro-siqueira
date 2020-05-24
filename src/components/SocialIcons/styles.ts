import styled from 'styled-components';
import { shade } from 'polished';

export const Icons = styled.div`
  img {
    margin-right: 32px;

    &:hover {
      color: ${shade(0.1, '#33E8F6')};
    }
  }
`;
