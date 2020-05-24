import styled from 'styled-components';

export const Container = styled.div`
  background: #484848 0% 0%;
  margin-bottom: 32px;

  display: flex;
  align-items: center;
  border-radius: 10px;

  input {
    color: #dcdcdc;
    flex: 1;
    background: transparent;
    font-size: 14px;
    padding: 20px 20px 20px 15px;
    width: 448px;
    height: 56px;

    &::placeholder {
      color: #dcdcdc;
    }
  }

  svg {
    color: #dcdcdc;
    margin-left: 16px;
  }
`;
