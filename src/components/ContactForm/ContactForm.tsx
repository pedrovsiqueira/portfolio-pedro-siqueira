import React from 'react';
import { Form } from './styles';

const ContactForm: React.FC = () => (
  <Form>
    <input
      className="input-styles"
      placeholder="Nome"
      type="text"
      name="name"
      id="name"
    />
    <input
      className="input-styles"
      placeholder="E-mail"
      type="email"
      name="email"
      id="email"
    />

    <input
      className="input-styles"
      placeholder="Telefone"
      type="tel"
      name="phone"
      pattern="\([0-9]{2}\)[\s][0-9]{4}-[0-9]{4}"
    />

    <textarea
      className="input-styles"
      placeholder="Mensagem"
      name="message"
      id="message"
    />
    <button type="submit">enviar mensagem</button>
  </Form>
);

export default ContactForm;
