import React from 'react';
import { CustomGif } from '../interfaces/CustomGif';

function GridItem({ title, url }: CustomGif) {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default GridItem;
