"use client";

import { useRequestData } from "@/src/hooks/useRequestData";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import YoutubePlaylist from "./YoutubePlaylist/YoutubePlaylist";
import AlertError from "../AlertError/AlertError";
import LoadingCircle from "../LoadingCircle/LoadingCircle";
import { FontContext } from "@/src/contexts/FontContext";
import Script from "next/script";

export default function YoutubeSection({ apiConfig }) {
  const [channelInfo, setChannelInfo] = useState(null);
  const { textSize } = useContext(FontContext);

  const [channelApiInfo, isLoading, loaded, error] = useRequestData(
    apiConfig.url_channel_api,
  );

  useEffect(() => {
    if (loaded) {
      setChannelInfo(channelApiInfo);
    }
  }, [channelApiInfo, loaded]);

  return (
    <section className="px-8 xs:px-16 md:px-32 xl:px-40 2xl:px-60 3xl:px-96 4xl:px-[22rem] py-32 bg-slate-300/85">
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
          <h3 className="text-xl text-sky-700 font-medium self-start uppercase flex items-center gap-2">
            <span className="w-24 h-0.5 bg-sky-700 inline-block"></span> Youtube
          </h3>
          <h2 className="text-2xl xs:text-4xl text-boni-blue-100 font-bold self-start uppercase -mt-6">
            Confira dicas para <span className="text-sky-600">preservar</span>{" "}
            sua visão!
          </h2>

          <div className="flex flex-col items-center gap-4 md:gap-0 md:items-start md:flex-row  bg-white/65 p-4 xs:p-8 w-full rounded-2xl justify-between">
            <div className="flex gap-4">
              <Link
                key={channelInfo?.items[0].id}
                href={`/channel/${channelInfo?.items[0].id}`}
              >
                <Image
                  alt={channelInfo?.items[0].snippet.title}
                  src={channelInfo?.items[0].snippet.thumbnails.medium?.url}
                  height={
                    channelInfo?.items[0].snippet.thumbnails.medium?.height
                  }
                  width={channelInfo?.items[0].snippet.thumbnails.medium?.width}
                  className="rounded-full w-24"
                />
              </Link>
              <div
                className={`${textSize} text-boni-blue-300 flex flex-col justify-center`}
              >
                <h3 className="text-2xl 2xs:text-3xl xs:text-4xl font-bold">
                  {channelInfo?.items[0].snippet.title}
                </h3>
                <p className="-mt-2">
                  {channelInfo?.items[0].snippet.customUrl}
                </p>
                <p className="font-medium mt-2">
                  {channelInfo?.items[0].statistics.subscriberCount} inscritos •{" "}
                  {channelInfo?.items[0].statistics.videoCount} vídeos •{" "}
                  {channelInfo?.items[0].statistics.viewCount} visualizações
                </p>
              </div>
            </div>
            <Script src="https://apis.google.com/js/platform.js"></Script>
            <div
              className="g-ytsubscribe !flex justify-end"
              data-channelid="UCYtyCitxL856Pzu4GcnNXjQ"
              data-layout="default"
              data-count="default"
            ></div>
          </div>
          <div className="relative overflow-hidden max-w-[240px] 2xs:max-w-[320px] xs:max-w-[367px] md:max-w-[740px] xl:max-w-[1110px] 4xl:max-w-[1865px]">
            <YoutubePlaylist
              id={
                channelApiInfo?.items[0].contentDetails.relatedPlaylists.uploads
              }
              url={apiConfig.url_playlistItems_api}
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
