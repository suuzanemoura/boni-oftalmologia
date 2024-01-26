import { useRequestData } from "@/src/hooks/useRequestData";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import YoutubePlaylist from "./YoutubePlaylist/YoutubePlaylist";
import AlertError from "../AlertError/AlertError";
import LoadingCircle from "../LoadingCircle/LoadingCircle";

export default function YoutubeSection() {
  const [channelInfo, setChannelInfo] = useState(null);

  const channelApi = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_API;
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const pathChannelApi = `${channelApi}&id=UCYtyCitxL856Pzu4GcnNXjQ&key=${apiKey}`;

  const [channelApiInfo, isLoading, loaded, error] =
    useRequestData(pathChannelApi);

  useEffect(() => {
    if (loaded) {
      setChannelInfo(channelApiInfo);
    }
  }, [channelApiInfo, loaded]);

  return (
    <section className="px-60 py-32 bg-slate-300/85">
      {error ? (
        <AlertError
          title={
            "Atenção! Informações do canal do Dr. Pedro Boni não foram foram carregados:"
          }
        >
          <ul className="mt-1.5 list-disc list-inside">
            <li>Por favor, verifique sua internet.</li>
            <li>Depois recarregue a página e tente novamente.</li>
          </ul>
        </AlertError>
      ) : isLoading ? (
        <LoadingCircle />
      ) : loaded && channelInfo?.items[0].statistics.videoCount == 0 ? (
        <AlertError title={"Vídeos não encontrados:"}>
          <ul className="mt-1.5 list-disc list-inside">
            <li>
              Não foram encontrados vídeos associados ao canal solicitado.
            </li>
            <li>Verifique sua conexão com a intenet.</li>
            <li>Recarregue a página e tente novamente.</li>
          </ul>
        </AlertError>
      ) : loaded && Number(channelInfo?.items[0].statistics.videoCount) > 0 ? (
        <div className="flex flex-col gap-8 justify-center items-center">
          <div className="flex gap-4">
            <Link
              key={channelInfo?.items[0].id}
              href={`/channel/${channelInfo?.items[0].id}`}
            >
              <Image
                alt={channelInfo?.items[0].snippet.title}
                src={channelInfo?.items[0].snippet.thumbnails.medium?.url}
                height={channelInfo?.items[0].snippet.thumbnails.medium?.height}
                width={channelInfo?.items[0].snippet.thumbnails.medium?.width}
                className="rounded-full w-24"
              />
            </Link>
            <div className="text-sm font-medium mt-2 text-boni-blue-300">
              <h2 className="text-4xl font-bold">
                {channelInfo?.items[0].snippet.title}
              </h2>
              <p>{channelInfo?.items[0].snippet.customUrl}</p>
              <p>
                {channelInfo?.items[0].statistics.subscriberCount} inscritos •{" "}
                {channelInfo?.items[0].statistics.videoCount} vídeos •{" "}
                {channelInfo?.items[0].statistics.viewCount} visualizações
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden max-w-[240px] 2xs:max-w-[320px] xs:max-w-[367px] md:max-w-[740px] xl:max-w-[1110px]">
            <YoutubePlaylist
              id={
                channelApiInfo?.items[0].contentDetails.relatedPlaylists.uploads
              }
              apiKey={apiKey}
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
