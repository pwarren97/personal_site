var express = require('express');
var router = express.Router();
var crypto = require('crypto');

var hashedCorrectPassword = "7c942e7f59dcc59d131134a97d39754a428f829c5a6e318be269cce4571cd83c";

var hour = 3600000;
var maxAge = 24 * hour;
var loginCookieOptions = {
  maxAge: maxAge,
  sameSite: true
};


/* GET login pages */

// Login Page
router.post('/', function(req, res, next) {
  // Create a hash of the password from the user
  var hash = crypto.createHash('sha256');
  hash.update(req.body.password, 'utf8');
  var hashedPassword = hash.digest();
  hashedPassword = hashedPassword.toString('hex');

  // check to see if the username and password are correct
  if (req.body.username === "peyton" && hashedPassword === hashedCorrectPassword) {
    // Assign cookie
    res.cookie('user', 'admin', loginCookieOptions);
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

// Log Out Operation
router.get('/log-out', function(req, res, next) {
  if (req.cookies.user === 'admin') {
    res.clearCookie('user');
    res.redirect('/login');
  }
  else {
    throw new Error('404');
  }
});

// Admin Panel
router.get('/admin-panel', function(req, res) {
  // return admin panel only if there is a proper cookie
  if (req.cookies.user === 'admin') {
    res.render('admin-panel');
  }
  else {
    throw new Error('404');
  }
});

// Add a Blog Entry
router.get('/add-blog-entry', function(req, res) {
  
});

// Remove a Blog Entry
router.get('/remove-blog-entry', function(req, res) {

});

// Add a Past Project
router.get('/remove-blog-entry', function(req, res) {

});

// Remove a Past Project
router.get('/remove-blog-entry', function(req, res) {

});

module.exports = router;
