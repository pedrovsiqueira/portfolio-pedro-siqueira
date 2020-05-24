import styled from 'styled-components';

export const Container = styled.div`
  background: #484848 0% 0% no-repeat padding-box;
  margin-bottom: 64px;
  display: flex;
  border-radius: 10px;

  textarea {
    color: #dcdcdc;
    background: transparent;
    font-size: 14px;
    padding: 20px 20px 20px 15px;
    width: 448px;
    height: 128px;

    &::placeholder {
      color: #dcdcdc;
    }
  }

  svg {
    color: #dcdcdc;
    margin: 20px 0 0 16px;
  }
`;
