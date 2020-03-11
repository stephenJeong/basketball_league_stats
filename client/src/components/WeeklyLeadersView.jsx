import React from 'react';
import WeeklyLeaders from './WeeklyLeaders.jsx';

// test object
let playerList = [
  {
    'name': 'stephen',
    'team': 'mambas',
    'points': 100,
    'threePts': 10
  },
  {
    'name': 'jon',
    'team': 'los celtics',
    'points': 38,
    'threePts': 1
  },
  {
    'name': 'tim',
    'team': 'ninjas',
    'points': 75,
    'threePts': 0
    }
];

const WeeklyLeadersView = ({ props }) => {
  return (
    <div>
      <h2>Weekly Leaders</h2>
      <hr />
      <table className="w-leaders-tbl">
        <tbody>
          <tr className="w-leaders-headers">
            <td>Name</td>
            <td>Team</td>
            <td>Points</td>
            <td>3 Pointers</td>
          </tr>
        {playerList.map(elem => {
          return (
            <WeeklyLeaders player={elem} />
          )
        })}
        </tbody>
      </table>
    </div>
  )
};

export default WeeklyLeadersView;