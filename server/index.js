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

async function getData() {
  const doc = new GoogleSpreadsheet('1uyoyCE2tc3tnPO7GeVGUUbjCR2-IwDu-HSodzpYV5og');
  await doc.useServiceAccountAuth(creds);

  await doc.loadInfo(); // loads document properties and worksheets
  console.log(`Title: ${doc.title}`);

  const sheet = doc.sheetsByIndex[1]; // or use doc.sheetsById[id]
  console.log(`Sheet Title: ${sheet.title}`);
  console.log(`Number of Rows: ${sheet.rowCount}`);
}

getData();

app.get('/api', (req, res) => {

});

app.get('/schedule', (req, res) => {

});

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});