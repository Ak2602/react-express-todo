import mysql from "mysql2";

export const con = mysql.createConnection({
  multipleStatements: true,
  host: "localhost",
  user: "root",
  password: "Ak@260602",
  database: "wrkdb",
});

con.connect(function (err) {
  if (err) {
    console.log("Connection Failed");
  } else {
    console.log("connected");
  }
});
