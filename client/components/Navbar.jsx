import React from 'react';
import { Link } from 'react-router-dom';
import TeamsView from './team-components/TeamsView.jsx';

const NavBar = ({ props }) => {
  return (
    <div className="navBar">
      <div className="navBar-item">
        <Link to="/" className="navBar-links">Home</Link>
      </div>
      <div className="navBar-item">
        <Link to="/" className="navBar-links">Schedule</Link>
      </div>
      <div className="navBar-item">
        <Link to="/teams" className="navBar-links">Teams</Link>
      </div>
      <div className="navBar-item">
        <Link to="/" className="navBar-links">Standings</Link>
      </div>
      <div className="navBar-item">
          <Link to="/" className="navBar-links">Stats</Link>
      </div>
      <div className="navBar-item"></div>
    </div>
  )
};

export default NavBar;