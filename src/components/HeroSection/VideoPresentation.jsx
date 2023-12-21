export default function VideoPresentation({ url }) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-lg shadow-lg"
      style={{ paddingTop: "56.25%" }}
    >
      <iframe
        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full"
        src={url}
        title="Dr. Pedro Boni | Oftalmologista"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
