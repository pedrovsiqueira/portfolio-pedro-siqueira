import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Container, ContactInfo, Content } from './styles';

const Contact: React.FC = () => (
  <Container>
    <Content>
      <ContactInfo>
        <h5 id="contact">contato</h5>
        <h2>quer conversar comigo?</h2>
        <p>
          Caso tenha se interessado pelo meu trabalho, preencha o formulário que
          em breve conversaremos. <br /> <br />
          Se preferir, pode me enviar um e-mail{' '}
          <a href="mailto:pedro.v.siqueira@gmail.com">
            pedro.v.siqueira@gmail.com
          </a>
        </p>
      </ContactInfo>
      <ContactForm />
    </Content>
  </Container>
);

export default Contact;
