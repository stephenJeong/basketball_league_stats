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

    this.testGet = this.testGet.bind(this);
  }

  testGet() {
    axios.get('/api')
      .then((res) => {
        console.log(`res from testGet ${res}`)
      })
      .catch((err) => {
        console.log(`error while getting data: ${err}`);
      })
  }

  componentDidMount() {
    this.testGet();
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