const mysql = require("mysql");
require("dotenv").config();

const con = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB
});

con.connect(function (err, rows) {
  if (err) throw err;
  console.log("Database is connected!");
});

module.exports = con;
