import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const sayHello = () => {
    console.log("Hello! This is a static message.");
  };

  const handleIncrease = () => {
    increment();
    sayHello();
  };

  const handleDecrease = () => {
    setCount(prev => prev - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrease}>Increment</button>
      <button onClick={handleDecrease}>Decrement</button>
    </div>
  );
};

export default Counter;
