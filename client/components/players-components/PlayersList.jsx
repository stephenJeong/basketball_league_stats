import React from 'react';
import Player from './Player.jsx';

const PlayersList = ({ playerStats }) => {
  let sortedPlayers = playerStats.sort((a, b) => {
    if (a.name < b.name) {
      return -1; }
    if (a.name > b.name) {
      return 1; }
    return 0;
})

  return (
    <div id="players-list">
      <input type="text" name="Search Player" />
      <h3>PLAYER NAME</h3>
      {sortedPlayers.map((player) => (
        <Player name={player.name} key={player.name} />
      ))}
    </div>
  );
};

export default PlayersList;
