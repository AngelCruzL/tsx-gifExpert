import React, { useState } from 'react';

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function GifExpertApp() {
  const [categories, setCategories] = useState(['One Punch']);

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      {categories.map(category => (
        <GifGrid category={category} key={category} />
      ))}
    </div>
  );
}

export default GifExpertApp;
