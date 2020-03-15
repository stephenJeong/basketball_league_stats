import React from 'react';
import TeamName from './TeamName.jsx';

const TeamList = ({ teams }) => {
  // only send unique teams
  let uniqueTeams = [];
  teams.forEach((elem) => {
    if (!uniqueTeams.includes(elem.team)) {
      uniqueTeams.push(elem.team);
    }
  })

  return (
    <div className="teamList">
      {uniqueTeams.map(team => {
        return (
          <TeamName name={team} />
        )
      })}
    </div>
  )
};

export default TeamList;