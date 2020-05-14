import React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './Landing.jsx';
import Navbar from './Navbar.jsx';
import TeamsView from './team-components/TeamsView.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerStats: [],
      leaders: [],
      teamStats: [],
      allSchedule: [],
      sortedTeams: [],
      selectedTeam: {},
      teamSchedule: {
        lastGame: {},
        nextGame: {},
      },
    };

    this.getPlayerStats = this.getPlayerStats.bind(this);
    this.reverseSortPlayers = this.reverseSortPlayers.bind(this);
    this.getTeamStats = this.getTeamStats.bind(this);
    this.getSchedule = this.getSchedule.bind(this);
    this.setDefaultTeam = this.setDefaultTeam.bind(this);
  }

  componentDidMount() {
    this.getSchedule();
    this.getPlayerStats();
    this.getTeamStats();
    this.setDefaultTeam();
  }

  getPlayerStats() {
    axios.get('/api/player')
      .then((res) => {
        const sortedPlayers = this.reverseSortPlayers(res.data);
        const leaders = sortedPlayers.splice(0, 5);
        this.setState({
          playerStats: sortedPlayers,
          leaders: leaders,
        });
      })
      .catch((err) => {
        console.log(`error while getting player data: ${err}`);
      });
  }

  getSchedule() {
    axios.get('/api/schedule')
      .then((res) => {
        this.setState({
          allSchedule: res.data,
        });
      })
      .catch((err) => {
        console.log(`error while getting player data: ${err}`);
      });
  }

  reverseSortPlayers(arr) {
    if (arr.length < 2) {
      return arr;
    }

    const pivot = parseInt(arr[Math.floor(Math.random() * arr.length)].totalPoints, 10);

    const left = [];
    const equal = [];
    const right = [];

    for (let elem of arr) {
      if (parseInt(elem.totalPoints, 10) > pivot) {
        left.push(elem);
      } else if (parseInt(elem.totalPoints, 10) < pivot) {
        right.push(elem);
      } else {
        equal.push(elem);
      }
    }

    return this.reverseSortPlayers(left).concat(equal).concat(this.reverseSortPlayers(right));
  }

  getTeamStats() {
    axios.get('/api/team')
      .then((res) => {
        this.setState({
          teamStats: res.data,
        });


      })
      .catch((err) => {
        console.log(`error while getting team data: ${err}`);
      });
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

    uniqueTeams.forEach((elem) => {
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
    this.state.allSchedule.forEach((elem) => {
      if (elem.awayTeam === team.name || elem.homeTeam === team.name) {
        if (elem.date === lastSunday) {
          teamSchedule.lastWeek = elem;
        } else if (elem.date === nextSunday) {
          teamSchedule.nextWeek = elem;
        }
      }
    });

    console.log('teamSchedule in app.jsx:', teamSchedule)

    this.setState({
      sortedTeams: sort,
      selectedTeam: team,
      teamSchedule: teamSchedule,
    });
  }



  render() {
    let { playerStats, leaders, teamStats, sortedTeams, selectedTeam, teamSchedule } = this.state;

    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" render={(routeProps) => (<Landing {...routeProps} playerStats={playerStats} leaders={leaders} />)} />
              <Route path="/teams" render={(routeProps) => (
                <TeamsView {...routeProps} teamStats={teamStats} playerStats={playerStats} sortedTeams={sortedTeams} selectedTeam={selectedTeam} schedule={teamSchedule} />
                )}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
