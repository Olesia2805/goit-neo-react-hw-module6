import detailCss from './ContactDetail.module.css';

const ContactDetail = ({ Icon, text }) => {
  return (
    <>
      <p className={detailCss.text}>
        <Icon /> {text}
      </p>
    </>
  );
};

export default ContactDetail;
