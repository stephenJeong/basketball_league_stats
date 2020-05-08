import React from 'react';
import TeamList from './TeamList.jsx';
import TeamOverview from './TeamOverview.jsx';
import TeamGamesGlance from './TeamGamesGlance.jsx';
import TeamPlayersView from './TeamPlayersView.jsx';
import data from '../../../database/data.json';

const TeamsView = ({ teamStats }) => {
  return (
    <div id="teamsView">
      <div id="tv-teamList">
        <TeamList teams={data} />
      </div>
      <div id="tv-teamOverview">
        <TeamOverview teams={data} />
      </div>
      <div id="tv-teamGames">
        <TeamGamesGlance teams={data} />
      </div>
      <div id="tv-teamPlayers">
        <TeamPlayersView teams={data} />
      </div>
    </div>
  )
};

export default TeamsView;