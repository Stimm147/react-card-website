import React, { useState } from "react";
import "../styles/ImageGallery.css";

const images = [
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
  const [scrollPosition, setScrollPosition] = useState(0);

  const openModal = (imageSrc, imageAlt) => {
    setScrollPosition(window.pageYOffset);

    setSelectedImage({ src: imageSrc, alt: imageAlt });

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${window.pageYOffset}px`;
    document.body.style.width = "100%";
  };

  const closeModal = () => {
    document.body.style.overflow = "unset";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";

    window.scrollTo(0, scrollPosition);

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
