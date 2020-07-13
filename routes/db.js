var mysql = require('mysql');

const _blogImageFolder = '/images/blog/'
const _pastProjectsImageFolder = '/images/past_projects'

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'personal_site',
  password: 'some_secret',
  database: 'dbs'
});
