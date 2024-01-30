export const apiConfig = {
  api_key: process.env.YOUTUBE_API_KEY,
  channel_id: process.env.YOUTUBE_CHANNEL_ID,
  url_channel_api: `${process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_API}&id=${process.env.YOUTUBE_CHANNEL_ID}&key=${process.env.YOUTUBE_API_KEY}`,
  url_playlistItems_api: `${process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=10&key=${process.env.YOUTUBE_API_KEY}`,
};
