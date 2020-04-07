const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const request = require('request');
const db = require('../database/index.js');
const PORT = 3000;

const app = express();

app.use(express.static('client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

 // If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Sheets API.
  authorize(JSON.parse(content), dataPull);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * @see https://docs.google.com/spreadsheets/d/1uyoyCE2tc3tnPO7GeVGUUbjCR2-IwDu-HSodzpYV5og/edit#gid=1444631509
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
let teams = [];
let teamStats = [];
let playerStats = [];

function dataPull(auth) {
  const sheets = google.sheets({version: 'v4', auth});
    sheets.spreadsheets.values.batchGet({
      spreadsheetId: '1uyoyCE2tc3tnPO7GeVGUUbjCR2-IwDu-HSodzpYV5og',
      ranges: ['Rosters and Schedule!C2:L14', 'Team Stats!A2:D11','Player Stats!A2:N103']
      }, (err, res) => {
        if (err) return console.log('The API returned an error: ' + err);
        teams = res.data.valueRanges[0].values;
        teamStats = res.data.valueRanges[1].values;
        playerStats = res.data.valueRanges[2].values;
        app.get(('/', (req, res) => {
        
        res.send(teams);
        }));

        // data we receive back from api is an array of arrays with each array being a row in google sheets
        /* uncomment out when you're ready to use these functions to get data from google sheets
        if (teams.length) {
          for (let i = 0; i < teams[0].length; i++) {
            teams.forEach((team) => {
              console.log(`${team[i]}`)
            });
          }
        } else {
          console.log('No data found.');
        }

        if (teamStats.length) {
          console.log('Team, Wins, Losses, Standing:');
          teamStats.forEach((team) => {
            console.log(`${team}`)
          });
        } else {
          console.log('No data found.');
        }

        if (playerStats.length) {
          console.log('Team, Wins, Losses, Standing:');
          playerStats.forEach((player) => {
            console.log(`${player}`)
          });
        } else {
          console.log('No data found.');
        }
        */
    });
};

// setTimeout(function () {
//   console.log(teams)
// }, 1000)

// the below app.get should only run AFTER getData function returns result
// app.get(('/', (req, res) => {


// }));


app.get(('/schedule', (req, res) => {

}));


app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});