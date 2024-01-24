import { useRequestData } from "@/src/hooks/useRequestData";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function YoutubeSection() {
  const [channelInfo, setChannelInfo] = useState(null);
  const [playlistItemsInfo, setplaylistItemsInfo] = useState(null);
  const { isLoading, requestData } = useRequestData();

  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const channelApi = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_API;
  const pathChannelApi = `${channelApi}&id=UCYtyCitxL856Pzu4GcnNXjQ&key=${apiKey}`;
  const playlistItemsApi = process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_ITEMS_API;
  const pathplaylistItemsApi = `${playlistItemsApi}?part=snippet&maxResults=10&playlistId=${channelInfo?.items[0].contentDetails.relatedPlaylists.uploads}&key=${apiKey}`;

  useEffect(() => {
    const fetchChannelInfo = async () => {
      const response = await requestData(pathChannelApi);
      setChannelInfo(response);
    };
    fetchChannelInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchplaylistItemsInfo = async () => {
    const response = await requestData(pathplaylistItemsApi);
    setplaylistItemsInfo(response);
    console.log(response);
  };

  if (isLoading) return <p>Loading...</p>;
  if (!channelInfo) return <p>No profile data</p>;

  console.log(channelInfo);

  return (
    <div>
      <div className="mx-auto max-w-6xl p-4 lg:p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <Link
            key={channelInfo.items[0].id}
            href={`/channel/${channelInfo.items[0].id}`}
          >
            <Image
              alt={channelInfo.items[0].snippet.title}
              src={channelInfo.items[0].snippet.thumbnails.medium?.url}
              height={channelInfo.items[0].snippet.thumbnails.medium?.height}
              width={channelInfo.items[0].snippet.thumbnails.medium?.width}
            />
            <div className="text-sm font-medium mt-2">
              <p>{channelInfo.items[0].snippet.title}</p>
              <p>{channelInfo.items[0].snippet.customUrl}</p>
              <p>{channelInfo.items[0].snippet.description}</p>
              <p>{channelInfo.items[0].statistics.subscriberCount}</p>
              <p>{channelInfo.items[0].statistics.videoCount}</p>
              <p>{channelInfo.items[0].statistics.viewCount}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
