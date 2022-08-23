const mysql = require("mysql");
require("dotenv").config();

const con = mysql.createConnection({
  host: process.env.SERVER_HOST,
  user: process.env.SERVER_USER,
  password: process.env.SERVER_PASSWORD,
  database: process.env.SERVER_DB
});

con.connect(function (err, rows) {
  if (err) throw err;
  console.log("Database is connected!");
});

module.exports = con;
