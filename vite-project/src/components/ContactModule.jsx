import { FaPhone, FaEnvelope } from "react-icons/fa";
import "../styles/ContactModule.css";

const ContactModule = () => {
  const phoneNumber = "miejsce_na_numer";
  const emailAddress = "miejsce_na_maila";

  return (
    <div className="contact-section">
      <h2>Informacje kontaktowe</h2>

      <div className="contact-item">
        <FaPhone className="contact-icon" />
        <p className="contact-text">{phoneNumber}</p>
      </div>

      <div className="contact-item">
        <FaEnvelope className="contact-icon" />
        <p className="contact-text">{emailAddress}</p>
      </div>
    </div>
  );
};

export default ContactModule;
