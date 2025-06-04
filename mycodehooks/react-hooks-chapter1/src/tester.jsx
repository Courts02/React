import React, { useState } from 'react';
import './counter.css'; 

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter-container">
      <h1 className="title">My Cute Counter App </h1>
      <p className="count-text">You clicked <span className="count-number">{count}</span> times</p>
      <button className="cute-button" onClick={handleClick}>Click me 💕</button>
    </div>
  );
}

export default Counter;
