import React from 'react';
import WeeklyLeaders from './WeeklyLeaders.jsx';
import axios from 'axios';

class WeeklyLeadersView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerStats: [],
      leaders: [],
      update: false
    };

    this.getPlayerStats = this.getPlayerStats.bind(this);
    this.reverseSortPlayers = this.reverseSortPlayers.bind(this);
  }

  reverseSortPlayers(arr) {
    if (arr.length < 2) {
      return arr;
    }

    let pivot = parseInt(arr[Math.floor(Math.random() * arr.length)].totalPoints);

    let left = [];
    let equal = [];
    let right = [];

    for (let elem of arr) {
      if (parseInt(elem.totalPoints) > pivot) {
        left.push(elem);
      } else if (parseInt(elem.totalPoints) < pivot) {
        right.push(elem);
      } else {
        equal.push(elem);
      }
    }

    return this.reverseSortPlayers(left).concat(equal).concat(this.reverseSortPlayers(right));
  }

  getPlayerStats() {
    axios.get('/api/player')
      .then((res) => {
        let sortedPlayers = this.reverseSortPlayers(res.data);
        console.log(sortedPlayers);
        let leaders = sortedPlayers.splice(0, 3);
        this.setState({
          playerStats: sortedPlayers,
          leaders: leaders
        });
      })
      .catch((err) => {
        console.log(`error while getting data: ${err}`);
      })
  }

  componentDidMount() {
    this.getPlayerStats();
  }

  render() {

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
          {this.state.leaders.map(elem => {
            return (
              <WeeklyLeaders player={elem} key={elem.name} />
            )
          })
          }
          </tbody>
        </table>
      </div>
    )

  }
}


export default WeeklyLeadersView;