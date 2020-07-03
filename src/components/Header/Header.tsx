import React from 'react';
import { Container, Content, Background } from './styles';
import { FormattedMessage } from 'react-intl';

const Header: React.FC = () => (
  <Container>
    <Content>
      <Background />
      <div className="background-text">
        <h1>
          <FormattedMessage id="header.title" />
        </h1>
        <p>
          <FormattedMessage id="header.message" />
        </p>
      </div>
    </Content>
  </Container>
);

export default Header;
