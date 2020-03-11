import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import Navbar from './components/Navbar.jsx';
import WeeklySchedule from './components/WeeklySchedule.jsx';
import Hero from './components/Hero.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <WeeklySchedule />
        <Hero />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));