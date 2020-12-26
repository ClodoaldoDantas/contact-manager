import React, { FormEvent, useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Error from '../../components/Error';
import { Container, Form } from './styles';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, error, loading } = useAuth();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    login(email, password);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>🤗 Faça seu login</h2>

        {error && <Error message={error} />}

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
          {loading ? 'Entrando ...' : 'Entrar'}
        </Button>

        <p className="link">
          Ainda não tem conta ? <Link to="/register">Registre-se</Link>
        </p>
      </Form>
    </Container>
  );
};

export default Login;
