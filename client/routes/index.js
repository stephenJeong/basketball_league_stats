// const express = require('express');
// const router = express.Router();
// const { renderToString } = require('react-dom/server');

const Landing = require('../components/Landing.jsx') ;
const React = require('react');

// router.get('/', (req, res) => {
//   require('node-jsx').install({
//     harmony: true,
//     extension: 'jsx',
//   });

//   const markup = renderToString(<App />);

//   res.render('index', {
//     title: 'Express',
//     markup: markup,
//   });
// });

module.exports = [
  {
    path: '/',
    component: Landing,
  }
];
