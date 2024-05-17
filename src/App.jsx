// App.js
import React from 'react';
import FocusableInputField from './FocusableInputField';
import UncontrolledInputField from './Uncontrolled';
import InteractiveDOMElement from './InteractiveDOMElement';

function App() {
  return (
    <div>
      <h1>Creating a Focusable Input Field</h1>
      <FocusableInputField />

      <h1>Managing Uncontrolled Components</h1>
      <UncontrolledInputField />

      <h1>Interacting with DOM Elements</h1>
      <InteractiveDOMElement />
    </div>
  );
}

export default App;
