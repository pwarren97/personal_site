var showdown = require('showdown');
var { DBModel } = require('./dbmodel');

var mysql = require('mysql');
var showdown = require('showdown');
var { Entry } = require('./entries/entry');

/* Queries */
var blogImageFolder = '/images/blog/';
var pastProjectsImageFolder = '/images/past_projects';
var getBlogEntryQuery = 'SELECT Title, Tags, HTML, Created FROM BlogEntry;';
var saveBlogEntryQuery = 'INSERT INTO BlogEntries\
                    VALUES ?, ?, ?, ?, ?, ?, ?\
                    ON DUPLICATE KEY UPDATE\
                    ;';
var savePastProjectQuery = '';

class MySQL extends DBModel {
  constructor() {
    super();
    this.converter = new showdown.Converter();
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'personal_site',
      password: 'HS5RnNQCZGHUr5Bg',
      database: 'personal_site'
    });
  }

  createTables() {

  }

  pullBlogEntry(id) {
    // this.connection.query(getBlogEntryQuery, function(err, results, fields) {
    //   if (err) throw err;
    // });
    return true;
  }

  saveBlogEntry(entry) {
    // var [ title, markdown, tags ] = entry;
    // html = `<h1>${title}</h1>` + this.converter.makeHTML(markdown);
    // currentDateTime = new Date(Date.now());
    //
    // this.connection.query(saveBlogEntryQuery, [title, markdown, html, tags], function(err, result) {
    //   if (err) throw err;
    //   else {
    //
    //   }
    // })
  }

  pullPastProject(id) {

  }

  savePastProject(entry) {

  }

  validateBlogEntry(entry) {
    return super.validateEntry(entry);
  }

  validateProjectEntry(entry) {
    return super.validateProjectEntry(entry);
  }

}
exports.MySQL = MySQL;
