import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './Landing.jsx';
import Navbar from './Navbar.jsx';
import TeamsView from './team-components/TeamsView.jsx';
import PlayersView from './players-components/PlayersView.jsx';
import StandingsView from './standings-components/StandingsView.jsx';
import ScheduleView from './schedule-components/ScheduleView.jsx';
import LoadingSpinner from './LoadingSpinner.jsx';
import Loading from 'react-loading';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerStats: [],
      leaders: [],
      teamStats: [],
      sortedTeams: [],
      allSchedule: [],
      selectedTeam: '',
      nextSunday: '',
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
    this.setSchedule = this.setSchedule.bind(this);
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

        this.setState({
          playerStats: sortedPlayers,
          leaders: leaders,
          teamStats: res.data[0].teams,
          sortedTeams: sort,
          selectedTeam: defaultTeam,
          allSchedule: res.data[0].schedules,
        });

        this.setSchedule(defaultTeam);
      })
      .catch((err) => {
        console.log(`error while getting all data: ${err}`);
      });
  }

  setSchedule(selectedTeam) {
    // find last week and next week Sunday's dates
    const lastSunday = moment().day(0).format('M/DD/YYYY')
    const nextSunday = moment().day(7).format('M/DD/YYYY')

    // set schedule data
    // separate out schedule for selected team
    const teamSchedule = {
      lastWeek: {
        date: lastSunday,
      },
      nextWeek: {
        date: nextSunday,
      }
    };

    this.state.allSchedule.forEach((elem) => {
      if (elem.awayTeam === selectedTeam || elem.homeTeam === selectedTeam) {
        if (lastSunday === elem.date) {
          teamSchedule.lastWeek = elem;
        } else if (nextSunday === elem.date) {
          teamSchedule.nextWeek = elem;
        }
      }
    });

    if (teamSchedule !== {}) {
      this.setState({
        teamSchedule: teamSchedule,
        nextSunday: nextSunday,
      });
    }
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
    });

    this.setSchedule(val);
  }

  render() {
    let { playerStats, leaders, teamStats, sortedTeams, selectedTeam, teamSchedule, allSchedule, nextSunday } = this.state;

    const loading = () => {
      if (allSchedule.length > 0 && playerStats.length > 0) {
        return (
          <div>
          <Navbar />
            <Switch>
              <Route exact path="/"
                render={(routeProps) => (
                  <Landing
                    {...routeProps}
                    playerStats={playerStats}
                    leaders={leaders}
                    allSchedule={allSchedule}
                    nextSunday={nextSunday}
                    teamStats={teamStats}
                  />
                )}
              />
              <Route path='/teams'
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
              <Route path='/players'
                render={(routeProps) => (
                <PlayersView
                  {...routeProps}
                  playerStats={playerStats}
                />
                )}
              />
              <Route path='/standings'
                render={(routeProps) => (
                <StandingsView
                  {...routeProps}
                  playerStats={playerStats}
                />
                )}
              />
              <Route path='/schedule'
                render={(routeProps) => (
                <ScheduleView
                  {...routeProps}
                  playerStats={playerStats}
                />
                )}
              />
          </Switch>
          </div>
        )
      } else {
        return (
          <LoadingSpinner />
        );
      }
    }

    return (
      <div>
        <BrowserRouter>
        {loading()}
        </BrowserRouter>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
