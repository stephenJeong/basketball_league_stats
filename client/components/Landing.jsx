import React from 'react';
import WeeklyScheduleView from './weeklySchedule-components/WeeklyScheduleView.jsx';
import Hero from './Hero.jsx';

const Landing = ({ leaders, allSchedule, nextSunday, teamStats }) => (
  <div>
    <WeeklyScheduleView allSchedule={allSchedule} nextSunday={nextSunday} teamStats={teamStats} />
    <Hero leaders={leaders} />
  </div>
);

export default Landing;
