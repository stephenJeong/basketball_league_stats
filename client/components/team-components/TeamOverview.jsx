import React from 'react';
import TeamStats from './TeamStats.jsx';

const TeamOverview = ({ teams }) => {

  return (
    <div>
      <div className="to-name">
        <h1>Los Angeles Lakers</h1>
      </div>
      <TeamStats teams={teams} />
    </div>
  )
};

export default TeamOverview;