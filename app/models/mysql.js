var showdown = require('showdown');
var { DBModel } = require('./dbmodel');

var mysql = require('mysql');
var showdown = require('showdown');

/* Queries */
var blogImageFolder = '/images/blog/';
var pastProjectsImageFolder = '/images/past_projects';
var getBlogEntryQuery = 'SELECT Title, Tags, HTML, Created FROM BlogEntry;';
var setBlogEntryQuery = 'INSERT INTO BlogEntries\
                    VALUES ?, ?, ?, ?, ?, ?, ?\
                    ON DUPLICATE KEY UPDATE\
                    ;';
var setPastProjectQuery = '';

class MySQL extends DBModel {
  constructor() {
    super();
    this.converter = new showdown.Converter();
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'personal_site',
      password: 'some_secret',
      database: 'personal_site'
    });
  }

  createTable() {
    
  }

  pullBlogEntry(id) {
    this.connection.query(this._getBlogEntryQuery, function(err, results, fields) {
      if (err) throw err;
    });
  }

  saveBlogEntry(entry) {
    var [ title, markdown, tags ] = entry;
    html = `<h1>${title}</h1>` + this.converter.makeHTML(markdown);
    currentDateTime = new Date(Date.now());

    this.connection.query(this._setBlogEntryQuery, [title, markdown, html, tags], function(err, result) {
      if (err) throw err;
      else {

      }
    })
  }

  pullPastProject(id) {

  }

  savePastProject(entry) {

  }

  validateEntry(entry) {
    return super.validateEntry(entry);
  }

  validateProjectEntry(entry) {
    return super.validateProjectEntry(entry);
  }

}
exports.MySQL = MySQL;
