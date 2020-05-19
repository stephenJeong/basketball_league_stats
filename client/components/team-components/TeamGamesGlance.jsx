import React from 'react';
import TeamGame from './TeamGame.jsx';

const TeamGamesGlance = ({ schedule }) => (
  <div id="games-glance">
    <div id="gg-title">
      <h2>Games at a Glance</h2>
    </div>
    <div>
      <TeamGame game={schedule.lastWeek} key={schedule.date} />
    </div>
    <div>
      <TeamGame game={schedule.nextWeek} key={schedule.date} />
    </div>
  </div>
);

export default TeamGamesGlance;