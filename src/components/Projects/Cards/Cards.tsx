import React from 'react';
import { Container, CardContainer, CardContent, Links } from './styles';
import detailSvg from '../../../assets/detail-no-color.svg';
import projects from '../../../data/projects';

const Cards: React.FC = () => (
  <Container>
    {projects.map((item, index) => {
      const { title, summary, tech, img, repo, demo } = item;
      return (
        <CardContainer>
          <div
            className={
              index % 2 === 0 ? 'switch-projects' : 'switch-projects-reverse'
            }
          >
            <CardContent>
              <h4>{title}</h4>
              <p>{summary}</p>
              {tech.map((item) => (
                <h5>{item}</h5>
              ))}

              <Links>
                <a className="link-color" href={demo}>
                  acessar demo
                </a>
                <img id="details-logo" src={detailSvg} alt="Details logo" />
                <a href={repo}>acessar repositório</a>
              </Links>
            </CardContent>
            <div className="img-container">
              <img className="project-img" src={img} alt="Project Img" />
            </div>
          </div>
        </CardContainer>
      );
    })}
  </Container>
);

export default Cards;
