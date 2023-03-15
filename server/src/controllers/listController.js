import { con } from "../modal/database.js";
import value from "../modal/date.js";
import { flag } from "../modal/flag.js";

export const addList = async (req, res) => {
  try {
    let task = req.body;
    console.log(task);

    let searchQry = `SELECT * FROM mydb WHERE task = "${task}"`;
    let qry = `INSERT INTO mydb (date, task, status) VALUES ("${value}", "${task.name}", "${flag}")`;
    con.query(searchQry, function (err, rows) {
      if (err) throw err;
      if (rows != 0) {
        res.send("Task Exists!!!");
      } else {
        con.query(qry, function (err, result) {
          if (err) throw err;
          res.send("Data Inserted!!!");
        });
      }
    });
  } catch {
    res.send("Error");
  }
};

export const delList = async (req, res) => {
  try {
    let id = req.body.id;
    console.log(id);
    let deleteQry = `Delete from mydb where id = "${id}" `;
    // con.query(searchQry, function (err, rows) {
    //   if (err) throw err;
    //   if (rows == 0) {
    //     res.send("Task does'not Exists!!!");
    //   } else {
    con.query(deleteQry, function (err, result) {
      if (err) throw err;
      res.send("Data Deleted!!!");
    });
    // }
    // });
  } catch {
    res.send("Error");
  }
};

export const updList = async (req, res) => {
  let id = req.body.id;

  let searchQry = `SELECT * FROM mydb WHERE id = "${id}"`;
  let updQry = `UPDATE mydb SET status = "Completed" WHERE id = "${id}"`;
  con.query(searchQry, function (err, rows) {
    if (err) throw err;
    if (rows == 0) {
      res.send("Task Does'not exists!!!");
    } else {
      con.query(updQry, function (err, rows) {
        res.send("Updated Successful!!!");
      });
    }
  });
};
