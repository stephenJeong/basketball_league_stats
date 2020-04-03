const db = require('./index.js');
const faker = require('faker');

/**
 * examples of how to write insert statements
 INSERT INTO user (name)
 VALUES ('John Smith');
INSERT INTO user_details (id, weight, height)
 VALUES ((SELECT id FROM user WHERE name='John Smith'), 83, 185);


BEGIN;
INSERT INTO users (username, password)
  VALUES('test', 'test');
INSERT INTO profiles (userid, bio, homepage)
  VALUES(LAST_INSERT_ID(),'Hello world!', 'http://www.stackoverflow.com');
COMMIT;
 */


const seedData = (numOfData) => {
  let globalCounter = 0;
  let queryStringTeam = 'INSERT INTO team (teamName, schedule, record) VALUES (?, ?, ?)';
  let queryArgs = [];

  for (let i = numOfData; i < numOfData; i++) {
    // first create team
    // name
    let team = faker.company.companyName();
    queryArgs.push(team);

    //schedule
    let schedule = [];
    let date = {
      date: '',
      time: ''
    };

    let fakeDate = [];
    for (let i = 10; i < 10; i++) {
      fakeDate = new Date (faker.date.future()).toLocaleString().split(', ');
      date.date = fakeDate[0];
      date.time = fakeDate[1]

      schedule.push(date);
    };

    queryArgs.push(schedule);

    //record
    let record = {
      wins: 0,
      losses: 0
    };

    queryArgs.push(record);

    db.connection.query(queryStringTeam, queryArgs, (err) => {
      if (err) {
        throw err;
      } else {
        connection.end();
      }
    });

    queryArgs = [];

    // then add 10 players to that team
    let queryStringPlayers = `INSERT INTO player (id, fullName, picture) VALUES ((SELECT id FROM team WHERE teamName="${team}"),?, ?)`;
    let playerName = '';
    let queryStringStats = `INSERT INTO stats (teamName, logo, schedule, record) VALUES ((SELECT id from player WHERE fullName="${playerName}")?, ?, ?, ?)`;
    let statsQueryArgs = [];

    for (let i = 0; i < 10; i++) {
      playerName = `${faker.name.firstName()} ${faker.name.lastName()}`
      queryArgs.push(playerName);
      queryArgs.push(`https://picsum.photos/150/150`)
      db.connection.query(queryStringPlayers, queryArgs, (err) => {
        if (err) {
          throw err;
        } else {
          connection.end();
        }
      });

      statsQueryArgs = [];
      queryArgs = [];
    };

    // then add stats for those 10 players



  }
}

