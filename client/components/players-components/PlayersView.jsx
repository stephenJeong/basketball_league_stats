import React from 'react';
import PlayersList from './PlayersList.jsx';
import PlayerStats from './PlayerStats.jsx';

const PlayersView = ({ playerStats }) => {
  return (
    <div id="players-view">
      <div id="players-list">
        <PlayersList playerStats={playerStats} />
      </div>
      <div id="players-stats">
        <PlayerStats />
      </div>
    </div>
  );
};

export default PlayersView;
