import React from 'react';
import NavBar from './NavBar.jsx';
import WeeklySchedule from './WeeklySchedule.jsx';
import Hero from './Hero.jsx';

const Landing = ({ props }) => {
  return (
    <div>
      <NavBar />
      <WeeklySchedule />
      <Hero />
    </div>
  )
};

export default Landing;