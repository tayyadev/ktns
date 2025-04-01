import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}

export default App;