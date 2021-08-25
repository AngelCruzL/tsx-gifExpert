import React, { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { APIResponse, GifInterface } from '../interfaces/ApiResponse';
import { CustomGif } from '../interfaces/CustomGif';
import GridItem from './GridItem';

function GifGrid({ category }: { category: string }) {
  const [images, setImages] = useState<CustomGif[]>([]);

  useEffect(() => {
    getGifs(category).then(img => setImages(img));
  }, [category]);

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
