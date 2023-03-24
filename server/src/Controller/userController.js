import { con } from "../database/database.js";
import { list } from "../models/list.model.js";

export const userLogin = async (req, response) => {
  try {
    let user_id = req.params.id;
    let data = [];
    await con
      .sync()
      .then(async (req, res) => {
        await list
          .findAll({ where: { user_id: user_id } })
          .then((res) => {
            data = res;
            response.status(200).json(data);
          })
          .catch((error) => {
            res.status(204).json(error);
          });
      })
      .catch((err) => {
        resp.status(500).json(err);
      });
  } catch (err) {
    response.status(500).json(err);
  }
};
