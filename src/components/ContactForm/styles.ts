import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    width: 448px;
    height: 56px;
    background: #484848 0% 0% no-repeat padding-box;
    margin-bottom: 32px;
  }

  textarea {
    width: 448px;
    height: 128px;
    background: #484848 0% 0% no-repeat padding-box;
    margin-bottom: 64px;
  }
  button {
    color: #FFF;
    background: transparent linear-gradient(76deg, #00dcec 0%, #53f3ff 100%) 0%
      0% no-repeat padding-box;
  }
`;
