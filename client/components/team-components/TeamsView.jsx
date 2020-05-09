import React from 'react';
import TeamList from './TeamList.jsx';
import TeamOverview from './TeamOverview.jsx';
import TeamGamesGlance from './TeamGamesGlance.jsx';
import TeamPlayersView from './TeamPlayersView.jsx';
import data from '../../../database/data.json';

const TeamsView = ({ teamStats, playerStats }) => {
  // only send unique teams
  let uniqueTeams = [];
  teamStats.forEach((elem) => {
    if (!uniqueTeams.includes(elem.name)) {
      uniqueTeams.push(elem.name);
    }
  });

  let sortedTeams = uniqueTeams.sort((a, b) => {
    if (a < b) { return -1; }
    if (a > b) { return 1; }
    return 0;
  });

  return (
    <div id="teamsView">
      <div id="tv-teamList">
        <TeamList teams={teamStats} players={playerStats} sortedTeams={sortedTeams} />
      </div>
      <div id="tv-teamOverview">
        <TeamOverview teams={teamStats} players={playerStats} sortedTeams={sortedTeams} />
      </div>
      <div id="tv-teamGames">
        <TeamGamesGlance teams={teamStats} players={playerStats} />
      </div>
      <div id="tv-teamPlayers">
        <TeamPlayersView teams={teamStats} players={playerStats} />
      </div>
    </div>
  )
};

export default TeamsView;
