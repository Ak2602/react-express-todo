import { con } from "../database/database.js";
import { list } from "../modals/list.modal.js";
import value from "../database/date.js";
import { flag } from "../database/flag.js";
import { where } from "sequelize";

export const addList = async (req, response) => {
  try {
    let { task } = req.body;

    con.sync().then(() => {
      list
        .create({
          date: value,
          task: task,
          status: flag,
        })
        .then((res) => {
          response.send(res);
        })
        .catch((error) => {
          response.send(error);
        });
    });

    // let searchQry = `SELECT * FROM mydb WHERE task = "${task}"`;
    // let qry = `INSERT INTO mydb (date, task, status) VALUES ("${value}", "${task.name}", "${flag}")`;
    // con.query(searchQry, function (err, rows) {
    //   if (err) throw err;
    //   if (rows != 0) {
    //     res.send("Task Exists!!!");
    //   } else {
    //     con.query(qry, function (err, result) {
    //       if (err) throw err;
    //       res.send("Data Inserted!!!");
    //     });
    //   }
    // });
  } catch {
    response.send("Error");
  }
};

export const delList = async (req, response) => {
  try {
    let id = req.body.id;
    con.sync().then(() => {
      list
        .destroy({
          where: {
            id: id,
          },
        })
        .then((res) => {
          console.log(res);
          response.send({
            Message: "Data deleted !!!",
          });
        })
        .catch((error) => {
          response.send(error);
        });
    });
    // console.log(id);
    // let deleteQry = `Delete from mydb where id = "${id}" `;
    // con.query(deleteQry, function (err, result) {
    //   if (err) throw err;
    //   res.send("Data Deleted!!!");
    // });
  } catch {
    response.send("Error");
  }
};

export const updList = async (req, response) => {
  try {
    let id = req.body.id;
    con.sync().then(() => {
      list
        .update(
          {
            status: "Completed",
          },
          {
            where: {
              id: id,
            },
          }
        )
        .then((res) => {
          response.send(res);
        })
        .catch((error) => {
          response.send(error);
        });
    });
    // console.log(id);
    // let updQry = `UPDATE mydb SET status = "Completed" WHERE id = "${id}"`;
    // con.query(updQry, function (err, rows) {
    //   res.send("Updated Successful!!!");
    // });
  } catch {
    response.send("error");
  }
};
