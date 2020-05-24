import React from 'react';

const TeamName = ({ teamClickHandler, name }) => {
  return (
    <div onClick={() => teamClickHandler(name)} className="tl-teamName">
      {name}
    </div>
  )
};

export default TeamName;
