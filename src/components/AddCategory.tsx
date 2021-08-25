import React, { useState, useRef, Dispatch, SetStateAction } from 'react';

function AddCategory({
  setCategories,
}: {
  setCategories: Dispatch<SetStateAction<string[]>>;
}) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCategories(category => [...category, inputValue]);
  };

  const handleInputChange = (e: React.FormEvent) => {
    setInputValue((e.target as HTMLInputElement).value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
}

export default AddCategory;
