import styled from 'styled-components';

export const Nav = styled.nav`
  height: 80px;
  background: #272727 0% 0% no-repeat padding-box;
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 2;

  @media (max-width: 768px) {
    justify-content: space-between;

    .logo{
      margin-left: 20px;
    }
  }

  .logo {
    background: -webkit-linear-gradient(82deg, #00dcec 0%, #53f3ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
  }
`;
