import React, { useState, useRef } from 'react';

function AddCategory() {
  const [inputValue, setInputValue] = useState('');

  const inputValueRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(12);
  };

  const HandleInputChange = () => {
    setInputValue(inputValueRef.current!.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>{inputValue}</h1>
      <input
        type="text"
        value={inputValue}
        ref={inputValueRef}
        onChange={HandleInputChange}
      />
    </form>
  );
}

export default AddCategory;
