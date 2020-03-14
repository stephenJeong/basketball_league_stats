import React from 'react';
import Navbar from './Navbar.jsx';
import WeeklySchedule from './WeeklySchedule.jsx';
import Hero from './Hero.jsx';

const Landing = ({ props }) => {
  return (
    <div>
      <Navbar />
      <WeeklySchedule />
      <Hero />
    </div>
  )
};

export default Landing;