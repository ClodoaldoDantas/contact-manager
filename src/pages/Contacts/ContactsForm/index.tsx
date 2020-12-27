import React from "react";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import Input from "../../../components/Input";
import { Form } from "./styles";

const ContactsForm: React.FC = () => {
  return (
    <Card>
      <Form>
        <h2>🥳 Adicionar contato</h2>
        <Input placeholder="Nome" />
        <Input placeholder="E-mail" />
        <Input type="number" placeholder="Whatsapp (apenas números)" />
        <Input placeholder="Avatar" />

        <Button>Adicionar</Button>
      </Form>
    </Card>
  );
};

export default ContactsForm;
