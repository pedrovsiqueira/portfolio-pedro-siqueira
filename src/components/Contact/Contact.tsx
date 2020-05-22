import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import { Container, ContactInfo } from './styles';

const Contact: React.FC = () => (
  <Container>
    <ContactInfo>
      <h5>contato</h5>
      <h2>quer conversar comigo?</h2>
      <p>
        Caso tenha se interessado pelo meno trabalho, preencha o formulário que
        em breve conversaremos.
      </p>
      <p>Se preferir, pode me enviar um e-mail pedro.v.siqueira@gmail.com</p>
    </ContactInfo>
    <ContactForm />
  </Container>
);

export default Contact;
