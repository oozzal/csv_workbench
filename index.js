var sqlite3 = require('sqlite3').verbose();
var shell = require('shelljs');
var db = new sqlite3.Database('student.sqlite3');

console.log(shell.ls('node_modules'));

db.serialize(function() {
  db.each("SELECT * from student", function(err, row) {
    console.log(row.roll + ", " + row.fname + ", " + row.lname);
  });
});

db.close();

