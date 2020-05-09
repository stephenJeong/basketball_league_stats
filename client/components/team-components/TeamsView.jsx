import React from 'react';
import TeamList from './TeamList.jsx';
import TeamOverview from './TeamOverview.jsx';
import TeamGamesGlance from './TeamGamesGlance.jsx';
import TeamPlayersView from './TeamPlayersView.jsx';
import { render } from 'react-dom';

class TeamsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamStats: this.props.teamStats,
      playerStats: this.props.playerStats,
      sortedTeams: [],
      selectedTeam: {},
    };

    this.setDefaultTeam = this.setDefaultTeam.bind(this);
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

    let sort = uniqueTeams.sort((a, b) => {
      if (a < b) { return -1; }
      if (a > b) { return 1; }
      return 0;
    });

    this.props.teamStats.forEach((elem) => {
      if (elem.name === sort[0]) {
        this.setState({
          selectedTeam: elem,
        })
      }
    });

    this.setState({
      sortedTeams: sort,
    });
  }

  render() {
    let { teamStats, playerStats, sortedTeams, selectedTeam } = this.state;

    return (
      <div id="teamsView">
        <div id="tv-teamList">
          <TeamList teams={teamStats} players={playerStats} sortedTeams={sortedTeams} />
        </div>
        <div id="tv-teamOverview">
          <TeamOverview teams={teamStats} players={playerStats} selectedTeam={selectedTeam} />
        </div>
        <div id="tv-teamGames">
          <TeamGamesGlance teams={teamStats} players={playerStats} selectedTeam={selectedTeam} />
        </div>
        <div id="tv-teamPlayers">
          <TeamPlayersView teams={teamStats} players={playerStats} selectedTeam={selectedTeam} />
        </div>
      </div>
    );
  }
};

export default TeamsView;
