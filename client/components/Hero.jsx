import React from 'react';
import Announcements from './Announcements.jsx';
import WeeklyLeadersView from './WeeklyLeadersView.jsx';

const Hero = () => (
  <div id="hero">
    <div id="announcements">
      <Announcements />
    </div>
    <div id="weeklyLeaders">
      <WeeklyLeadersView />
    </div>
  </div>
);

export default Hero;
