import React from 'react';
import { Form } from './styles';
import Input from '../Input/Input';
import Button from '../Button/Button';
import TextArea from '../TextArea/TextArea';
import { FiSmartphone, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';

const ContactForm: React.FC = () => (
  <Form>
    <Input
      placeholder="Nome"
      type="text"
      name="name"
      id="name"
      icon={FiUser}
      required
    />

    <Input
      placeholder="E-mail"
      type="email"
      name="email"
      id="email"
      icon={FiMail}
      required
    />

    <Input
      placeholder="Telefone"
      type="tel"
      name="phone"
      pattern="\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}$"
      icon={FiSmartphone}
      required
    />

    <TextArea
      placeholder="Mensagem"
      name="message"
      id="message"
      icon={FiMessageSquare}
      required
    />
    <Button type="submit">enviar mensagem</Button>
  </Form>
);

export default ContactForm;
