// Extract the list of tests to run
args = process.argv.slice(2);
console.log(args);

// Specify all test to be run
var testMySQL = false

for (c = 0; c < args.length; c++) {
  if (args[c].toLowerCase() == "mysql") {
    testMySQL = true;
  }
}

// Run all related tests
var test;
if (testMySQL) {
  test = require('./models/test_mysql.js');
  test.run();
}
