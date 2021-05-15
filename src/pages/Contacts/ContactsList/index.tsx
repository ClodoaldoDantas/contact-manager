import React, { useEffect, useState } from "react";
import Card from "../../../components/Card";
import formatWhatsapp from "../../../utils/formatWhatsapp";
import { firebaseStore } from "../../../services/firebase";
import { List, ListItem } from "./styles";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { useAuth } from "../../../hooks/auth";

interface Contact {
  id: string;
  avatar: string;
  email: string;
  name: string;
  whatsapp: string;
}

const ContactsList: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const userId = user?.uid ?? "";

    firebaseStore
      .collection("contacts")
      .where("user_id", "==", userId)
      .onSnapshot((querySnapshot) => {
        const data: Contact[] = [];

        querySnapshot.forEach((doc) => {
          console.log(data);

          data.push({
            id: doc.id,
            name: doc.data().name,
            email: doc.data().email,
            whatsapp: doc.data().whatsapp,
            avatar: doc.data().avatar,
          });
        });

        setContacts(data);
      });
  }, [user]);

  return (
    <Card>
      <List>
        {contacts.map((contact) => (
          <ListItem key={contact.id}>
            <div
              className="avatar"
              style={{ backgroundImage: `url(${contact.avatar})` }}
            />
            <div className="info">
              <h4>{contact.name}</h4>
              <div>
                <span>
                  <MdEmail size={20} color="var(--primary)" />
                  {contact.email}
                </span>
                <span>
                  <IoLogoWhatsapp size={20} color="var(--primary)" />
                  {formatWhatsapp(contact.whatsapp)}
                </span>
              </div>
            </div>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default ContactsList;
