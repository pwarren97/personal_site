var express = require('express');
var router = express.Router();

/* GET blog listing. */
router.get('/', function(req, res, next) {
  // pull entries from database
  res.render('entrylist', { entries: [{title: 'Entry 1', data: 'The int.'}] });
});

module.exports = router;
