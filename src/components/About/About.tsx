import React from 'react';
import { Container, Content, AboutText } from './styles';
import SocialIcons from '../SocialIcons/SocialIcons';
import AboutCards from './Cards/AboutCards';
import CarouselAboutCards from './CarouselCards/CarouselAboutCards';
import { FormattedMessage } from 'react-intl';

const About: React.FC = () => {
  return (
    <Container id="about" data-testid="container">
      <Content>
        <AboutText>
          <span className="section-eyebrow">
            <FormattedMessage id="about.title" />
          </span>
          <h2>
            <FormattedMessage
              id="about.message"
              values={{
                span: (word: string) => <span>{word}</span>,
              }}
            />
          </h2>
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
