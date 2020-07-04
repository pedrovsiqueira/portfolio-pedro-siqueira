import React from 'react';
import { Container, Content } from './styles';
import Cards from './Cards/Cards';
import { FormattedMessage } from 'react-intl';

const Projects: React.FC = () => (
  <Container>
    <Content>
      <h5 id="portfolio">
        <FormattedMessage id="portfolio.title" />
      </h5>
      <h2>
        <FormattedMessage id="portfolio.message" />
      </h2>
      <Cards />
    </Content>
  </Container>
);

export default Projects;
