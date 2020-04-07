import React from 'react';
import { Link } from 'react-router-dom';
import TeamsView from './team-components/TeamsView.jsx';

const NavBar = ({ props }) => {
  return (
    <div className="navBar">
      <div className="navBar-item">
        <Link to="/">Home</Link>
      </div>
      <div className="navBar-item">Schedule</div>
      <div className="navBar-item">
        <Link to="/teams">Teams</Link>
      </div>
      <div className="navBar-item">Standings</div>
      <div className="navBar-item">Stats</div>
      <div className="navBar-item"></div>
    </div>
  )
};

export default NavBar;