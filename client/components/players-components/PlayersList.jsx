import React from 'react';
import PlayerName from './PlayerName.jsx';

const PlayersList = ({ players, playerClickHandler }) => {
  let sortedPlayers = players.sort((a, b) => {
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
        <PlayerName name={player.name} key={player.name} playerClickHandler={playerClickHandler} />
      ))}
    </div>
  );
};

export default PlayersList;
