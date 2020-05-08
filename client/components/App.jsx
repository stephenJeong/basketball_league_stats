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
    };

    this.getPlayerStats = this.getPlayerStats.bind(this);
    this.reverseSortPlayers = this.reverseSortPlayers.bind(this);
    this.getTeamStats = this.getTeamStats.bind(this);
  }

  componentDidMount() {
    this.getPlayerStats();
    this.getTeamStats();
  }

  getPlayerStats() {
    axios.get('/api/player')
      .then((res) => {
        const sortedPlayers = this.reverseSortPlayers(res.data);
        const leaders = sortedPlayers.splice(0, 3);
        this.setState({
          playerStats: sortedPlayers,
          leaders: leaders,
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
        console.log(res.data);
        this.setState({
          teamStats: res.data,
        });
      })
      .catch((err) => {
        console.log(`error while getting team data: ${err}`);
      });
  }

  render() {
    let { playerStats, leaders, teamStats } = this.state;

    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" render={(routeProps) => (<Landing {...routeProps} playerStats={playerStats} leaders={leaders} />)} />
              <Route path="/teams" render={(routeProps) => (<TeamsView {...routeProps} teamStats={teamStats} />)} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
