import React, { useContext } from 'react';
import { Content, Card, Container, IconContainer } from './styles';
import { Context } from '../../../hooks/context';
import useScroll from '../../../hooks/useScroll';
import { FiLayout, FiServer, FiCpu, FiCloud } from 'react-icons/fi';

const iconMap: Record<number, React.ReactElement> = {
  1: <FiLayout size={28} />,
  2: <FiServer size={28} />,
  3: <FiCpu size={28} />,
  4: <FiCloud size={28} />,
};

const AboutCards: React.FC = () => {
  // eslint-disable-next-line
  const [effect] = useScroll();
  const { hobbies } = useContext(Context);

  return (
    <Content>
      {hobbies.map((item) => (
        <Container data-aos="fade-up" key={item.id}>
          <IconContainer>{iconMap[item.id]}</IconContainer>
          <Card>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </Card>
        </Container>
      ))}
    </Content>
  );
};

export default AboutCards;
