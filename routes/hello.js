var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hello', { title: 'Express 3' });
});

module.exports = router;
