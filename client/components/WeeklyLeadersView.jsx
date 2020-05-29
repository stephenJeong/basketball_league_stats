import React from 'react';
import WeeklyLeaders from './WeeklyLeaders.jsx';

class WeeklyLeadersView extends React.Component {
  render() {
    const { leaders } = this.props;
    return (
      <div>
        <h2>Weekly Leaders</h2>
        <hr />
        <table className="w-leaders-tbl">
          <tbody>
            <tr className="w-leaders-headers">
              <td>Name</td>
              <td>Team</td>
              <td>Points</td>
              <td>3 Pointers</td>
            </tr>
            {leaders.map((elem) => (
              <WeeklyLeaders player={elem} key={elem.name} />
            ),

            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default WeeklyLeadersView;
