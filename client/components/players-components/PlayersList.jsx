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
  console.log(`players in playersList is an array:  ${Array.isArray(players)}`)

  return (
    <div id="players-list">
      <input type="text" name="Search Player" placeholder="Search Player" />
      <div className="player-tbl">
        <div className="player-tbl-header">Name</div>
        <div className="player-tbl-header">Team</div>
        <div className="player-tbl-header">Total Points</div>
        <div className="player-tbl-header">PPG</div>
        <div className="player-tbl-header">FG%</div>
        <div className="player-tbl-header">FT%</div>
        {players.map((player) => (
          <PlayerName name={player.name} player={player} key={player.name} />
        ))}
        {/* {sortedPlayers.map((player) => (
          <PlayerName name={player.name} key={player.name} playerClickHandler={playerClickHandler} />
        ))} */}
      </div>
    </div>
  );
};

export default PlayersList;
