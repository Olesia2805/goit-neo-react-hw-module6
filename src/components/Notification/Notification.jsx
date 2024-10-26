import notifyCss from './Notification.module.css';

const Notification = () => {
  return (
    <>
      <p className={notifyCss.text}>
        Unfortunately, this person is not in your contact list 😢.
      </p>
      <p className={notifyCss.text}>
        BUT in the form above ⬆️ you can always add him/her to your contact list
        📃 if you know his/her phone number 📱.
      </p>
    </>
  );
};

export default Notification;
