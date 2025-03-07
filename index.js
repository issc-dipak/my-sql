const mysql = require("mysql2");
require("dotenv").config();

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "md181023",
  database: "Home",
});

con.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
    throw err;
  }
  console.log("MySQL Connected..");
});

module.exports = con;
