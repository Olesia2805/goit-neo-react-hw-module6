import listCss from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ contactData, onDelete }) => {
  return (
    <ul className={listCss.listCards}>
      {contactData.map(contact => (
        <li className={listCss.listItem} key={contact.id}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
