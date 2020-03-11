import React from 'react';

const WeeklyLeaders = ({ player }) => {
  return (
    <tr>
      <td>
         {player.name}
      </td>
      <td>
        {player.team}
      </td>
      <td>
        {player.points}
      </td>
      <td>
        {player.threePts}
      </td>
    </tr>
  )
};

export default WeeklyLeaders;