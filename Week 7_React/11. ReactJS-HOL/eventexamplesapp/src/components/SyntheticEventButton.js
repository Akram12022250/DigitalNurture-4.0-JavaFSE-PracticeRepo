import React from 'react';

const SyntheticEventButton = () => {
  const handleClick = (event) => {
    // React wraps native event with SyntheticEvent
    console.log("Event Type:", event.type); // click
    alert("I was clicked");
  };

  return (
    <div>
      <button onClick={handleClick}>Synthetic OnPress</button>
    </div>
  );
};

export default SyntheticEventButton;
