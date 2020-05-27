var express = require('express');
var router = express.Router();

/* GET login pages */
router.post('/', function(req, res, next) {
  if (req.body.username === "peyton" && req.body.password === "peyton") {
    res.render('index');
  }
  else {
    res.render('login');
  }
});

router.get('/', function(req, res, next) {
  res.render('login');
});

module.exports = router;
