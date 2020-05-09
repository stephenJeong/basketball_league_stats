import React from 'react';
import TeamStats from './TeamStats.jsx';

const TeamOverview = ({ teams, sortedTeams }) => {
  let defaultTeam = {};

  teams.forEach((team) => {
    if (team.name === sortedTeams[0]) {
      console.log(team);
      defaultTeam = team;
    }
  });

  return (
    <div>
      <div className="to-name">
        <h1>{sortedTeams[0]}</h1>
      </div>
      <TeamStats teams={teams} defaultTeam={defaultTeam} />
    </div>
  )
};

export default TeamOverview;