import React from 'react';
import TeamStats from './TeamStats.jsx';

const TeamOverview = ({ teams, sortedTeams }) => {

  return (
    <div>
      <div className="to-name">
        <h1>{sortedTeams[0]}</h1>
      </div>
      <TeamStats teams={teams} />
    </div>
  )
};

export default TeamOverview;