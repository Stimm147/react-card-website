const VideoPlayer = ({ videoSource }) => {
  return (
    <video autoPlay loop muted playsInline className="background-video" id="up">
      <source src={videoSource} type="video/webm" />
      Twój przeglądarka nie obsługuje tagu wideo.
    </video>
  );
};

export default VideoPlayer;
