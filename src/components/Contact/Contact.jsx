import itemCss from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsPersonFill } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import Button from '../Button/Button';
import ContactDetail from '../ContactDetail/ContactDetail';

const Contact = ({ contact, onDelete }) => {
  return (
    <>
      <div className={itemCss.info}>
        <ContactDetail Icon={BsPersonFill} text={contact.name} />
        <ContactDetail Icon={FaPhoneAlt} text={contact.number} />
      </div>
      <Button onClick={() => onDelete(contact.id)}>
        <MdOutlineDelete size="20" />
        Delete
      </Button>
    </>
  );
};

export default Contact;
