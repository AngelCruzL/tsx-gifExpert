import { APIResponse, GifInterface } from '../interfaces/ApiResponse';
import { CustomGif } from '../interfaces/CustomGif';

export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=bcK9mKzbWV28yu4f9MD8uTnkdK9eYTRo&q=${encodeURI(
    category
  )}&limit=10`;
  const resp = await fetch(url);
  const { data }: APIResponse = await resp.json();

  const gifs = data.map((gif: GifInterface): CustomGif => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized_medium.url,
    };
  });

  return gifs;
};
