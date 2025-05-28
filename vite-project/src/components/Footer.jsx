import { FaFacebookF, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "numer_telefonu";
  const emailAddress = "adres_email";

  return (
    <footer className="footer-container" id="contact">
      <div className="footer-content">
        <div className="footer-section footer-about">
          <h3>Domek z bala Mazury</h3>
          <p>
            Spędź niezapomniane chwile w sercu Mazur. Nasz domek to idealne
            miejsce na relaks i ucieczkę od zgiełku miasta.
          </p>
          <p>Orzyny, Polska</p>
        </div>

        <div className="footer-section footer-contact">
          <h3>Kontakt</h3>
          <p>
            <FaPhone className="footer-icon" /> {phoneNumber}
          </p>
          <p>
            <FaEnvelope className="footer-icon" /> {emailAddress}
          </p>
        </div>

        <div className="footer-section footer-links">
          <h3>Ważne linki</h3>
          <ul>
            <li>
              <a href="/">Polityka Prywatności</a>
            </li>
            <li>
              <a href="/">Regulamin</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Galeria</a>
            </li>
          </ul>
        </div>

        <div className="footer-section footer-social">
          <h3>Śledź nas</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            {/* Dodaj więcej ikon, np. FaYoutube, FaTwitter */}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Domek z bala Mazury. Licencja Open Source.</p>
        {/* Jeśli masz licencję open-source, użyj tego zamiast "Wszelkie prawa zastrzeżone": */}
        {/* <p>&copy; {currentYear} Domek z bala Mazury. Kod źródłowy udostępniony na licencji MIT.</p>
        <p><a href="https://github.com/stimm147/react-card-website/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">Dowiedz się więcej o licencji</a>.</p> */}
      </div>
    </footer>
  );
};

export default Footer;
