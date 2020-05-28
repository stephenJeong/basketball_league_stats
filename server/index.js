const express = require('express');
const bodyParser = require('body-parser');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('../client_secret.json');
const PORT = 3000;

const app = express();
const cors = require('cors');

app.use(express.static('./client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

async function getData(pIndex, tIndex, sIndex, callback) {
  const doc = new GoogleSpreadsheet('1uyoyCE2tc3tnPO7GeVGUUbjCR2-IwDu-HSodzpYV5og');
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo(); // loads document properties and worksheets

  console.log(`Google Sheet Title: ${doc.title}`);

  /*
  const sheet = doc.sheetsByIndex[index]; // or use doc.sheetsById[id]
  console.log(`Sheet Title: ${sheet.title}`);
  console.log(`Number of Rows: ${sheet.rowCount}`);

  const rows = await sheet.getRows();
  */

  const allRows = {
    player: await doc.sheetsByIndex[pIndex].getRows(),
    team: await doc.sheetsByIndex[tIndex].getRows(),
    schedule: await doc.sheetsByIndex[sIndex].getRows(),
  }

  callback(allRows);
}

const getSheetData = (pIndex, tIndex, sIndex, callback) => {
  getData(pIndex, tIndex, sIndex, (data) => {
    callback(data);
  });
};

app.get('/api/all', (req, res) => {
  getSheetData(3, 4, 2, (data) => {
    console.log('getting into alldata server')

    let playerData = [];
    let player = {};
    data.player.forEach((person) => {
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

      playerData.push(player);
      player = {};
    });

    let teamData = [];
    let oneTeam = {};
    data.team.forEach((team) => {
      oneTeam.name = team.name;
      oneTeam.wins = team.wins;
      oneTeam.losses = team.losses;
      oneTeam.standing = team.standing;
      oneTeam.ppg = team.ppg;
      oneTeam.threePg = team.threePg;
      oneTeam.ftPg = team.ftPg;

      teamData.push(oneTeam);
      oneTeam = {};
    });

    let scheduleData = [];
    let schedule = {};
    data.schedule.forEach((row) => {
      schedule.week = row.week;
      schedule.date = row.date;
      schedule.time = row.time;
      schedule.homeTeam = row.homeTeam;
      schedule.homeScore = row.homeScore;
      schedule.awayScore = row.awayScore;
      schedule.awayTeam = row.awayTeam;

      scheduleData.push(schedule);
      schedule = {};
    });

    let allData = [{
      players: playerData,
      teams: teamData,
      schedules: scheduleData,
    }];

    res.send(allData);
  })
});

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
