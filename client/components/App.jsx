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

    this.reverseSortPlayers = this.reverseSortPlayers.bind(this);
    this.handleTeamClick = this.handleTeamClick.bind(this);
    this.getAllStats = this.getAllStats.bind(this);
  }

  componentDidMount() {
    this.getAllStats();
  }

  getAllStats() {
    axios.get('/api/all')
      .then((res) => {
        // set player data
        const sortedPlayers = this.reverseSortPlayers(res.data[0].players);
        const leaders = sortedPlayers.splice(0, 5);

        // set team data
        // only send unique teams
        const uniqueTeams = [];
        res.data[0].teams.forEach((elem) => {
          if (!uniqueTeams.includes(elem.name)) {
            uniqueTeams.push(elem.name);
          }
        });

        // sort teams in alphabetical order
        const sort = uniqueTeams.sort((a, b) => {
          if (a < b) { return -1; }
          if (a > b) { return 1; }
          return 0;
        });

        // set default team
        let defaultTeam = {};
        uniqueTeams.forEach((elem) => {
          if (elem === sort[0]) {
            defaultTeam = elem;
          }
        });

        // find last week and next week Sunday's dates
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1);
        const ddLast = String(today.getDate() + (0 - today.getDay() % 7));
        const ddNext = String(today.getDate() + (7 - today.getDay() % 7));

        const lastSunday = `${mm}/${ddLast}/${yyyy}`;
        const nextSunday = `${mm}/${ddNext}/${yyyy}`;

        // set schedule data
        // separate out schedule for selected team
        const teamSchedule = {};
        res.data[0].schedules.forEach((elem) => {
          if (elem.awayTeam === defaultTeam || elem.homeTeam === defaultTeam) {
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
          playerStats: sortedPlayers,
          leaders: leaders,
          teamStats: res.data[0].teams,
          sortedTeams: sort,
          selectedTeam: defaultTeam,
        });
      })
      .catch((err) => {
        console.log(`error while getting all data: ${err}`);
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

  handleTeamClick(val) {
    this.setState({
      selectedTeam: val,
    })
  }

  render() {
    let { playerStats, leaders, teamStats, sortedTeams, selectedTeam, teamSchedule } = this.state;

    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/"
                render={(routeProps) => (
                  <Landing {...routeProps} playerStats={playerStats} leaders={leaders} />
                )}
              />
              <Route path="/teams"
                render={(routeProps) => (
                  <TeamsView
                    {...routeProps}
                    teamClickHandler={this.handleTeamClick}
                    teamStats={teamStats}
                    playerStats={playerStats}
                    sortedTeams={sortedTeams}
                    selectedTeam={selectedTeam}
                    schedule={teamSchedule}
                  />
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
