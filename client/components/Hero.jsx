import React from 'react';
import Announcements from './Announcements.jsx';
import WeeklyLeadersView from './weeklyLeaders-components/WeeklyLeadersView.jsx';

const Hero = ({ leaders }) => (
  <div id="hero">
    <div id="announcements">
      <Announcements />
    </div>
    <div id="weeklyLeaders">
      <WeeklyLeadersView leaders={leaders} />
    </div>
  </div>
);

export default Hero;
