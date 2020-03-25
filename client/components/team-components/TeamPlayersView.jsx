import React from 'react';
import TeamPlayers from './TeamPlayers.jsx';

const TeamPlayersView = ({ listPropsHere }) => {
  let homeTeam = [
    {
      name: "Anthony Davis",
      picture: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203076.png",
      teamLogo: "https://www.stickpng.com/assets/images/58419d0aa6515b1e0ad75a6c.png"
    },
    {
      name: "Lebron James",
      picture: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2544.png",
      teamLogo: "https://www.stickpng.com/assets/images/58419d0aa6515b1e0ad75a6c.png"
    },
    {
      name: "Alex Caruso",
      picture: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1627936.png",
      teamLogo: "https://www.stickpng.com/assets/images/58419d0aa6515b1e0ad75a6c.png"
    }
  ];

  return (
    <div id="teamPlayers" >
      {homeTeam.map((player) => {
        return (
          <TeamPlayers player={player}/>
        )
      })}
    </div>
  )
};

export default TeamPlayersView;