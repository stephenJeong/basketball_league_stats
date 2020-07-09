import React from 'react';

const TeamPlayers = ({ player }) => {
  return (
    <div>
      <img className="player-photo" src={player.photo} alt={player.name} width="150" /><br /><br />
      {player.name}
    </div>
  )
};

export default TeamPlayers;
