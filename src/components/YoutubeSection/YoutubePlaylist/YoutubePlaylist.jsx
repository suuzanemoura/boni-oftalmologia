"use client";
import { useRequestData } from "@/src/hooks/useRequestData";
import YoutubeVideoCard from "../YoutubeVideoCard/YoutubeVideoCard";
import { useEffect, useState } from "react";
import AlertError from "../../AlertError/AlertError";
import LoadingCircle from "../../LoadingCircle/LoadingCircle";
import Carousel from "../../Carousel/Carousel";

export default function YoutubePlaylist({ id, url }) {
  const [playlistItemsInfo, setplaylistItemsInfo] = useState(null);

  const urlPlaylistItemsApi = `${url}&playlistId=${id}`;

  const [playlistItemsApiInfo, isLoading, loaded, error] =
    useRequestData(urlPlaylistItemsApi);

  useEffect(() => {
    if (loaded) {
      setplaylistItemsInfo(playlistItemsApiInfo);
    }
  }, [loaded, playlistItemsApiInfo]);

  return (
    <>
      {error ? (
        <AlertError title={"Atenção! Vídeos não foram foram carregados:"}>
          <ul className="mt-1.5 list-disc list-inside">
            <li>Por favor, verifique sua internet.</li>
            <li>Depois recarregue a página e tente novamente.</li>
          </ul>
        </AlertError>
      ) : isLoading ? (
        <LoadingCircle />
      ) : loaded ? (
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
      ) : (
        <AlertError title={"Vídeos não encontrados:"}>
          <ul className="mt-1.5 list-disc list-inside">
            <li>
              Não foram encontrados vídeos associados ao canal solicitado.
            </li>
            <li>Verifique sua conexão com a intenet.</li>
            <li>Recarregue a página e tente novamente.</li>
          </ul>
        </AlertError>
      )}
    </>
  );
}
