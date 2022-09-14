const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: "tracker",
});

db.connect((err) => {
  err ? console.log(err) : console.log("connected");
});

module.exports = db;
