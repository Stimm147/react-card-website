// src/components/ImageGallery.jsx
import React, { useState } from "react";
import "../styles/ImageGallery.css"; // Plik CSS dla galerii

const images = [
  // Zastąp te linki rzeczywistymi ścieżkami do Twoich zdjęć
  // Możesz użyć 'import' dla lokalnych zdjęć lub linków do hostowanych obrazów
  // Dodałem opisy alt dla dostępności
  {
    src: "./media/IMG_4440.jpg",
    alt: "placeholder",
  },
  {
    src: "./media/IMG_4441.jpg",
    alt: "placeholder",
  },
  {
    src: "./media/IMG_4442.jpg",
    alt: "placeholder",
  },
  {
    src: "./media/IMG_4443.jpg",
    alt: "placeholder",
  },
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0); // NOWY STAN: do przechowywania pozycji scrolla

  const openModal = (imageSrc, imageAlt) => {
    // 1. Zapisz aktualną pozycję scrolla przed zablokowaniem
    setScrollPosition(window.pageYOffset);

    // 2. Otwórz modal
    setSelectedImage({ src: imageSrc, alt: imageAlt });

    // 3. Zablokuj scrollowanie tła i ustaw pozycjonowanie na fixed, aby zapobiec skokom
    document.body.style.overflow = "hidden";
    // Opcjonalnie: ustawienie top/left/right/bottom na body, aby zapobiec drganiom na niektórych przeglądarkach
    document.body.style.position = "fixed";
    document.body.style.top = `-${window.pageYOffset}px`; // Ustawiamy top na ujemną wartość scrolla
    document.body.style.width = "100%"; // Upewnij się, że szerokość jest zachowana
  };

  const closeModal = () => {
    // 1. Usuń style blokujące scrollowanie
    document.body.style.overflow = "unset"; // lub 'auto'
    document.body.style.position = ""; // Usuń fixed
    document.body.style.top = ""; // Usuń ustawienie top
    document.body.style.width = ""; // Usuń ustawienie width

    // 2. Przywróć pozycję scrolla
    window.scrollTo(0, scrollPosition);

    // 3. Zamknij modal
    setSelectedImage(null);
  };

  return (
    <section className="image-gallery-section">
      <h2>Nasza Galeria</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openModal(image.src, image.alt)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                openModal(image.src, image.alt);
              }
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="gallery-image"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="modal-image"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGallery;
