import React from 'react';
import { Container, CardContainer, CardContent } from './styles';
import projects from '../../../data/projects';

const Cards: React.FC = () => (
  <Container>
    {projects.map((item) => (
      <CardContainer>
        <CardContent>
          <h4>{item.title}</h4>
          <p>{item.summary}</p>
          {item.tech.map((item) => (
            <h6>{item}</h6>
          ))}
        </CardContent>
        <img src={item.img} alt="Project Img" />
      </CardContainer>
    ))}
  </Container>
);

export default Cards;
