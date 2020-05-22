import React from 'react';
import { Form } from './styles';

const ContactForm: React.FC = () => (
  <Form>
    <input placeholder="Nome" type="text" name="name" id="name" />
    <input placeholder="E-mail" type="email" name="email" id="email" />
    <input placeholder="Telefone" type="telefone" name="name" id="name" />
    <textarea placeholder="Mensagem" name="message" id="message" />
    <button type="submit">enviar mensagem</button>
  </Form>
);

export default ContactForm;
