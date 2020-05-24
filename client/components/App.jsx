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
        lastWeek: {
          date: '',
          awayScore: '',
        },
        nextWeek: {
          date: '',
          awayScore: '',
        },
      },
    };

    this.getPlayerStats = this.getPlayerStats.bind(this);
    this.reverseSortPlayers = this.reverseSortPlayers.bind(this);
    this.getTeamStats = this.getTeamStats.bind(this);
    this.getSchedule = this.getSchedule.bind(this);
    this.setDefaultTeam = this.setDefaultTeam.bind(this);
    this.handleTeamClick = this.handleTeamClick.bind(this);
  }

  componentDidMount() {
    this.getSchedule();
    this.getPlayerStats();
    this.getTeamStats();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.allSchedule !== this.state.allSchedule) {
      this.setDefaultTeam();
    }
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
        res.data.forEach((elem) => {
          if (elem.awayTeam === this.state.selectedTeam || elem.homeTeam === this.state.selectedTeam) {
            if (elem.date === lastSunday) {
              teamSchedule.lastWeek = elem;
            } else if (elem.date === nextSunday) {
              teamSchedule.nextWeek = elem;
            }
          }
        });
        if (teamSchedule !== {}) {
          this.setState({
            teamSchedule: teamSchedule,
          });
        }

        this.setState({
          allSchedule: res.data,
        });
      })
      .catch((err) => {
        console.log(`error while getting schedule data: ${err}`);
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
        // only send unique teams
        let uniqueTeams = [];
        res.data.forEach((elem) => {
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
          if (elem === sort[0]) {
            team = elem;
          }
        });

        this.setState({
          teamStats: res.data,
          sortedTeams: sort,
          selectedTeam: team,
        });


      })
      .catch((err) => {
        console.log(`error while getting team data: ${err}`);
      });
  }

  setDefaultTeam() {
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
      if (elem.awayTeam === this.state.selectedTeam || elem.homeTeam === this.state.selectedTeam) {
        if (elem.date === lastSunday) {
          teamSchedule.lastWeek = elem;
        } else if (elem.date === nextSunday) {
          teamSchedule.nextWeek = elem;
        }
      }
    });
    if (teamSchedule !== {}) {
      this.setState({
        teamSchedule: teamSchedule,
      });
    }
  }

  handleTeamClick(val) {
    let test = val;
    console.log(`handleTeamClick: ${test}`)
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
                <TeamsView {...routeProps} teamClickHandler={this.handleTeamClick} teamStats={teamStats} playerStats={playerStats} sortedTeams={sortedTeams} selectedTeam={selectedTeam} schedule={teamSchedule} />
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
