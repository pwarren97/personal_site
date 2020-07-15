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

module.exports = { loggedIn, throw404, renderIfLoggedIn };
