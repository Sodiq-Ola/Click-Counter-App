import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const maxLimit = 10;

  const increment = () => {
    if (count < maxLimit) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container">
      <h1>Click Counter App</h1>
      <h2>Count: {count}</h2>
      {count === maxLimit && <p className="limit-msg">You've reached the limit!</p>}
      <div className="buttons">
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
      </div>
    </div>
  );
}

export default App;