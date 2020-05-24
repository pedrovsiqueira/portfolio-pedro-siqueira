import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  color: #fff;
  background: transparent linear-gradient(76deg, #00dcec 0%, #53f3ff 100%) 0% 0%
    no-repeat padding-box;
  width: 174px;
  height: 48px;
  font-weight: bold;
  font-size: 16px;
  border-radius: 10px;

  &:hover {
    background: ${shade(0.1, '#33E8F6')};
  }
`;
