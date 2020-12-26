import React from 'react';
import { Container } from './styles';
import { MdErrorOutline } from 'react-icons/md';

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <Container>
      <MdErrorOutline size={18} />
      {message}
    </Container>
  );
};

export default Error;
