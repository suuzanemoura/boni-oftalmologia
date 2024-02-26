export default function YoutubeVideoCard({ videoId }) {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="w-[240px] 2xs:w-[320px] xs:w-[366.63px] h-auto 2xs:h-[206px]"
    ></iframe>
  );
}
