import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, hashHistory } from 'react-router-dom';
import Landing from './Landing.jsx';

const App = () => {
  return (
    <BrowserRouter history={hashHistory}>
      <Route path='/' component={Landing} />
    </BrowserRouter>
  )
}

render(<App />, document.getElementById('app'));