// src/components/OpenStreetMapModule.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Podstawowe style Leaflet
import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css"; // Style wtyczki
import L from "leaflet";
import "../styles/OpenStreetMapModule.css";

// Naprawa ikony markera (jak wcześniej)
delete L.Icon.Default.prototype._getIconUrl;

const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// WSPÓŁRZĘDNE MAPY (przykład dla Szczytna)
const position = [53.66532455194524, 21.07757765087876];

// Rejestracja wtyczki Leaflet.GestureHandling
// To musi być zrobione poza komponentem React, przed renderowaniem mapy.
L.Map.addInitHook("addHandler", "gestureHandling", L.GestureHandling);

const OpenStreetMapModule = () => {
  return (
    <div className="map-container">
      <h1 id="title-header">Lokalizacja</h1>
      <MapContainer
        center={position}
        zoom={14}
        // UWAGA: scrollWheelZoom ustawiamy na false, bo wtyczka go przejmuje
        scrollWheelZoom={false}
        // Aktywujemy wtyczkę GestureHandling
        gestureHandling={true} // Dodaj tę prop do MapContainer
        style={{
          height: "500px",
          width: "100%",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={defaultIcon}>
          <Popup>Tutaj znajduje się nasz obiekt!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default OpenStreetMapModule;
