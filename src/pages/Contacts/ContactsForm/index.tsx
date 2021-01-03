import React, { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import Input from "../../../components/Input";
import { useAuth } from "../../../hooks/auth";
import { firebaseStore } from "../../../services/firebase";
import { Form } from "./styles";

interface ContactForm {
  name: string;
  email: string;
  whatsapp: string;
  avatar: string;
}

const initialState: ContactForm = {
  name: "",
  email: "",
  whatsapp: "",
  avatar: "",
};

const ContactsForm: React.FC = () => {
  const [data, setData] = useState<ContactForm>(initialState);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    await firebaseStore
      .collection("contacts")
      .add({ ...data, user_id: user?.uid });

    setLoading(false);
    setData(initialState);
  };

  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <h2>🥳 Adicionar contato</h2>

        <Input
          name="name"
          placeholder="Nome"
          value={data.name}
          onChange={handleChange}
        />

        <Input
          name="email"
          placeholder="E-mail"
          value={data.email}
          onChange={handleChange}
        />

        <Input
          name="whatsapp"
          type="number"
          placeholder="Whatsapp (apenas números)"
          value={data.whatsapp}
          onChange={handleChange}
        />

        <Input
          name="avatar"
          placeholder="Avatar"
          value={data.avatar}
          onChange={handleChange}
        />

        <Button disabled={loading} isLoading={loading} type="submit">
          {loading ? "Adicionando ..." : "Adicionar"}
        </Button>
      </Form>
    </Card>
  );
};

export default ContactsForm;
