import React from 'react';
import { Link } from 'react-router-dom';

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
        <div className="navBar-item">
          <Link
            to="/"
            className={this.state.activePage === 'home' ? 'navBar-links-clicked': null}
            onClick={() => {this.toggleClass('home')}}>
              Home
          </Link>
        </div>
        <div className="navBar-item">
          <Link
            to="/schedule"
            className={this.state.activePage === 'schedule' ? 'navBar-links-clicked': null}
            onClick={() => {this.toggleClass('schedule')}}>
            Schedule
          </Link>
        </div>
        <div className="navBar-item">
          <Link
            to="/teams"
            className={this.state.activePage === 'teams' ? 'navBar-links-clicked': null}
            onClick={() => {this.toggleClass('teams')}}>
            Teams
          </Link>
        </div>
        <div className="navBar-item">
          <Link
            to="/standings"
            className={this.state.activePage === 'standings' ? 'navBar-links-clicked': null}
            onClick={() => {this.toggleClass('standings')}}>
            Standings
          </Link>
        </div>
        <div className="navBar-item">
          <Link
            to="/players"
            className={this.state.activePage === 'players' ? 'navBar-links-clicked': null}
            onClick={() => {this.toggleClass('players')}}>
            Players
          </Link>
        </div>
      </div>
    )
  }
}

export default NavBar;
