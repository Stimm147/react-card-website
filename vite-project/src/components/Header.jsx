import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="app-header">
      <h1>Domek z bala Mazury</h1>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/react-card-website/">Strona Główna</Link>
          </li>
          <li>
            <Link to="/about">O nas</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
