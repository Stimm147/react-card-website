import React, { useState, useEffect } from "react";
import "../styles/ImageGallery.css";

const images = [
  {
    thumbnail: "./thumbnails/IMG_4440_thumb.jpg",
    full: "./media/IMG_4440.jpg",
    alt: "Opis obrazu 1",
  },
  {
    thumbnail: "./thumbnails/IMG_4441_thumb.jpg",
    full: "./media/IMG_4441.jpg",
    alt: "Opis obrazu 2",
  },
  {
    thumbnail: "./thumbnails/IMG_4442_thumb.jpg",
    full: "./media/IMG_4442.jpg",
    alt: "Opis obrazu 3",
  },
  {
    thumbnail: "./thumbnails/IMG_4443_thumb.jpg",
    full: "./media/IMG_4443.jpg",
    alt: "Opis obrazu 4",
  },
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (selectedImage) {
      const currentScrollY = window.pageYOffset;
      setScrollPosition(currentScrollY);

      document.body.style.top = `-${currentScrollY}px`;
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
      document.body.style.top = "";
      window.scrollTo(0, scrollPosition);
    }

    return () => {
      if (!selectedImage) {
        document.body.classList.remove("modal-open");
        document.body.style.top = "";
      }
    };
  }, [selectedImage, scrollPosition]);

  const openModal = (imageFullSrc, imageAlt) => {
    setSelectedImage({ src: imageFullSrc, alt: imageAlt });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="image-gallery-section" id="gallery">
      <h2>Nasza Galeria</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openModal(image.full, image.alt)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                openModal(image.full, image.alt);
              }
            }}
          >
            <img
              src={image.thumbnail}
              alt={image.alt}
              className="gallery-image"
              loading="lazy"
            />
          </div>
        ))}
      </div>

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
