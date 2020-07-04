import React from 'react';
import { Form } from './styles';
import Input from '../Input/Input';
import Button from '../Button/Button';
import TextArea from '../TextArea/TextArea';
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import { FormattedMessage } from 'react-intl';

const ContactForm: React.FC = () => (
  <Form name="contact" method="post">
    <input type="hidden" name="form-name" value="contact"></input>
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

    <TextArea
      placeholder="Mensagem"
      name="message"
      id="message"
      icon={FiMessageSquare}
      required
    />
    <Button type="submit">
      <FormattedMessage id="contact.button" />
    </Button>
  </Form>
);

export default ContactForm;
