import React from 'react';

const NavBar = ({ props }) => {
  return (
    <div className="navBar">
      <div className="navBar-item">Home</div>
      <div className="navBar-item">Schedule</div>
      <div className="navBar-item">Teams</div>
      <div className="navBar-item">Standings</div>
      <div className="navBar-item">Stats</div>
      <div className="navBar-item"></div>
    </div>
  )
};

export default NavBar;