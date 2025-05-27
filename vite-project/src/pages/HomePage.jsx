import "../styles/HomePage.css";
import KeyFeatures from "../components/KeyFeatures";
import OpenStreetMapModule from "../components/OpenStreetMapModule";
import BookingModule from "../components/BookingModule";
import ImageGallery from "../components/ImageGallery";

const HomePage = () => {
  const bookingData = {
    bookingLink: "https://www.booking.com/hotel/pl/domek-z-bala-mazury.pl.html",
    imageUrl: "./media/463132595.jpg",
    title: "Domek z bala Mazury",
    description:
      "Odkryj urok Mazur w naszym komfortowym domu. Idealne miejsce na wypoczynek dla całej rodziny.",
    priceInfo: "Sprawdź cenę dla wybranego terminu",
  };

  return (
    <div id="main-window">
      <KeyFeatures />
      <OpenStreetMapModule />
      <BookingModule {...bookingData} />
      <ImageGallery />
    </div>
  );
};

export default HomePage;
