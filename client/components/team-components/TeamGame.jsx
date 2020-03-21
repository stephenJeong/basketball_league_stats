import React from 'react';

const TeamGame = ({ week, date }) => {
  return (
    <div id="gg-game">
      <div id="gg-game-date">
        {/* {week} {date} */}
        <strong>LAST GAME</strong> Sunday, March 1
      </div>
      <div id="gg-game-sched">
        <div>
          <img src="https://www.stickpng.com/assets/images/58419d0aa6515b1e0ad75a6c.png" alt="lakers" width="150" /><br/>
          72-5
        </div>
        <div>
          110
        </div>
        <div>
          FINAL
        </div>
        <div>
          50
        </div>
        <div>
          <img src="https://www.stickpng.com/assets/images/58419c6aa6515b1e0ad75a61.png" alt="celtics" width="150" /><br/>
          5-72
        </div>
      </div>
    </div>
  )
};

export default TeamGame;