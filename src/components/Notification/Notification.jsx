import './Notification.css';

const Notification = ({ message }) => {
  return (
    <>
      <h2 className="notification_message">{message}</h2>
    </>
  );
};

export default Notification;
