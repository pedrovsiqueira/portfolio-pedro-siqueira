import React from 'react';
import { Container, CardContainer, CardContent, Links } from './styles';
import detailSvg from '../../../assets/detail-no-color.svg';
import projects from '../../../data/projects';

const Cards: React.FC = () => (
  <Container>
    {projects.map((item) => (
      <CardContainer>
        <CardContent>
          
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          {item.tech.map((item) => (
            <h5>{item}</h5>
          ))}

          <Links>
            <a className="link-color" href={item.demo}>
              acessar demo
            </a>
            <img id="details-logo" src={detailSvg} alt="Details logo" />
            <a href={item.repo}>acessar repositório</a>
          </Links>

        </CardContent>
        <img className="project-img" src={item.img} alt="Project Img" />
      </CardContainer>
    ))}
  </Container>
);

export default Cards;
