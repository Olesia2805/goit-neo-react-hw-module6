import Section from './components/Section/Section';
import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import Notification from './components/Notification/Notification';
import contactDB from './contactsDB.json';
import { useState } from 'react';
import appCss from './App.module.css';
import { useSelector, useDispatch } from 'react-redux';
// import { addContact, deleteContact } from '../src/redux/contactsSlice';
import { selectNameFilter } from './redux/filtersSlice';
import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useState(contactDB);

  // const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const handleSave = newContact => {
    const contactId = { id: nanoid(), ...newContact };
    setContacts(prevContact => {
      return [...prevContact, contactId];
    });
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = contactID => {
    setContacts(prevContact => {
      return prevContact.filter(contact => contact.id !== contactID);
    });
  };

  return (
    <Container>
      <Section>
        <h1 className={appCss.header}>Phonebook</h1>
      </Section>
      <Section className="form">
        <ContactForm save={handleSave} />
      </Section>
      <Section className="searchInput">
        <SearchBox />
      </Section>
      <Section>
        {visibleContacts.length > 0 ? (
          <ContactList contactData={visibleContacts} onDelete={deleteContact} />
        ) : (
          <Notification />
        )}
      </Section>
    </Container>
  );
};

export default App;
