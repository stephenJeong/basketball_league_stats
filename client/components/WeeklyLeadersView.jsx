import React from 'react';
import axios from 'axios';
import WeeklyLeaders from './WeeklyLeaders.jsx';

class WeeklyLeadersView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerStats: [],
      leaders: [],
    };

    this.getPlayerStats = this.getPlayerStats.bind(this);
    this.reverseSortPlayers = this.reverseSortPlayers.bind(this);
  }

  componentDidMount() {
    this.getPlayerStats();
  }

  getPlayerStats() {
    axios.get('/api/player')
      .then((res) => {
        const sortedPlayers = this.reverseSortPlayers(res.data);
        const leaders = sortedPlayers.splice(0, 3);
        this.setState({
          playerStats: sortedPlayers,
          leaders: leaders,
        });
      })
      .catch((err) => {
        console.log(`error while getting data: ${err}`);
      });
  }

  reverseSortPlayers(arr) {
    if (arr.length < 2) {
      return arr;
    }

    const pivot = parseInt(arr[Math.floor(Math.random() * arr.length)].totalPoints, 10);

    const left = [];
    const equal = [];
    const right = [];

    for (let elem of arr) {
      if (parseInt(elem.totalPoints, 10) > pivot) {
        left.push(elem);
      } else if (parseInt(elem.totalPoints, 10) < pivot) {
        right.push(elem);
      } else {
        equal.push(elem);
      }
    }

    return this.reverseSortPlayers(left).concat(equal).concat(this.reverseSortPlayers(right));
  }

  render() {
    const { leaders } = this.state;
    return (
      <div>
        <h2>Weekly Leaders</h2>
        <hr />
        <table className="w-leaders-tbl">
          <tbody>
            <tr className="w-leaders-headers">
              <td>Name</td>
              <td>Team</td>
              <td>Points</td>
              <td>3 Pointers</td>
            </tr>
            {leaders.map((elem) => (
              <WeeklyLeaders player={elem} key={elem.name} />
            ),

            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default WeeklyLeadersView;
