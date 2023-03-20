import { con } from "../database/database.js";
import { DataTypes } from "sequelize";

export const list = con.define("list", {
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  task: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
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
