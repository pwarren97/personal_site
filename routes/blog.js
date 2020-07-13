var express = require('express');
var router = express.Router();
var helpers = require('./helpers');

var info = { loggedIn: false, entries: [{title: 'Entry 1', id: 1, data: 'The int.', date: '2019-01-01'}, {title: 'Entry 2', id: 2, data: 'The int.', date: '2019-01-01'}] };

var showdown = require('showdown');
var converter = new showdown.Converter();

/* GET blog listing. */
router.get('/', function(req, res) {
  // pull entries from database
  info.loggedIn = helpers.loggedIn(req);

  res.render('entrylist', info);
});

router.get('/entry/:id', function(req, res) {
  res.render('entry', { data: req.params.id });
});

router.get('/add-blog-entry', function(req, res) {
  res.render('add-blog-entry');
});

module.exports = router;
