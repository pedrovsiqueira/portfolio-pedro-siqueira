import React from 'react';
import { Container, Content } from './styles';
import Cards from './Cards/Cards';
import CardsCarousel from './CardsCarousel/CardsCarousel';
import { FormattedMessage } from 'react-intl';

const Contact: React.FC = () => (
  <Container>
    <Content>
      <h5 id="testimonials">
        <FormattedMessage id="testimony.title" />
      </h5>
      <h2>
        <FormattedMessage id="testimony.message" />
      </h2>
      <CardsCarousel />
      <Cards />
    </Content>
  </Container>
);

export default Contact;
