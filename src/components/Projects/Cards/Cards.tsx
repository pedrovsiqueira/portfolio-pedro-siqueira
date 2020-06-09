import React, {Fragment} from 'react';
import { Container, CardContainer, CardContent, Links } from './styles';
import detailSvg from '../../../assets/Divider_cinza.svg';
import dividerBolaSvg from '../../../assets/Divider_bola.svg';
import projects from '../../../data/projects';

const Cards: React.FC = (): any => {
  return (
    <Container>
      {projects.map((item, index) => {
        const { title, summary, tech, img, repo, demo, id } = item;
        return (
          <CardContainer data-aos="fade-up" key={id}>
            <div
              className={
                index % 2 === 0 ? 'switch-projects' : 'switch-projects-reverse'
              }
            >
              <CardContent>
                <h4>{title}</h4>
                <p>{summary}</p>
                {tech.map((item, index) => (
                  <Fragment key={item}>
                    <h5>{item}</h5>
                    <img
                      className="ball-divider"
                      src={dividerBolaSvg}
                      alt="divider"
                    />
                  </Fragment>
                ))}

                <Links>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-color"
                    href={demo}
                  >
                    acessar demo
                  </a>
                  <img id="details-logo" src={detailSvg} alt="Details logo" />
                  <a target="_blank" rel="noopener noreferrer" href={repo}>
                    acessar repositório
                  </a>
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
};

export default Cards;
