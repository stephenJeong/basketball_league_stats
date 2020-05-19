import React from 'react';
import TeamList from './TeamList.jsx';
import TeamOverview from './TeamOverview.jsx';
import TeamGamesGlance from './TeamGamesGlance.jsx';
import TeamPlayersView from './TeamPlayersView.jsx';

const TeamsView = ({ teamStats, playerStats, sortedTeams, selectedTeam, schedule }) => {
  /*
  constructor(props) {
    super(props);
    this.state = {
      teamStats: this.props.teamStats,
      playerStats: this.props.playerStats,
      sortedTeams: this.props.sortedTeams,
      selectedTeam: this.props.selectedTeam,
      schedule: this.props.schedule,
    };

    // this.setDefaultTeam = this.setDefaultTeam.bind(this);
  }

  componentDidMount() {
    this.setDefaultTeam();
  }

  setDefaultTeam() {
    // only send unique teams
    let uniqueTeams = [];
    this.state.teamStats.forEach((elem) => {
      if (!uniqueTeams.includes(elem.name)) {
        uniqueTeams.push(elem.name);
      }
    });

    // sort teams in alphabetical order
    let sort = uniqueTeams.sort((a, b) => {
      if (a < b) { return -1; }
      if (a > b) { return 1; }
      return 0;
    });

    // set default team
    let team = {};

    this.props.teamStats.forEach((elem) => {
      if (elem.name === sort[0]) {
        team = elem;
      }
    });

    // find last week and next week Sunday's dates
    let today = new Date();
    let yyyy = today.getFullYear();
    let mm = String(today.getMonth() + 1);
    let ddLast = String(today.getDate() + (0 - today.getDay() % 7));
    let ddNext = String(today.getDate() + (7 - today.getDay() % 7));

    let lastSunday = mm + '/' + ddLast + '/' + yyyy;
    let nextSunday = mm + '/' + ddNext + '/' + yyyy;

    // separate out schedule for selected team
    let teamSchedule = {}
    this.props.schedule.forEach((elem) => {
      if (elem.awayTeam === team.name || elem.homeTeam === team.name) {
        if (elem.date === lastSunday) {
          teamSchedule.lastWeek = elem;
        } else if (elem.date === nextSunday) {
          teamSchedule.nextWeek = elem;
        }
      }
    });

    console.log(teamSchedule)

    this.setState({
      sortedTeams: sort,
      selectedTeam: team,
      schedule: teamSchedule,
    });
  }
  */


    return (
      <div id="teamsView">
        <div id="tv-teamList">
          <TeamList teams={teamStats} players={playerStats} sortedTeams={sortedTeams} />
        </div>
        <div id="tv-teamOverview">
          <TeamOverview teams={teamStats} players={playerStats} selectedTeam={selectedTeam} />
        </div>
        <div id="tv-teamGames">
          <TeamGamesGlance teams={teamStats} players={playerStats} selectedTeam={selectedTeam} schedule={schedule} />
        </div>
        <div id="tv-teamPlayers">
          <TeamPlayersView teams={teamStats} players={playerStats} selectedTeam={selectedTeam} />
        </div>
      </div>
    );
};

export default TeamsView;
