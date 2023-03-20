import { con } from "../database/database.js";
import { list } from "../database/list.model.js";

export const display = async (req, res) => {
  try {
    let data = [];
    con.sync().then(() => {
      list
        .findAll()
        .then((res) => {
          data = res;
          sendData();
        })
        .catch((error) => {
          res.status(204).send({ Message: error });
        });
    });
    // let displayQuery = "SELECT * FROM mydb";
    // con.query(displayQuery, function (err, result) {
    //   if (err) throw err;
    //   data = result;
    //   sendData();
    // });

    function sendData() {
      res.send(data);
    }
    console.log(data);
  } catch (err) {
    res.status(500).send({ Message: err });
  }
};
