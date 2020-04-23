import React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './Landing.jsx';
import TeamsView from './team-components/TeamsView.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerStats: [],
      leaders: [],
    };

    this.getPlayerStats = this.getPlayerStats.bind(this);
    this.reverseSortPlayers = this.reverseSortPlayers.bind(this);
  }

  componentDidMount() {
    this.getPlayerStats();
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
        console.log(`error while getting data: ${err}`);
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

  render() {
    let { playerStats, leaders } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(routeProps) => (<Landing {...routeProps} playerStats={playerStats} leaders={leaders} />)} />
          <Route path="/teams" render={(routeProps) => (<TeamsView {...routeProps} />)} />
        </Switch>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('app'));
