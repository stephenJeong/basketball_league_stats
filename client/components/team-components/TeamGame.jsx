import React from 'react';

const TeamGame = ({ game }) => {
  let { date, awayScore, awayTeam, homeScore, homeTeam, time } = game;

  const dateTime = () => {
    if (!game.time) {
      return (
        <div className="teams-game">
          <div id="gg-game-date">
            {date}
          </div>
          <div id="gg-game-sched">
            <div className="gg-score"></div>
            <div className="gg-status">
              NO GAME
            </div>
            <div className="gg-score"></div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="teams-game">
          <div id="gg-game-date">
            {date} @ {time}
          </div>
          <div id="gg-game-sched">
            <div>
              <p className="gg-teamName text-overflow">{awayTeam}</p>
              <p className="gg-score">{awayScore}</p>
            </div>
            <div className="gg-status">
              FINAL
            </div>
            <div>
              <p className="gg-teamName text-overflow">{homeTeam}</p>
              <p className="gg-score">{homeScore}</p>
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
