import React from 'react';
import TeamGame from './TeamGame.jsx';

const TeamGamesGlance = ({ listPropsHere }) => {
  return (
    <div id="games-glance">
      Games at a Glance
      <TeamGame />
    </div>
  )
};

export default TeamGamesGlance;