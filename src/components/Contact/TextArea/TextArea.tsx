import React, { TextareaHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const TextArea: React.FC<TextAreaProps> = ({ icon: Icon, ...rest }) => (
  <Container>
    {Icon && <Icon size={20} />}
    <textarea {...rest} />
  </Container>
);

export default TextArea;
