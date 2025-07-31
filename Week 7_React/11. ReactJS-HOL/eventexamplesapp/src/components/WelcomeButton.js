import React from 'react';

const WelcomeButton = () => {
  const handleWelcome = (message) => {
    alert(message);
  };

  return (
    <div>
      <button onClick={() => handleWelcome("Welcome!")}>Say Welcome</button>
    </div>
  );
};

export default WelcomeButton;
