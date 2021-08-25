import React, { useEffect, useState } from 'react';
import { APIResponse, GifInterface } from '../interfaces/ApiResponse';
import { CustomGif } from '../interfaces/CustomGif';
import GridItem from './GridItem';

function GifGrid({ category }: { category: string }) {
  const [images, setImages] = useState<CustomGif[]>([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=bcK9mKzbWV28yu4f9MD8uTnkdK9eYTRo&q=rick+and+morty&limit=10`;
    const resp = await fetch(url);
    const { data }: APIResponse = await resp.json();

    const gifs = data.map((gif: GifInterface): CustomGif => {
      return {
        id: gif.id,
        title: gif.title,
        url: gif.images?.downsized_medium.url,
      };
    });

    setImages(gifs);
  };

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map(({ id, title, url }) => (
          <GridItem key={id} title={title} url={url} id={id} />
        ))}
      </div>
    </>
  );
}

export default GifGrid;
