import "../styles/KeyFeatures.css";

import {
  FaHotTub,
  FaBed,
  FaRulerCombined,
  FaWifi,
  FaUtensils,
  FaWalking,
  FaFire,
  FaHotdog,
  FaSun,
  FaChild,
  FaTree,
} from "react-icons/fa";

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
  { name: "Przestronny taras", icon: <FaSun /> },
  { name: "Trampolina", icon: <FaChild /> },
  { name: "Hamaki", icon: <FaTree /> },
  { name: "Kominek", icon: <FaFire /> },
];

const KeyFeatures = () => {
  return (
    <section className="key-features-section" id="offer">
      <h2>Co oferujemy?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <span className="feature-icon">{feature.icon}</span>{" "}
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
