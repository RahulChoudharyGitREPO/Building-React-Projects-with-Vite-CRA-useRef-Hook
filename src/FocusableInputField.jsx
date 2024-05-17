// FocusableInputField.js
import React, { useRef, useEffect } from 'react';

const FocusableInputField = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return <input ref={inputRef} />;
};

export default FocusableInputField;
