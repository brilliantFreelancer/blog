const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/' , function(req, res, next) {
  res.sendFile(__dirname + './../public/index1.html');
});

module.exports = router;
