import React from 'react';

const TeamGame = ({ week }) => {
  return (
    <div id="gg-game">
      <div id="gg-game-date">
        <strong>{week.week}</strong> {week.date}
      </div>
      <div id="gg-game-sched">
        <div>
          <img src="https://www.stickpng.com/assets/images/58419d0aa6515b1e0ad75a6c.png" alt="lakers" width="60" /><br/>
          72-5
        </div>
        <div className="gg-score">
          110
        </div>
        <div className="gg-status">
          FINAL
        </div>
        <div className="gg-score">
          50
        </div>
        <div>
          <img src="https://www.stickpng.com/assets/images/58419c6aa6515b1e0ad75a61.png" alt="celtics" width="60" /><br/>
          5-72
        </div>
      </div>
    </div>
  )
};

export default TeamGame;