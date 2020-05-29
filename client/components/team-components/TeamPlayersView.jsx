import React from 'react';
import TeamPlayers from './TeamPlayers.jsx';

const TeamPlayersView = ({ players, selectedTeam }) => {
  let teamPlayers = [];
  players.forEach((player) => {
    if (player.team === selectedTeam) {
      teamPlayers.push(player);
    }
  })

  return (
    <div id="teamPlayers" >
      {teamPlayers.map((player) => {
        return (
          <TeamPlayers player={player} key={player.name} />
        )
      })}
    </div>
  )
};

export default TeamPlayersView;
