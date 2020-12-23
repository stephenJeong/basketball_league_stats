import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../menu.png';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: '',
    };

    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass(page) {
    this.setState({
      activePage: page,
    });
  }

  render() {
    return (
      <div className="navBar">
        <nav>
          <input type="checkbox" id="nav-toggle" />
          <label htmlFor="nav-toggle" className="burger-menu">
            <img src={logo} alt="menu" />
          </label>
          <div className="main-menu">
            <Link
              to="/"
              className={this.state.activePage === 'home' ? 'navBar-links-clicked navBar-item navBar-item': 'navBar-item'}
              onClick={() => {this.toggleClass('home')}}>
                Home
            </Link>
            {/* <Link
              to="/schedule"
              className={this.state.activePage === 'schedule' ? 'navBar-links-clicked navBar-item': 'navBar-item'}
              onClick={() => {this.toggleClass('schedule')}}>
              Schedule
            </Link> */}
            <Link
              to="/teams"
              className={this.state.activePage === 'teams' ? 'navBar-links-clicked navBar-item': 'navBar-item'}
              onClick={() => {this.toggleClass('teams')}}>
              Teams
            </Link>
            {/* <Link
              to="/standings"
              className={this.state.activePage === 'standings' ? 'navBar-links-clicked navBar-item': 'navBar-item'}
              onClick={() => {this.toggleClass('standings')}}>
              Standings
            </Link> */}
            <Link
              to="/players"
              className={this.state.activePage === 'players' ? 'navBar-links-clicked navBar-item': 'navBar-item'}
              onClick={() => {this.toggleClass('players')}}>
              Players
            </Link>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar;
