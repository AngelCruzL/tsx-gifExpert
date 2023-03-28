import React from 'react';
import { CustomGif } from '../interfaces/CustomGif';

function GifItem({ title, url }: CustomGif) {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default GifItem;
