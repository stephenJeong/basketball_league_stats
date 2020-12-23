const express = require('express');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const dotenv = require('dotenv').config();
const { GoogleSpreadsheet } = require('google-spreadsheet');
let creds = require('../client_secret');
const port = process.env.PORT || 8080;

// console.log('process.env', process.env);
const app = express();
const router = express.Router();

const cors = require('cors');
console.log('NODE_ENV', process.env.NODE_ENV);
console.log('process.env.project_id', process.env.project_id);

// if (process.env.NODE_ENV === 'production') {
//   creds = {
//       "type": process.env.type,
//       "project_id": process.env.project_id,
//       "private_key_id": process.env.private_key_id,
//       "private_key": process.env.private_key,
//       "client_email": process.env.client_email,
//       "client_id": process.env.client_id,
//       "auth_uri": process.env.auth_uri,
//       "token_uri": process.env.token_uri,
//       "auth_provider_x509_cert_url": process.env.auth_provider_x509_cert_url,
//       "client_x509_cert_url": process.env.client_x509_cert_url,
//   }
// }

// app.use(express.static('./client/dist'));
app.use('/.netlify/functions/index', router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

async function getData(pIndex, tIndex, sIndex, callback) {
  const doc = new GoogleSpreadsheet('1uyoyCE2tc3tnPO7GeVGUUbjCR2-IwDu-HSodzpYV5og');
  try {
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo(); // loads document properties and worksheet
    console.log(`Google Sheet Title: ${doc.title}`);

    const allRows = {
      player: await doc.sheetsByIndex[pIndex].getRows(),
      team: await doc.sheetsByIndex[tIndex].getRows(),
      schedule: await doc.sheetsByIndex[sIndex].getRows(),
    }

    callback(allRows);
  } catch (err) {
    console.log(err);
  }
  /*
  const sheet = doc.sheetsByIndex[index]; // or use doc.sheetsById[id]
  console.log(`Sheet Title: ${sheet.title}`);
  console.log(`Number of Rows: ${sheet.rowCount}`);

  const rows = await sheet.getRows();
  */
}

const getSheetData = (pIndex, tIndex, sIndex, callback) => {
  getData(pIndex, tIndex, sIndex, (data) => {
    callback(data);
  });
};

router.get('/', (req, res) => {
  getSheetData(3, 4, 2, (data) => {
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



// app.listen(port, () => {
//   console.log(`app listening on port ${port}`);
// });

module.exports.handler = serverless(app);