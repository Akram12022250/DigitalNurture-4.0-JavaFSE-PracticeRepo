import React from "react";

const IndianPlayers = () => {
  const oddPlayers = ["Virat", "KL Rahul", "Pant", "Shami", "Bumrah"];
  const evenPlayers = ["Rohit", "Hardik", "Jadeja", "Ashwin", "Surya"];

  // Destructuring example
  const [p1, p2, p3, ...rest] = oddPlayers;

  // Merging arrays using ES6 spread
  const T20players = ["Kohli", "Rohit", "SKY"];
  const RanjiPlayers = ["Prithvi", "Sarfaraz", "Pujara"];
  const allPlayers = [...T20players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Team Players (Destructured)</h2>
      <ul>
        <li>{p1}</li>
        <li>{p2}</li>
        <li>{p3}</li>
        <li>{rest.join(", ")}</li>
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merged T20 and Ranji Trophy Players</h2>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
