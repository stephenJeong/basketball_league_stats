const express = require('express');
const router = express.Router();

router.get('/teams', function(req, res) {
  require('node-jsx').install({
    harmony: true,
    extension: 'jsx',
  });
  
  res.send('respond with a resource');
});

module.exports = router;