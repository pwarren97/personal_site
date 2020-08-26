/* global helpers */

const loggedIn = (req) => {
  return req.cookies.user === 'admin';
};

const throw404 = () => {
  throw new Error('404');
};

const renderIfLoggedIn = (req, res, page) => {
  if (loggedIn(req)) {
    res.render(page);
  }
  else {
    throw404();
  }
};

function importDB(dbName) {
  if (dbName == 'mysql') {
    return require('../models/mysql.js')
  }
}

module.exports = { loggedIn, throw404, renderIfLoggedIn };
