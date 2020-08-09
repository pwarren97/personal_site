var expect = require('chai').expect;

var { MySQL } = require('../../app/models/mysql');
var { TestDBModel } = require('./test_dbmodel');

class TestMySQL extends TestDBModel {
  testCreateTable() {

  }

  testPullBlogEntry() {

  }

  testSaveBlogEntry() {

  }

  testPullPastProjects() {

  }

  testSavePastProject() {

  }

  testValidateBlogEntry() {

  }

  testValidateProjectEntry() {

  }
}

function run() {
  console.log("This is the test for the mysql dbmodel.");
}

exports.run = run;
