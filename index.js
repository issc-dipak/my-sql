const mysql = require("mysql2");
require("dotenv").config();

const con = mysql.createConnection({
  host: process.env.ocalhost,      
  user: process.env.root,      
  password: process.env.md181023,  
  database: process.env.Home,    
  port: process.env.DB_PORT || 3306,  
});

con.connect((err) => {
  if (err) {
    console.error("🚨 MySQL connection error:", err);
    return;
  }
  console.log("✅ MySQL Connected Successfully!");
});

module.exports = con;
