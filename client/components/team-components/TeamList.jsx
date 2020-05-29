import React from 'react';
import TeamName from './TeamName.jsx';

const TeamList = ({ teamClickHandler, sortedTeams }) => (
  <div className="teamList">
    {sortedTeams.map(team => {
      return (
        <TeamName teamClickHandler={teamClickHandler} name={team} key={team} />
      )
    })}
  </div>
);

export default TeamList;
