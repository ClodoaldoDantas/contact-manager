import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Container } from "./styles";
import { MdAccountCircle, MdEmail, MdArrowBack } from "react-icons/md";

const Profile: React.FC = () => {
  const { user } = useAuth();
  const history = useHistory();

  return (
    <Container>
      <div>
        <MdAccountCircle color="var(--primary)" size={20} />
        <strong>Nome do usuário:</strong>
        <span>{user?.displayName}</span>
      </div>

      <div>
        <MdEmail color="var(--primary)" size={20} />
        <strong>E-mail:</strong>
        <span>{user?.email}</span>
      </div>

      <button onClick={history.goBack}>
        <MdArrowBack size={20} />
        Voltar
      </button>
    </Container>
  );
};

export default Profile;
