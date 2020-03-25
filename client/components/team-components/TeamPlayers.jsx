import React from 'react';

const TeamPlayers = ({ player }) => {
  return (
    <div>
      <img src={player.picture} alt={player.name} width="150" /><br /><br />
      {player.name}<br />
      <img src={player.teamLogo} alt={player.name} width="60" />
    </div>
  )
};

export default TeamPlayers;