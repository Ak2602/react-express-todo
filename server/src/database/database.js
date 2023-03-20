import Sequelize from "sequelize";

// export const con = mysql.createConnection({
//   multipleStatements: true,
//   host: "localhost",
//   user: "root",
//   password: "Ak@260602",
//   database: "wrkdb",
// });

// con.connect(function (err) {
//   if (err) {
//     console.log("Connection Failed");
//   } else {
//     console.log("connected");
//   }
// });
export const con = new Sequelize("wrkdb", "root", "Ak@260602", {
  host: "localhost",
  dialect: "mysql",
});

con
  .authenticate()
  .then(() => {
    console.log("Database connected...");
  })
  .catch((error) => {
    console.error("Connection failed!!!", error);
  });
