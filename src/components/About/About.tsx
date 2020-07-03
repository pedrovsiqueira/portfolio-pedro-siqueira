import React from 'react';
import { Container, Content, AboutText } from './styles';
import SocialIcons from '../SocialIcons/SocialIcons';
import AboutCards from './Cards/AboutCards';
import CarouselAboutCards from './CarouselCards/CarouselAboutCards';
import { FormattedMessage } from 'react-intl';

const About: React.FC = () => {
  return (
    <Container data-testid="container">
      <Content>
        <AboutText>
          <h5 id="about">
            <FormattedMessage id="about.title" />
          </h5>
          <h1>
            <FormattedMessage
              id="about.message"
              values={{
                span: (word: string) => <span>{word}</span>,
              }}
            />
          </h1>
          <p data-aos="fade-up" className="about-me">
            <FormattedMessage id="about.paragraph" />
          </p>
          <SocialIcons className="social-icons" />
          <AboutCards />
          <CarouselAboutCards />
        </AboutText>
      </Content>
    </Container>
  );
};

export default About;
