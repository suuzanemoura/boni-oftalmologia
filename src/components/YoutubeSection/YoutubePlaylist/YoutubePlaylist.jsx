import { useRequestData } from "@/src/hooks/useRequestData";
import YoutubeVideoCard from "../YoutubeVideoCard/YoutubeVideoCard";
import { useEffect, useState } from "react";
import AlertError from "../../AlertError/AlertError";
import LoadingCircle from "../../LoadingCircle/LoadingCircle";
import Carousel from "../../Carousel/Carousel";

export default function YoutubePlaylist({ id, apiKey }) {
  const playlistItemsApi = process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_ITEMS_API;
  const [playlistItemsInfo, setplaylistItemsInfo] = useState(null);

  const pathPlaylistItemsApi = `${playlistItemsApi}?part=snippet&maxResults=10&playlistId=${id}&key=${apiKey}`;

  const [playlistItemsApiInfo, isLoading, loaded, error] =
    useRequestData(pathPlaylistItemsApi);

  useEffect(() => {
    if (loaded) {
      setplaylistItemsInfo(playlistItemsApiInfo);
    }
  }, [loaded, playlistItemsApiInfo]);

  if (isLoading) {
    return <LoadingCircle />;
  }
  if (error) {
    return (
      <AlertError title={"Atenção! Vídeos não foram foram carregados:"}>
        <ul className="mt-1.5 list-disc list-inside">
          <li>Por favor, verifique sua internet.</li>
          <li>Depois recarregue a página e tente novamente.</li>
        </ul>
      </AlertError>
    );
  }

  if (!playlistItemsInfo?.items) return <p>No videos data</p>;

  return (
    <Carousel
      width={
        window.screen.width < 360
          ? 240
          : window.screen.width === 360 && window.screen.width < 480
          ? 320
          : 366.63
      }
    >
      {playlistItemsInfo?.items?.map((video) => {
        return (
          <YoutubeVideoCard
            key={video.id}
            videoId={video.snippet.resourceId.videoId}
          />
        );
      })}
    </Carousel>
  );
}
