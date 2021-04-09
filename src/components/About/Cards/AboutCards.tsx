import React, { useContext } from 'react';
import { Content, Card, Container, IconContainer } from './styles';
import { Context } from '../../../hooks/context';
import useScroll from '../../../hooks/useScroll';

const AboutCards: React.FC = () => {
  // eslint-disable-next-line
  const [effect] = useScroll();
  const { hobbies } = useContext(Context);

  return (
    <Content>
      {hobbies.map((item) => (
        <Container data-aos="fade-up" key={item.id}>
          <Card>
            <IconContainer>
              <img src={item.img} alt="Icon img" />
            </IconContainer>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </Card>
        </Container>
      ))}
    </Content>
  );
};

export default AboutCards;
