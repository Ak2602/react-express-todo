import { con } from "../database/database.js";
import { list } from "../database/list.model.js";

export const display = async (req, response) => {
  try {
    let data = [];
    con.sync().then(() => {
      list
        .findAll()
        .then((res) => {
          data = res;
          response.status(200).json(data);
          // console.log(data);
        })
        .catch((error) => {
          response.status(204).json(error);
        });
    });

    // let displayQuery = "SELECT * FROM mydb";
    // con.query(displayQuery, function (err, result) {
    //   if (err) throw err;
    //   data = result;
    //   sendData();
    // });
  } catch (err) {
    res.status(500).json(err);
  }
};
