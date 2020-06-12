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
      <input type="text" name="Search Player" placeholder="Search Player" />
      <div className="player-tbl">
        <div className="tbl-header">Name</div>
        <div className="tbl-header">Team</div>
        <div className="tbl-header">Total Points</div>
        <div className="tbl-header">PPG</div>
        <div className="tbl-header">FG%</div>
        <div className="tbl-header">FT%</div>
        {sortedPlayers.map((player) => (
          <PlayerName name={player.name} player={player} key={player.name} />
        ))}
      </div>
    </div>
  );
};

export default PlayersList;
