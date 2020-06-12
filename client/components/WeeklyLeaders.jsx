import React, {Fragment} from 'react';

const WeeklyLeaders = ({ player }) => (
  <Fragment>
    <div>{player.name}</div>
    <div>{player.team}</div>
    <div>{player.totalPoints}</div>
    <div>{player.threePt}</div>
  </Fragment>
);

export default WeeklyLeaders;
