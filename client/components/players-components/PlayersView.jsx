import React from 'react';
import PlayersList from './PlayersList.jsx';

class PlayersView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPlayerStats: this.props.playerStats,
      selectedPlayer: '',
      playerStats: {},
      searchTerm: '',
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

    handleSearch(e) {
      let search = e.target.value.toLowerCase();

      // filter for players with the above search value
      let matchedPlayers = this.props.playerStats.filter((player) => {
        return player.name.toLowerCase().includes(search);
      });

      console.log(`matchedPlayers.length: ${matchedPlayers.length}`)

      if (search === '') {
        matchedPlayers = this.props.playerStats;
      }

      this.setState({
        searchTerm: search,
        allPlayerStats: matchedPlayers,
      });
    }

  render() {
    let { allPlayerStats } = this.state;

    return (
      <div id="players-view">
        <div id="players-list">
          <PlayersList players={allPlayerStats} handleSearch={this.handleSearch} />
        </div>
      </div>
    );
  }
};

export default PlayersView;
