import "../styles/KeyFeatures.css";

import {
  FaHotTub, // Samochód dla miejsca parkingowego
  FaBed, // Łóżko dla sypialni
  FaRulerCombined, // Miarka dla metrażu
  FaWifi, // Wi-Fi
  FaUtensils, // Sztućce dla kuchni
  FaWalking, // Piesza wędrówka dla jeziora
  FaFire, // Ognisko / Kominek
  FaHotdog, // Grill
  FaSun, // Taras (słońce) lub FaChair (krzesło)
  FaChild, // Trampolina (dla dzieci, lub FaJumping)
  FaTree,
} from "react-icons/fa";

// Dane o cechach z komponentami ikon React
const features = [
  { name: "Wanna z hydromasażem", icon: <FaHotTub /> },
  {
    name: "3 sypialnie",
    icon: <FaBed />,
    details: "6 miejsc noclegowych - 2 łóżka podwójne, 2 łóżka pojedyncze",
  },
  { name: "70m²", icon: <FaRulerCombined /> },
  { name: "Bezpłatne Wi-Fi", icon: <FaWifi /> },
  { name: "Wyposażona kuchnia", icon: <FaUtensils /> },
  { name: "15 minut pieszo nad jezioro Łęsk", icon: <FaWalking /> },
  { name: "Miejsce na ognisko", icon: <FaFire /> },
  { name: "Grill", icon: <FaHotdog /> },
  { name: "Przestronny taras", icon: <FaSun /> }, // Lub <FaChair />
  { name: "Trampolina", icon: <FaChild /> }, // Lub <FaJumping /> jeśli znajdziesz odpowiednią ikonę
  { name: "Hamaki", icon: <FaTree /> }, // Lub <FaCampground />
  { name: "Kominek", icon: <FaFire /> },
];

const KeyFeatures = () => {
  return (
    <section className="key-features-section">
      <h2>Co oferujemy?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <span className="feature-icon">{feature.icon}</span>{" "}
            {/* Wstawiamy komponent ikony */}
            <p className="feature-name">{feature.name}</p>
            {feature.details && (
              <p className="feature-details">{feature.details}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
