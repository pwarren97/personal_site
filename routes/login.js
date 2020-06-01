var express = require('express');
var router = express.Router();
var crypto = require('crypto');



/* GET login pages */
router.post('/', function(req, res, next) {
  // Create a hash of the password from the user
  var hash = crypto.createHash('sha256');
  hash.update(req.body.password, 'utf8');
  var hashedPassword = hash.digest();
  hashedPassword = hashedPassword.toString('hex');

  console.log(req.session);

  // check to see if the username and password are correct
  if (req.body.username === "peyton" && hashedPassword === "7c942e7f59dcc59d131134a97d39754a428f829c5a6e318be269cce4571cd83c") {
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
