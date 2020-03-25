import React from 'react';
import TeamGame from './TeamGame.jsx';

const TeamGamesGlance = ({ listPropsHere }) => {
  let lastWeek = {
    week: "LAST GAME",
    date: "Sunday, March 1"
  };

  let nextWeek = {
    week: "NEXT GAME",
    date: "Sunday, March 8"
  };

  return (
    <div id="games-glance">
      <div id="gg-title">
        <h2>Games at a Glance</h2>
      </div>
      <div>
        <TeamGame week={lastWeek} />
      </div>
      <div>
        <TeamGame week={nextWeek} />
      </div>
    </div>
  )
};

export default TeamGamesGlance;