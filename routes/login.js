var express = require('express');
var router = express.Router();
var crypto = require('crypto');

var correctPasswordHash = "7c942e7f59dcc59d131134a97d39754a428f829c5a6e318be269cce4571cd83c";

var hour = 3600000;
var maxAge = 24 * hour;
var loginCookieOptions = {
  maxAge: maxAge,
  sameSite: true
};

// check to see if someone is logged in
const loggedIn = (req) => {
  return req.cookies.user === 'admin';
};

const throw404 = () => {
  throw new Error('404');
};

const renderIfLoggedIn = (req, res, page) => {
  if (loggedIn) {
    res.render(page);
  }
  else {
    throw404();
  }
};

const hashPassword = (password) => {
  var hash = crypto.createHash('sha256');
  hash.update(password, 'utf8');
  var hashedPassword = hash.digest();
  return hashedPassword.toString('hex');
};

/* ALl login related pages */

// Login Page
router.post('/', function(req, res, next) {
  hashedPassword = hashPassword(req.body.password);

  // check to see if the username and password are correct
  if (req.body.username === "peyton" && hashedPassword === correctPasswordHash) {
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
  if (loggedIn(req)) {
    res.redirect('/login/admin-panel');
  }
  else {
    res.render('login');
  }
});

// Log Out Operation
router.get('/log-out', function(req, res, next) {
  if (loggedIn(req)) {
    res.clearCookie('user');
    res.redirect('/login');
  }
  else {
    throw404();
  }
});

// Admin Panel
router.get('/admin-panel', function(req, res) {
  // return admin panel only if there is a proper cookie
  renderIfLoggedIn(req, res, 'admin-panel');
});

// Add a Blog Entry
router.get('/add-blog-entry', function(req, res) {
  renderIfLoggedIn(req, res, 'admin-panel-items/add-blog-entry');
});

// Remove a Blog Entry
router.get('/remove-blog-entry', function(req, res) {
  renderIfLoggedIn(req, res, 'admin-panel-items/remove-blog-entry');
});

// Add a Past Project
router.get('/add-past-project', function(req, res) {
  renderIfLoggedIn(req, res, 'admin-panel-items/add-past-project');
});

// Remove a Past Project
router.get('/remove-past-project', function(req, res) {
   renderIfLoggedIn(req, res, 'admin-panel-items/remove-past-project');
});


module.exports = router;
