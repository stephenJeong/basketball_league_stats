import React, {Fragment} from 'react'

const PlayerName = ({ player }) => {
  let fgPct = player.fgPct * 100;
  let ftPct = player.ftPct * 100;
  return (
    <Fragment>
      <div>{player.name}</div>
      <div>{player.team}</div>
      <div>{player.totalPoints}</div>
      <div>{player.ppg}</div>
      <div>{fgPct}%</div>
      <div>{ftPct}%</div>
    </Fragment>
  );
};

export default PlayerName;
