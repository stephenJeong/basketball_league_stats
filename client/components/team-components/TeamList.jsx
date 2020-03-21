import React from 'react';
import TeamName from './TeamName.jsx';

const TeamList = ({ teams }) => {
  // only send unique teams
  let uniqueTeams = [];
  teams.forEach((elem) => {
    if (!uniqueTeams.includes(elem.team)) {
      uniqueTeams.push(elem.team);
    }
  });

  let sortedTeams = uniqueTeams.sort((a, b) => {
    if (a < b) { return -1; }
    if (a > b) { return 1; }
    return 0;
  });


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