import React from 'react';
import WeeklySchedule from './WeeklySchedule.jsx';
import Hero from './Hero.jsx';

const Landing = ({ leaders }) => (
  <div>
    <WeeklySchedule />
    <Hero leaders={leaders}  />
  </div>
);

export default Landing;
