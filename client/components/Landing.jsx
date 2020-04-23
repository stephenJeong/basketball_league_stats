import React from 'react';
import NavBar from './NavBar.jsx';
import WeeklySchedule from './WeeklySchedule.jsx';
import Hero from './Hero.jsx';

const Landing = ({ leaders }) => (
  <div>
    <NavBar />
    <WeeklySchedule />
    <Hero leaders={leaders}  />
  </div>
);

export default Landing;
