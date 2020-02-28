import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import Navbar from './components/Navbar.jsx'
import WeeklySchedule from './components/WeeklySchedule.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    return (
      <div className='container'>
        <Navbar />
        <WeeklySchedule />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));