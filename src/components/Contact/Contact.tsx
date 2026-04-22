import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Container, ContactInfo, Content } from './styles';
import { FormattedMessage } from 'react-intl';

const Contact: React.FC = () => (
  <Container id="contact">
    <Content>
      <ContactInfo>
        <span className="section-eyebrow">
          <FormattedMessage id="contact.title" />
        </span>
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
