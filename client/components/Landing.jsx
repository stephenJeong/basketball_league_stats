import React from 'react';
import WeeklySchedule from './weeklyLeaders-components/WeeklySchedule.jsx';
import Hero from './Hero.jsx';

const Landing = ({ leaders, allSchedule }) => (
  <div>
    <WeeklySchedule allSchedule={allSchedule} />
    <Hero leaders={leaders} />
  </div>
);

export default Landing;
