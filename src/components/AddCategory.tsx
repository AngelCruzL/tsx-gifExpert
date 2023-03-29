import React, { Dispatch, SetStateAction, useState } from 'react';

interface CustomProps {
  setCategories: Dispatch<SetStateAction<string[]>>;
}

function AddCategory({ setCategories }: CustomProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim().length > 3) {
      setCategories(category => [inputValue, ...category]);
      setInputValue('');
    }
  };

  const handleInputChange = (e: React.FormEvent) => {
    setInputValue((e.target as HTMLInputElement).value);
  };

  return (
    <form onSubmit={handleSubmit} aria-label="form">
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
}

export default AddCategory;
