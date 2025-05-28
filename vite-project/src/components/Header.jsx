import "../styles/Header.css";

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="app-header">
      <h1>Domek z bala Mazury</h1>
      <nav>
        <ul className="nav-list">
          <li>
            <a
              href="#up"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("up");
              }}
            >
              Strona Główna
            </a>
          </li>
          <li>
            <a
              href="#offer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("offer");
              }}
            >
              Oferta
            </a>
          </li>
          <li>
            <a
              href="#reservation"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("reservation");
              }}
            >
              Rezerwacja
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("gallery");
              }}
            >
              Galeria
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
