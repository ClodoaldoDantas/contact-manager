import React, { FormEvent, useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Error from '../../components/Error';
import { Container, Form } from './styles';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { register, error, loading } = useAuth();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    register(name, email, password);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>🧐 Crie sua conta</h2>

        {error && <Error message={error} />}

        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Button disabled={loading} isLoading={loading} type="submit">
          {loading ? 'Criando ...' : 'Criar'}
        </Button>

        <p className="link">
          Já tem conta ? <Link to="/">Faça seu login</Link>
        </p>
      </Form>
    </Container>
  );
};

export default Register;
