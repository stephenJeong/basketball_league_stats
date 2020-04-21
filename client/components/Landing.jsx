import React from 'react';
import NavBar from './NavBar.jsx';
import WeeklySchedule from './WeeklySchedule.jsx';
import Hero from './Hero.jsx';
import axios from 'axios';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <WeeklySchedule />
        <Hero playerStats={this.state.playerStats} />
      </div>
    );
  }
};

export default Landing;