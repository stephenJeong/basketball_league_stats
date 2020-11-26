import React from 'react';
import moment from 'moment';
import WeeklySchedule from './WeeklySchedule.jsx';

const WeeklyScheduleView = ({ allSchedule, nextSunday, teamStats }) => {
  // allSchedule is an array of objects. Use date and time keys
  // find all dates that match with next Sunday's date
    // if date = nextSunday
      // add to upcomingSchedule array
  const upcomingSchedule = [];
  allSchedule.forEach((game) => {
    if (game.date === nextSunday) {
      upcomingSchedule.push(game)
    }
  })

  return (
    <div className="w-sched">
      <div className="w-sched-item w-sched-date">
        Next Sunday: {moment().day(7).format('MMMM Do')}
      </div>
      {upcomingSchedule.map((game) => {
        return (
          <WeeklySchedule game={game} teamStats={teamStats} key={game.time} />
        );
      })}
    </div>
  );
};

export default WeeklyScheduleView;
