var express = require('express');
var router = express.Router();
var helpers = require('./utils/helpers');

var info = { loggedIn: false, entries: [{title: 'Entry 1', id: 1, data: 'The int.', date: '2019-01-01'}, {title: 'Entry 2', id: 2, data: 'The int.', date: '2019-01-01'}] };


/* GET blog listing. */
router.get('/', function(req, res) {
  // pull entries from database
  info.loggedIn = helpers.loggedIn(req);

  res.render('entrylist', info);
});

router.get('/entry/:id', function(req, res) {
  res.render('entry', { data: req.params.id });
});

module.exports = router;
