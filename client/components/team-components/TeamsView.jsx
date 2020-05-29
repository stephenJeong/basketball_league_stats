import React from 'react';
import TeamList from './TeamList.jsx';
import TeamOverview from './TeamOverview.jsx';
import TeamGamesGlance from './TeamGamesGlance.jsx';
import TeamPlayersView from './TeamPlayersView.jsx';

const TeamsView = ({ teamClickHandler, teamStats, playerStats, sortedTeams, selectedTeam, schedule }) => {
  return (
    <div id="teamsView">
      <div id="tv-teamList">
        <TeamList teamClickHandler={teamClickHandler} teams={teamStats} players={playerStats} sortedTeams={sortedTeams} />
      </div>
      <div id="tv-teamOverview">
        <TeamOverview teams={teamStats} selectedTeam={selectedTeam} />
      </div>
      <div id="tv-teamGames">
        <TeamGamesGlance schedule={schedule} />
      </div>
      <div id="tv-teamPlayers">
        <TeamPlayersView teams={teamStats} selectedTeam={selectedTeam} players={playerStats} selectedTeam={selectedTeam} />
      </div>
    </div>
  );
};

export default TeamsView;
