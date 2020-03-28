import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Landing.jsx';
import TeamsView from './team-components/TeamsView.jsx';

const App = () => {
  return (
    <BrowserRouter>
      {/* <Route path='/' component={TeamsView} /> */}
      <Route path='/' component={Landing} />
    </BrowserRouter>
  );
};

render(<App />, document.getElementById('app'));