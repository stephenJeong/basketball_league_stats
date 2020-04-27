const React = require('react');
const Landing = require('../components/Landing.jsx');
const TeamsView = require('../components/team-components/TeamsView.jsx')

module.exports = [
  {
    path: '/',
    component: Landing,
  },
  {
    path: '/teams',
    component: TeamsView,
  },
];
