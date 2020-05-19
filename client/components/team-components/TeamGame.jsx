import React from 'react';

const TeamGame = ({ game }) => {
  let { date, awayScore, awayTeam, homeScore, homeTeam, time, gameWeek } = game;

  return (
    <div id="gg-game">
      <div id="gg-game-date">
        <strong>{gameWeek}</strong> {date} | {time}
      </div>
      <div id="gg-game-sched">
        <div>
          {awayTeam}
        </div>
        <div className="gg-score">
          {awayScore}
        </div>
        <div className="gg-status">
          FINAL
        </div>
        <div className="gg-score">
          {homeScore}
        </div>
        <div>
          {homeTeam}
        </div>
      </div>
    </div>
  )
};

export default TeamGame;