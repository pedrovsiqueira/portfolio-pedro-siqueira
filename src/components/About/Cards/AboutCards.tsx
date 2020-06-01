import React from 'react';
import { Content, Card, Container, IconContainer } from './styles';

import hobbies from '../../../data/hobbies';

const AboutCards: React.FC = () => (
  <Content>
    {hobbies.map((item) => (
      <Container>
        <Card>
          <IconContainer><img src={item.img} alt="Icon img"/></IconContainer>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
        </Card>
      </Container>
    ))}
  </Content>
);

export default AboutCards;
