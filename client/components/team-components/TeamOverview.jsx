import React from 'react';
import TeamStats from './TeamStats.jsx';

const TeamOverview = ({ teams, selectedTeam }) => {
  // let defaultTeam = {};

  // teams.forEach((team) => {
  //   if (team.name === sortedTeams[0]) {
  //     defaultTeam = team;
  //   }
  // });

  return (
    <div>
      <div className="to-name">
        <h1>{selectedTeam.name}</h1>
      </div>
      <TeamStats teams={teams} defaultTeam={selectedTeam} />
    </div>
  )
};

export default TeamOverview;