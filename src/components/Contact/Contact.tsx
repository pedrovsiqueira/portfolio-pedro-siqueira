import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Container, ContactInfo, Content } from './styles';
import { FormattedMessage } from 'react-intl';

const Contact: React.FC = () => (
  <Container>
    <Content>
      <ContactInfo>
        <h5 id="contact">
          <FormattedMessage id="contact.title" />
        </h5>
        <h2>
          <FormattedMessage id="contact.message" />
        </h2>
        <p>
          <FormattedMessage id="contact.first.paragraph" />
          <br /> <br />
          <FormattedMessage id="contact.second.paragraph" />{' '}
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
