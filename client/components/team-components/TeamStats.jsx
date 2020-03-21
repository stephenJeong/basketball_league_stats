import React from 'react';

const TeamStats = ({ teams }) => {


  return (
    <div id="teamStats">
      <div id="ppg">
        PPG<br/><span className="ts-stat">114.3</span>
      </div>
      <div id="threespg">
        3PG<br/><span className="ts-stat">10</span>
      </div>
      <div id="ftpg">
        FTPG<br/><span className="ts-stat">20</span>
      </div>
      <div id="wl-record">
        <table>
          <tbody>
            <tr>
              <td className="winLossRec">W</td>
              <td>72</td>
            </tr>
            <tr>
              <td className="winLossRec">L</td>
              <td>9</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="team-standing">
        Team Standing<br/><span className="ts-stat">1</span>
      </div>
    </div>
  )
};

export default TeamStats;