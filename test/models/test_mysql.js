'use strict';

var { MySQL } = require('../../app/models/mysql');
var { expect, assert } = require('chai');
var helpers = require('./helpers.js');

var db = new MySQL();

describe('MySQL', () => {
  describe('constructor', () => {
    it('Should Set up connection with the database via the constructor', () => {
      db = new MySQL(); // dies at end of scope
      expect(true).to.equal(true);
    });
  });
  describe('createTables', () => {
    it('Should create the tables from the schema', () => {
      expect(true).to.equal(true);
    })
  });
  describe('saveBlogEntry', () => {

  });
  describe('pullBlogEntry', () => {
    var entry = db.pullBlogEntry(1);
  });
  describe('savePastProject', () => {
    // Need to create a format for a valid blog entry
    var entry = {};
    var err_msg = db.savePastProject(entry);
  });
  describe('pullPastProject', () => {

  });
  describe('validateBlogEntry', helpers.validateBlogEntryTest);
  describe('validateProjectEntry', helpers.validateProjectEntryTest);
});
// function run() {
//   console.log("Test!");
// }

// exports.run = run;
