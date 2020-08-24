'use strict';

var { MySQL } = require('../../app/models/mysql');
var { expect, assert } = require('chai');

var db = new MySQL();

describe('MySQL', () => {
  describe('createTable', () => {
    expect(db.createTable).to.be.a('function');
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
