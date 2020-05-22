import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    width: 448px;
    height: 56px;
    margin-bottom: 32px;
  }

  textarea {
    width: 448px;
    height: 128px;
    margin-bottom: 64px;
  }

  .input-styles {
    background: #484848 0% 0% no-repeat padding-box;
    padding: 20px 0 20px 15px;
    color: #dcdcdc;
    font-size: 14px;
  }

  button {
    color: #fff;
    background: transparent linear-gradient(76deg, #00dcec 0%, #53f3ff 100%) 0%
      0% no-repeat padding-box;
    width: 174px;
    height: 48px;
    font-weight: bold;
    font-size: 16px;
    border-radius: 10px;
  }
`;
