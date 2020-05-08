import React from 'react';
import TeamName from './TeamName.jsx';

const TeamList = ({ sortedTeams }) => {
  return (
    <div className="teamList">
      {sortedTeams.map(team => {
        return (
          <TeamName name={team} />
        )
      })}
    </div>
  )
};

export default TeamList;