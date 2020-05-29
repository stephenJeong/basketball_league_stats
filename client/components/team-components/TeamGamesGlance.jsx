import React from 'react';
import TeamGame from './TeamGame.jsx';

const TeamGamesGlance = ({ schedule }) => {
  console.log(`schedule in TeamGamesGlance: ${JSON.stringify(schedule)}`)
  return (
    <div id="games-glance">
    <div id="gg-title">
      <h2>Games at a Glance</h2>
    </div>
    <div>
      <TeamGame game={schedule.lastWeek} key={schedule.lastWeek.date} gameWeek={'LAST'} />
    </div>
    <div>
      <TeamGame game={schedule.nextWeek} key={schedule.nextWeek.date} gameWeek={'NEXT'} />
    </div>
  </div>
  )
}

export default TeamGamesGlance;
