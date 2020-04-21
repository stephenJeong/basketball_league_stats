import React from 'react';

const WeeklyLeaders = ({ player }) => (
  <tr key={player.name}>
    <td>
      {player.name}
    </td>
    <td>
      {player.team}
    </td>
    <td>
      {player.totalPoints}
    </td>
    <td>
      {player.threePt}
    </td>
  </tr>
);

export default WeeklyLeaders;
