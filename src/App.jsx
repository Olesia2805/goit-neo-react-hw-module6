import Section from './components/Section/Section';
import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import Notification from './components/Notification/Notification';
import contactDB from './contactsDB.json';
import { useEffect, useState } from 'react';
import appCss from './App.module.css';
import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    return items || contactDB;
  });
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactID => {
    setContacts(prevContact => {
      return prevContact.filter(contact => contact.id !== contactID);
    });
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSave = newContact => {
    const contactId = { id: nanoid(), ...newContact };
    setContacts(prevContact => {
      return [...prevContact, contactId];
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
        <SearchBox value={search} onSearch={setSearch} />
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
