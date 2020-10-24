import './Contacts.css';

function Contacts() {
  return (
    <div className="contacts">
      <div className="contact">
        <div className="contact-avatar">
          <img src="https://ui-avatars.com/api/?name=David+Costa" alt="david-costa-avatar" />
        </div>
        <div className="contact-description">
          <div className="contact-name">David Costa</div>
          <div className="contact-message">Bom dia</div>
        </div>
        <div className="contact-right">
          <div className="contact-message-time">08:30</div>
          <div className="contact-message-badge">+99</div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
