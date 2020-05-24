import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Container, ContactInfo } from './styles';

const Contact: React.FC = () => (
  <Container>
    <ContactInfo>
      <h5>contato</h5>
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
  </Container>
);

export default Contact;
