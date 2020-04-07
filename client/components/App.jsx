import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing.jsx';
import TeamsView from './team-components/TeamsView.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/teams' component={TeamsView} />
      </Switch>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById('app'));