import React from 'react';
import TeamList from './TeamList.jsx';
import TeamOverview from './TeamOverview.jsx';
import TeamGamesGlance from './TeamGamesGlance.jsx';
import TeamPlayersView from './TeamPlayersView.jsx';

const TeamsView = ({ teamStats, playerStats, sortedTeams, selectedTeam, schedule }) => {
  console.log(`schedule in TeamsView: ${JSON.stringify(schedule)}`)
  return (
    <div id="teamsView">
      <div id="tv-teamList">
        <TeamList teams={teamStats} players={playerStats} sortedTeams={sortedTeams} />
      </div>
      <div id="tv-teamOverview">
        <TeamOverview teams={teamStats} selectedTeam={selectedTeam} />
      </div>
      <div id="tv-teamGames">
        <TeamGamesGlance schedule={schedule} />
      </div>
      <div id="tv-teamPlayers">
        <TeamPlayersView teams={teamStats} players={playerStats} selectedTeam={selectedTeam} />
      </div>
    </div>
  );
};

export default TeamsView;
