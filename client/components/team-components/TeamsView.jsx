import React from 'react';
import NavBar from '../NavBar.jsx';
import TeamList from './TeamList.jsx';
import TeamOverview from './TeamOverview.jsx';
import TeamGamesGlance from './TeamGamesGlance.jsx';
import TeamPlayersView from './TeamPlayersView.jsx';
import data from '../../data.json';

const TeamsView = ({ listPropsHere }) => {
  return (
    <div id="teamsView">
      <div id="tv-navBar">
        <NavBar />
      </div>
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