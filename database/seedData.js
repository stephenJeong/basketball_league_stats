const db = require('./index.js');

/*
example data
  {
    "playerName": "Shaquille O'Neal",
    "team": "Los Angeles Lakers",
    "teamLogo": 
    "totalPoints": 100,
    "totalThreePts": 10,
    "totalFGs": 50,
    "totalFTs": 10
  },
*/

console.log(fakeData);

// add one
let queryString = 'INSERT INTO player(teamName, logo, schedule, record) VALUES (?, ?, ?, ?)';
let queryArgs = [];


// db.connection.query(queryString, queryArgs, (err) => {
//   if (err) {
//     throw err;
//   } else {
//     connection.end();
//   }
// });