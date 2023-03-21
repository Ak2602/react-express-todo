import { con } from "../database/database.js";
import { DataTypes } from "sequelize";

export const users = con.define("users", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

con
  .sync()
  .then(() => {
    console.log("Table created successfully...");
  })
  .catch((error) => {
    console.log("Creation Failed", error);
  });
