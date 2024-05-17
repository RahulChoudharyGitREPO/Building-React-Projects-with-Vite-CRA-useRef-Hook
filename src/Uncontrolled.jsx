// UncontrolledInputField.js
import React, { useRef } from 'react';

const UncontrolledInputField = () => {
  const inputRef = useRef(null);

  const handleChange = () => {
    console.log('Current value:', inputRef.current.value);
  };

  return <input ref={inputRef} onChange={handleChange} />;
};

export default UncontrolledInputField;
