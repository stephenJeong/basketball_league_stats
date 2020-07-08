import React from 'react';
import moment from 'moment'

const WeeklySchedule = ({ allSchedule }) => (
  <div className="w-sched">
    <div className="w-sched-item w-sched-date">
      {moment().day(7).format('MMM Do')}
    </div>
    <div className="w-sched-item matchup">
      <div className="mu-time">
        3:00PM
      </div>
      <div className="mu-home mu-team">
        LAL
      </div>
      <div className="mu-home-rec mu-team-rec">
        (45-1)
      </div>
      <div className="mu-away mu-team">
        BOS
      </div>
      <div className="mu-away-rec mu-team-rec">
        (1-45)
      </div>
    </div>
    <div className="w-sched-item matchup">
      <div className="mu-time">
        3:00PM
      </div>
      <div className="mu-home mu-team">
        LAL
      </div>
      <div className="mu-home-rec mu-team-rec">
        (45-1)
      </div>
      <div className="mu-away mu-team">
        BOS
      </div>
      <div className="mu-away-rec mu-team-rec">
        (1-45)
      </div>
    </div>
    <div className="w-sched-item matchup">
      <div className="mu-time">
        3:00PM
      </div>
      <div className="mu-home mu-team">
        LAL
      </div>
      <div className="mu-home-rec mu-team-rec">
        (45-1)
      </div>
      <div className="mu-away mu-team">
        BOS
      </div>
      <div className="mu-away-rec mu-team-rec">
        (1-45)
      </div>
    </div>
    <div className="w-sched-item matchup">
      <div className="mu-time">
        3:00PM
      </div>
      <div className="mu-home mu-team">
        LAL
      </div>
      <div className="mu-home-rec mu-team-rec">
        (45-1)
      </div>
      <div className="mu-away mu-team">
        BOS
      </div>
      <div className="mu-away-rec mu-team-rec">
        (1-45)
      </div>
    </div>
    <div className="w-sched-item matchup">
      <div className="mu-time">
        3:00PM
      </div>
      <div className="mu-home mu-team">
        LAL
      </div>
      <div className="mu-home-rec mu-team-rec">
        (45-1)
      </div>
      <div className="mu-away mu-team">
        BOS
      </div>
      <div className="mu-away-rec mu-team-rec">
        (1-45)
      </div>
    </div>
  </div>
);

export default WeeklySchedule;
