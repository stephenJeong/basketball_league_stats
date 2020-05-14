const express = require('express');
const bodyParser = require('body-parser');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('../client_secret.json');
// const db = require('../database/index.js');
const PORT = 3000;

const app = express();
const cors = require('cors');

app.use(express.static('./client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

async function getData(index, callback) {
  const doc = new GoogleSpreadsheet('1uyoyCE2tc3tnPO7GeVGUUbjCR2-IwDu-HSodzpYV5og');
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo(); // loads document properties and worksheets

  console.log(`Title: ${doc.title}`);

  const sheet = doc.sheetsByIndex[index]; // or use doc.sheetsById[id]
  console.log(`Sheet Title: ${sheet.title}`);
  console.log(`Number of Rows: ${sheet.rowCount}`);

  const rows = await sheet.getRows();

  callback(rows);
}

const getSheetData = (callback, tabNumber) => {
  getData(tabNumber, (data) => {
    callback(data);
  });
};

/*
app.get('/api/home', (req, res) => {
  let data = {};

  // get playerStats
  getSheetData((stats) => {
    let allPlayers = [];
    let player = {};
    stats.forEach((person) => {
      player.name = person.name;
      player.photo = person.photo;
      player.team = person.team;
      player.gamesPlayed = person.gamesPlayed;
      player.totalPoints = person.totalPoints;
      player.ppg = person.ppg;
      player.fg = person.fg;
      player.fgA = person.fgA;
      player.threePt = person.threePt;
      player.threePtA = person.threePtA;
      player.fgPct = person.fgPct;
      player.ft = person.ft;
      player.ftA = person.ftA;
      player.ftPct = person.ftPct;
      player.fouls = person.fouls;

      allPlayers.push(player);
      player = {};
    })

    data.playerStats = allPlayers;
  }, 2);

  getSheetData((stats) => {
    let allTeams = [];
    let teamData = {};
    stats.forEach((team) => {
      teamData.name = team.name;
      teamData.wins = team.wins;
      teamData.losses = team.losses;
      teamData.standing = team.standing;
      teamData.ppg = team.ppg;
      teamData.threePg = team.threePg;
      teamData.ftPg = team.ftPg;

      allTeams.push(teamData);
      teamData = {};
    });

    data.teamStats = allTeams;
  }, 4);

  teamSchedule((scheduleData) => {
    let allSchedule = [];
    let schedule = {};

    scheduleData.forEach((row) => {
      schedule.week = row.week;
      schedule.date = row.date;
      schedule.time = row.time;
      schedule.homeTeam = row.homeTeam;
      schedule.homeScore = row.homeScore;
      schedule.awayScore = row.awayScore;
      schedule.awayTeam = row.awayTeam;

      allSchedule.push(schedule);
      schedule = {};
    });

    data.teamSchedule = allSchedule;
  });

  res.send(data);
});
*/

app.get('/api/player', (req, res) => {
  getSheetData((stats) => {
    let allPlayers = [];
    let player = {};
    stats.forEach((person) => {
      player.name = person.name;
      player.photo = person.photo;
      player.team = person.team;
      player.gamesPlayed = person.gamesPlayed;
      player.totalPoints = person.totalPoints;
      player.ppg = person.ppg;
      player.fg = person.fg;
      player.fgA = person.fgA;
      player.threePt = person.threePt;
      player.threePtA = person.threePtA;
      player.fgPct = person.fgPct;
      player.ft = person.ft;
      player.ftA = person.ftA;
      player.ftPct = person.ftPct;
      player.fouls = person.fouls;

      allPlayers.push(player);
      player = {};
    })

    res.send(allPlayers);
  }, 3);
});

app.get('/api/team', (req, res) => {
  getSheetData((stats) => {
    let allTeams = [];
    let teamData = {};
    stats.forEach((team) => {
      teamData.name = team.name;
      teamData.wins = team.wins;
      teamData.losses = team.losses;
      teamData.standing = team.standing;
      teamData.ppg = team.ppg;
      teamData.threePg = team.threePg;
      teamData.ftPg = team.ftPg;

      allTeams.push(teamData);
      teamData = {};
    });

    res.send(allTeams);
  }, 4);
});

app.get('/api/schedule', (req, res) => {
  getSheetData((data) => {
    let allSchedule = [];
    let schedule = {};

    data.forEach((row) => {
      schedule.week = row.week;
      schedule.date = row.date;
      schedule.time = row.time;
      schedule.homeTeam = row.homeTeam;
      schedule.homeScore = row.homeScore;
      schedule.awayScore = row.awayScore;
      schedule.awayTeam = row.awayTeam;

      allSchedule.push(schedule);
      schedule = {};
    });

    res.send(allSchedule);
  }, 2);
});

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});