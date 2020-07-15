var mysql = require('mysql');
var showdown = require('showdown');
var converter = new showdown.Converter();
// converter.makeHTML(data)

const _blogImageFolder = '/images/blog/'
const _pastProjectsImageFolder = '/images/past_projects'

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'personal_site',
  password: 'some_secret',
  database: 'personal_site'
});


// should save and edit

var _saveBlogEntryQuery = 'UPDATE'

function saveBlogEntry() {
  connection.connect(function(err) {
    if (err) throw err
  });
}

function savePastProject() {

}

module.exports = { saveBlogEntry, savePastProject };
