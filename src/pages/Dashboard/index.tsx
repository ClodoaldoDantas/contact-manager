import React from 'react';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <Container>
      <h1 style={{ marginBottom: 10 }}>
        Olá, {user?.displayName || user?.email}
      </h1>
      <Button onClick={logout}>Sair</Button>
    </Container>
  );
};

export default Dashboard;
