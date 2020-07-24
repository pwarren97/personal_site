var { DBModel } = require('./dbmodel.js');

class mysql extends DBModel {
  constructor() {
    this.mysql = require('mysql');
    this.showdown = require('showdown');
    this.converter = new showdown.Converter();
    // converter.makeHTML(data)

    this._blogImageFolder = '/images/blog/';
    this._pastProjectsImageFolder = '/images/past_projects';

    this._getBlogEntryQuery = 'SELECT Title, Tags, HTML, Created FROM BlogEntry';
    this._setBlogEntryQuery = 'INSERT INTO BlogEntries\
                              VALUES ?, ?, ?, ?, ?, ?, ?\
                              ON DUPLICATE KEY UPDATE
                              ';
    this._setPastProjectQuery = '';

    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'personal_site',
      password: 'some_secret',
      database: 'personal_site'
    });
  }
  pullBlogEntry(id) {
    this.connection.query(this._getBlogEntryQuery, function(err, results, fields) {
      if (err) throw err;
    });
  }

  saveBlogEntry(entry) {
    this.connection.query(this._setBlogEntryQuery, ['value1', 'value2'], function(err, result) {
      if (err) throw err;
    })
  }

  pullPastProject(id) {

  }

  savePastProject() {

  }

}
module.exports = mysql;
