// src/components/BookingModule.jsx
import React from "react";
import "../styles/BookingModule.css"; // Plik CSS dla tego modułu
import { FaExternalLinkAlt, FaCalendarCheck } from "react-icons/fa"; // Ikony dla linku zewnętrznego i rezerwacji

const BookingModule = ({
  bookingLink,
  imageUrl,
  title,
  description,
  priceInfo,
}) => {
  return (
    <section className="booking-module-section">
      <h2>Zarezerwuj na Booking.com!</h2>

      {/* Usunięto <a> z tego poziomu. Teraz .booking-card nie jest linkiem. */}
      <div className="booking-card">
        {imageUrl && (
          <div className="booking-image-container">
            <img src={imageUrl} alt={title} className="booking-image" />
          </div>
        )}
        <div className="booking-content">
          {title && <h3 className="booking-title">{title}</h3>}
          {description && <p className="booking-description">{description}</p>}
          {priceInfo && <p className="booking-price">{priceInfo}</p>}

          {/* TERAZ TYLKO PRZYCISK JEST LINKIEM */}
          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="booking-button-link" /* Nowa klasa dla stylu linku-przycisku */
            aria-label={`Zarezerwuj teraz ${title} - otwiera w nowej karcie`}
          >
            <button className="booking-button">
              {" "}
              <FaCalendarCheck className="button-icon" /> Zarezerwuj teraz{" "}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookingModule;
