// InteractiveDOMElement.js
import React, { useRef } from 'react';

const InteractiveDOMElement = () => {
    const elementRef = useRef(null);

    const handleClick = () => {
        elementRef.current.style.backgroundColor = 'yellow';
    };

    return (
        <div ref={elementRef} onClick={handleClick} style={{ width: '100px', height: '100px', backgroundColor: 'lightblue' }}>
            Click Me
        </div>
    );
};

export default InteractiveDOMElement;
