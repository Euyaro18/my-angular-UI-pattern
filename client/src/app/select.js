
var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "password",
database: "CSI_lab_contacts"
});
con.connect(function(err) {
if (err) throw err;
con.query("SELECT * FROM employees", function (err, result) {
if (err) throw err;
console.log(result);
});
});
