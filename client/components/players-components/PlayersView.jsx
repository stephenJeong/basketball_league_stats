import React from 'react';
import PlayersList from './PlayersList.jsx';

class PlayersView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPlayerStats: this.props.playerStats,
      selectedPlayer: '',
      playerStats: {},
    }

    // this.playerClickHandler = this.playerClickHandler.bind(this);
  }

  // playerClickHandler(val) {
  //   let playerData = {};

  //   for (let i = 0; i < this.state.allPlayerStats.length; i++) {
  //     if (this.state.allPlayerStats[i].name === val) {
  //       playerData = this.state.allPlayerStats[i]
  //     }
  //   }

  //   this.setState({
  //     selectedPlayer: val,
  //     playerStats: playerData,
  //   });
  // }

  render() {
    let { allPlayerStats } = this.state;

    return (
      <div id="players-view">
        <div id="players-list">
          <PlayersList players={allPlayerStats} playerClickHandler={this.playerClickHandler} />
        </div>
      </div>
    );
  }
};

export default PlayersView;
