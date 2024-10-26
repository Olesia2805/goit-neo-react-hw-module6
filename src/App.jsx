import Section from './components/Section/Section';
import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import Notification from './components/Notification/Notification';
import appCss from './App.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  addContact,
  deleteContact,
  selectContacts,
} from '../src/redux/contactsSlice';
import { nanoid } from 'nanoid';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSave = newContact => {
    const contactId = { id: nanoid(), ...newContact };
    dispatch(addContact(contactId));
  };

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
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
        {contacts.length > 0 ? (
          <ContactList onDelete={handleDelete} />
        ) : (
          <Notification />
        )}
      </Section>
    </Container>
  );
};

export default App;
