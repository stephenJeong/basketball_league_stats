import React from 'react';

const TeamStats = ({ defaultTeam }) => (
  <div id="teamStats">
    <div id="ppg">
      PPG<br/><span className="ts-stat">{defaultTeam.ppg}</span>
    </div>
    <div id="threespg">
      3PG<br/><span className="ts-stat">{defaultTeam.threePg}</span>
    </div>
    <div id="ftpg">
      FTPG<br/><span className="ts-stat">{defaultTeam.ftPg}</span>
    </div>
    <div id="wl-record">
      <table>
        <tbody>
          <tr>
            <td className="winLossRec">W</td>
            <td>{defaultTeam.wins}</td>
          </tr>
          <tr>
            <td className="winLossRec">L</td>
            <td>{defaultTeam.losses}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="team-standing">
      Team Standing<br/><span className="ts-stat">{defaultTeam.standing}</span>
    </div>
  </div>
);

export default TeamStats;
