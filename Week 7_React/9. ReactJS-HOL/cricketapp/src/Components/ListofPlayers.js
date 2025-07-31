import React from "react";

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 95 },
    { name: "Rohit", score: 88 },
    { name: "Dhoni", score: 67 },
    { name: "KL Rahul", score: 72 },
    { name: "Hardik", score: 60 },
    { name: "Pant", score: 50 },
    { name: "Shami", score: 78 },
    { name: "Jadeja", score: 80 },
    { name: "Bumrah", score: 66 },
    { name: "Ashwin", score: 85 },
    { name: "Surya", score: 45 },
  ];

  // Using arrow function to filter scores below 70
  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h3>Players with score below 70</h3>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
