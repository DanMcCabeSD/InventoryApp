var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/dan', function(req, res, next) {
  res.send("Dan's website");
});

module.exports = router;
