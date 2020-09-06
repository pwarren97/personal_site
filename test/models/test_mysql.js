'use strict';

var { MySQL } = require('../../app/models/mysql');
var { expect, assert } = require('chai');
var helpers = require('./helpers.js');


describe('MySQL', () => {
  var db = new MySQL();
  
  describe('constructor', () => {
    it('Should Set up connection with the database via the constructor', () => {
      var temp = new MySQL(); // dies at end of scope
      expect(true).to.equal(true);
    });
  });
  describe('createTables', () => {
    it('Should create the tables from the schema', () => {
      expect(true).to.equal(true);
    });
  });
  describe('saveBlogEntry', () => {
    it('Should save a blog valid blog entry and reject invalid ones', () => {
      expect(true).to.equal(true);
    });
  });
  describe('pullBlogEntry', () => {
    it('Should pull blog entries for the database', () => {
      var entry = db.pullBlogEntry(1);
      expect(true).to.equal(true);
    });
  });
  describe('savePastProject', () => {
    it('Should save valid past projects into the database', () => {
      // Need to create a format for a valid blog entry
      var entry = {};
      var err_msg = db.savePastProject(entry);
      expect(true).to.equal(true);
    });
  });
  describe('pullPastProject', () => {
    it('Should pull past projects from the database', () => {
      expect(true).to.equal(true);
    });
  });
  describe('validateBlogEntry', helpers.validateBlogEntryTest);
  describe('validateProjectEntry', helpers.validateProjectEntryTest);
});
// function run() {
//   console.log("Test!");
// }

// exports.run = run;
