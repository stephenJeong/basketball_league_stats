const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'league'
});

connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('mySql connected successfully');
  }
});

module.exports.connection = connection;

// const retrieve = 'SELECT * FROM team WHERE ____';
