import React from 'react';

const TeamGame = ({ game }) => {
  let { date, awayScore, awayTeam, homeScore, homeTeam, time, gameWeek } = game;

  const dateTime = () => {
    if (!game.time) {
      return (
        <div>
          <div id="gg-game-date">
            {date}
          </div>
        <div id="gg-game-sched">
           <div className="gg-score">
          </div>
          <div className="gg-status">
            NO GAME
          </div>
          <div className="gg-score">
          </div>
        </div>
      </div>
      )
    } else {
      return (
        <div>
          <div id="gg-game-date">
            {date} @ {time}
          </div>
        <div id="gg-game-sched">
          <div className="gg-score">
            {awayTeam}<br/>
            {awayScore}
          </div>
          <div className="gg-status">
            FINAL
          </div>
          <div className="gg-score">
            {homeTeam}<br/>
            {homeScore}
          </div>
        </div>
      </div>
      )
    }
  }

  return (
    <div>
      {dateTime()}
    </div>
  )
};

export default TeamGame;
