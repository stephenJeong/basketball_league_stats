import React from 'react';
import Announcements from './Announcements.jsx';
import WeeklyLeaders from './WeeklyLeaders.jsx';

function Hero ({ props }) {
  return (
    <div id="hero">
      <div>
        <Announcements />
      </div>
      <div>
        <WeeklyLeaders />
      </div>
    </div>
  )
};

export default Hero;