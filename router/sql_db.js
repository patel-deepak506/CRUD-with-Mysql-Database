const mysql = require('mysql');
const  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Deepak@20",
    database:"students"
  });
  
  connection.connect((err)=>{
    if (err) throw err;
    console.log("Connected!");
  });

  module.exports = connection;