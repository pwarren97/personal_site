var express = require('express');
var router = express.Router();
var crypto = require('crypto');

var hour = 3600000;
var maxAge = 24 * hour;

/* GET login pages */
router.post('/', function(req, res, next) {
  // Create a hash of the password from the user
  var hash = crypto.createHash('sha256');
  hash.update(req.body.password, 'utf8');
  var hashedPassword = hash.digest();
  hashedPassword = hashedPassword.toString('hex');

  // check to see if the username and password are correct
  if (req.body.username === "peyton" && hashedPassword === "7c942e7f59dcc59d131134a97d39754a428f829c5a6e318be269cce4571cd83c") {
    // Assign cookie
    res.cookie('user', 'admin', {
      maxAge: maxAge,
      sameSite: true
    });
    res.redirect('/login/admin-panel');
  }
  else {
    res.render('login');
  }
});


router.get('/', function(req, res, next) {
  // Return something if logged in, otherwise the login page
  if (req.cookies.user === 'admin') {
    res.redirect('/login/admin-panel');
  }
  else {
    res.render('login');
  }
});

router.get('/admin-panel', function(req, res) {
  // return admin panel only if there is a proper cookie
  if (req.cookies.user === 'admin') {
    res.render('admin-panel');
  }
  else {
    throw new Error('404');
  }
});

module.exports = router;
