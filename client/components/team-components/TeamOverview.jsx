import React from 'react';
import TeamStats from './TeamStats.jsx';

const TeamOverview = ({ teams, selectedTeam }) => {
  let defaultTeam = {};

  teams.forEach((team) => {
    if (team.name === selectedTeam) {
      defaultTeam = team;
    }
  });

  return (
    <div>
      <div className="to-name">
        <h1>{defaultTeam.name}</h1>
      </div>
      <TeamStats defaultTeam={defaultTeam} />
    </div>
  )
};

export default TeamOverview;