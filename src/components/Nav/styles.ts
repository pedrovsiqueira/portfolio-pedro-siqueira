import styled from 'styled-components';

export const Nav = styled.nav`
  height: 70px;
  background: ${(props) => props.theme.backgroundColor} 0% 0% no-repeat
    padding-box;
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;

  @media (max-width: 840px) {
    justify-content: space-between;

    .logo {
      margin-left: 20px;
    }
  }

  .logo {
    ${(props) => props.theme.mainColor}
    font-weight: 600;
    margin-top: -15px;
  }
`;
