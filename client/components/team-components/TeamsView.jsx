import React from 'react';
import NavBar from '../NavBar.jsx';
import TeamList from './TeamList.jsx';
import TeamOverview from './TeamOverview.jsx';
import TeamGamesGlance from './TeamGamesGlance.jsx';
import TeamPlayersView from './TeamPlayersView.jsx';

const TeamsView = ({ listPropsHere }) => {
  return (
    <div id="teamsView">
      <div id="tv-navBar">
        <NavBar />
      </div>
      <div id="tv-teamList">
        <TeamList />
      </div>
      <div id="tv-teamOverview">
        <TeamOverview />
      </div>
      <div id="tv-teamGames">
        <TeamGamesGlance />
      </div>
      <div id="tv-teamPlayers">
        <TeamPlayersView />
      </div>
    </div>
  )
};

export default TeamsView;