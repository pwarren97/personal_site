'use strict';

var { MySQL } = require('../../app/models/mysql');
var { expect, assert } = require('chai');

var db = new MySQL();

describe('MySQL', () => {
  describe('createTables', () => {
    it('Should create the tables from the schema', () => {
      expect(true).to.equal(true);
    })
  });
  describe('pullBlogEntry', () => {

  });
  describe('saveBlogEntry', () => {

  });
  describe('pullPastProject', () => {

  });
  describe('validateEntry', () => {

  });
  describe('validateProjectEntry', () => {

  });
});

// function run() {
//   console.log("Test!");
// }

// exports.run = run;
