import React from "react";
import ContactsForm from "./ContactsForm";
import ContactsList from "./ContactsList";
import { Grid } from "./styles";

const Contacts: React.FC = () => {
  return (
    <Grid>
      <ContactsList />
      <ContactsForm />
    </Grid>
  );
};

export default Contacts;
