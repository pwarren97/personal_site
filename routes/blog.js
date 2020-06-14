var express = require('express');
var router = express.Router();

var info = { loggedIn: false, entries: [{title: 'Entry 1', id: 1, data: 'The int.', date: '2019-01-01'}, {title: 'Entry 2', id: 2, data: 'The int.', date: '2019-01-01'}] };

/* GET blog listing. */
router.get('/', function(req, res, next) {
  // pull entries from database
  if (typeof req.cookies != "undefined" && req.cookies.user === "admin") {
    info.loggedIn = true;
  }
  else {
    info.loggedIn = false;
  }
  res.render('entrylist', info);
});

router.get('/entry/:id', function(req, res, next) {
  res.render('entry', { data: req.params.id });
});

module.exports = router;
