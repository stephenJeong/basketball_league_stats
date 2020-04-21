const express = require('express');
const bodyParser = require('body-parser');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const { promisify } = require('util');
const creds = require('../client_secret.json');
const cors = require('cors');
const db = require('../database/index.js');
const PORT = 3000;

const app = express();

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

const playerStats = (callback) => {
  getData(2, (data) => {
    callback(data);
  });
};

app.get('/api/player', (req, res) => {
  playerStats((stats) => {
    let allPlayers = [];
    let player = {};
    stats.forEach((person) => {
      player.name = person.name;
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
  })
});

app.get('/schedule', (req, res) => {

});

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});