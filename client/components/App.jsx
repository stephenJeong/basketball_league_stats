import React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing.jsx';
import TeamsView from './team-components/TeamsView.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.getPlayerStats = this.getPlayerStats.bind(this);
  }

  getPlayerStats() {
    axios.get('/api/player')
      .then((res) => {
        // let data = JSON.stringify(res)
        console.log(`res from testGet ${JSON.stringify(res.data)}`)
      })
      .catch((err) => {
        console.log(`error while getting data: ${err}`);
      })
  }

  componentDidMount() {
    this.getPlayerStats();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/teams' component={TeamsView} />
        </Switch>
      </BrowserRouter>
    );
  }
};

render(<App />, document.getElementById('app'));