import React, { useState } from 'react';

import AddCategory from './components/AddCategory';

function GifExpertApp() {
  const [categories, setCategories] = useState([
    'One Punch',
    'Samurai X',
    'Dragon Ball',
  ]);

  const handleAdd = () => {
    setCategories([...categories, 'HunterXHunter']);
  };

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory />
      <hr />

      <ol>
        {categories.map(category => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </div>
  );
}

export default GifExpertApp;
