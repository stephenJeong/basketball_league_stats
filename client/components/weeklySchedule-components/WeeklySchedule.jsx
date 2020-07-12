import React from 'react';

const WeeklySchedule = ({ game, teamStats }) => {
  let homeTeamRec = '';
  let awayTeamRec = '';

  for (let i = 0; i < teamStats.length; i++) {
    if (teamStats[i].name === game.homeTeam) {
      homeTeamRec = `(${teamStats[i].wins}-${teamStats[i].losses})`
    }
    if (teamStats[i].name === game.awayTeam) {
      awayTeamRec = `(${teamStats[i].wins}-${teamStats[i].losses})`
    }

    if (homeTeamRec.length > 0 && awayTeamRec.length > 0) {
      break;
    }
  }

  return (
    <div className="w-sched-item matchup">
      <div className="mu-time">
        {game.time}
      </div>
      <div className="mu-home mu-team">
        {game.homeTeam}
      </div>
      <div className="mu-home-rec mu-team-rec">
        {homeTeamRec}
      </div>
      <div className="mu-away mu-team">
        {game.awayTeam}
      </div>
      <div className="mu-away-rec mu-team-rec">
        {awayTeamRec}
      </div>
    </div>
  );
};

export default WeeklySchedule;
