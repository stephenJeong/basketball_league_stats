import React from 'react';
import TeamName from './TeamName.jsx';

const TeamList = ({ sortedTeams }) => (
  <div className="teamList">
    {sortedTeams.map(team => {
      return (
        <TeamName name={team} key={team} />
      )
    })}
  </div>
);

export default TeamList;
