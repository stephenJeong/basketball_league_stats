import React from 'react';
import NavBar from './NavBar.jsx';
import WeeklySchedule from './WeeklySchedule.jsx';
import Hero from './Hero.jsx';

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
        <Hero />
      </div>
    );
  }
}

export default Landing;
