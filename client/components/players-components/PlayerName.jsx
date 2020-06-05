import React from 'react';

const PlayerName = ({ name, playerClickHandler }) => {
  return (
    <div onClick={() => playerClickHandler(name)} className="pl-player">
      {name}
    </div>
  );
};

export default PlayerName;
