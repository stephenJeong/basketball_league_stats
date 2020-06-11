import React, {Fragment} from 'react'

const PlayerName = ({ player }) => {
  return (
    <Fragment>
      <div>{player.name}</div>
      <div>{player.team}</div>
      <div>{player.totalPoints}</div>
      <div>{player.ppg}</div>
      <div>{player.fgPct}</div>
      <div>{player.ftPct}</div>
    </Fragment>
  );
};

export default PlayerName;
