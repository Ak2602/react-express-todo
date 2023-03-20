import { con } from "../database/database.js";
import { list } from "../database/list.model.js";
import value from "../database/date.js";
import { flag } from "../database/flag.js";

export const add = async (req, response) => {
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
          response.status(201).send({ Message: "Task Added.." });
        })
        .catch((error) => {
          response.status(204).send({ Message: error });
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
    response.status(500).send({ Message: "Internal server error!!!" });
  }
};

export const remove = async (req, response) => {
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
          response.status(200).send({ Message: "Record deleted!!!" });
        })
        .catch((error) => {
          response.status(204).send({ Message: error });
        });
    });
    // console.log(id);
    // let deleteQry = `Delete from mydb where id = "${id}" `;
    // con.query(deleteQry, function (err, result) {
    //   if (err) throw err;
    //   res.send("Data Deleted!!!");
    // });
  } catch {
    response.status(500).send({ Message: "Internal server error!!!" });
  }
};

export const update = async (req, response) => {
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
          response
            .status(200)
            .send({ Message: "Record updated Successfully..." });
        })
        .catch((error) => {
          response.status(204).send({ Message: error });
        });
    });
    // console.log(id);
    // let updQry = `UPDATE mydb SET status = "Completed" WHERE id = "${id}"`;
    // con.query(updQry, function (err, rows) {
    //   res.send("Updated Successful!!!");
    // });
  } catch {
    response.status(500).send({ Message: "Internal server error!!!" });
  }
};
