const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const PORT = 3000;

const app = express();

app.use(express.static('client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get(('', (req, res) => {
  console.log('here!!')
}))

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
})