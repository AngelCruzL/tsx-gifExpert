import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';

import GridItem from './GridItem';
import Loader from './Loader';

function GifGrid({ category }: { category: string }) {
  const { isLoading, data: images } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__flash">{category}</h3>

      {isLoading && <Loader />}

      <div className="card-grid">
        {images.map(({ id, title, url }) => (
          <GridItem key={id} title={title} url={url} id={id} />
        ))}
      </div>
    </>
  );
}

export default GifGrid;
