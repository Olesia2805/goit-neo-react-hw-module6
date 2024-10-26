import itemCss from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsPersonFill } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import Button from '../Button/Button';
import ContactDetail from '../ContactDetail/ContactDetail';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <>
      <div className={itemCss.info}>
        <ContactDetail Icon={BsPersonFill} text={contact.name} />
        <ContactDetail Icon={FaPhoneAlt} text={contact.number} />
      </div>
      <Button onClick={handleDelete}>
        <MdOutlineDelete size="20" />
        Delete
      </Button>
    </>
  );
};

export default Contact;
