import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import {
  MdPermContactCalendar,
  MdAccountCircle,
  MdPowerSettingsNew,
} from "react-icons/md";

import { useAuth } from "../../hooks/auth";
import { Container, Logo, Dropdown } from "./styles";

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const [show, setShow] = useState(false);
  const history = useHistory();

  const handleNavigateToProfile = () => {
    setShow(false);
    history.push("/dashboard/profile");
  };

  const toggleDropdown = () => setShow(!show);

  return (
    <Container>
      <Link to="/dashboard">
        <Logo>
          <MdPermContactCalendar size={24} />
          <h3>Contact Manager</h3>
        </Logo>
      </Link>

      <strong onClick={toggleDropdown}>Olá, {user?.email}</strong>

      <Dropdown show={show}>
        <button onClick={handleNavigateToProfile}>
          <MdAccountCircle color="var(--primary)" size={20} />
          Meu perfil
        </button>
        <button onClick={logout}>
          <MdPowerSettingsNew color="var(--primary)" size={20} />
          Sair da Plataforma
        </button>
      </Dropdown>
    </Container>
  );
};

export default Header;
