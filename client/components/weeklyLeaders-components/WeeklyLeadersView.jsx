import React from 'react';
import WeeklyLeaders from './WeeklyLeaders.jsx';
import LoadingSpinner from '../LoadingSpinner.jsx';

const WeeklyLeadersView = ({leaders}) => {
  return (
    <div>
      <h2>Weekly Leaders</h2>
      <hr />
      {leaders.length === 0 ?
        <LoadingSpinner /> :
        <div className="w-leaders-tbl">
        <div className="tbl-header">Name</div>
        <div className="tbl-header">Team</div>
        <div className="tbl-header">Total Points</div>
        <div className="tbl-header">3 Pointers</div>
        {leaders.map((elem) => (
            <WeeklyLeaders player={elem} key={elem.name} />
          ))}
      </div>
      }
    </div>
  );
}

export default WeeklyLeadersView;
