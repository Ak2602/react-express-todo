import { con } from "../modal/database.js";

export const displayList = async (req, res) => {
  try {
    let data = [];

    let displayQuery = "SELECT * FROM mydb";
    con.query(displayQuery, function (err, result) {
      if (err) throw err;
      data = result;
      sendData();
    });

    function sendData() {
      res.send(data);
    }
  } catch (err) {
    res.send("error");
  }
};
