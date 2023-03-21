import { con } from "../database/database.js";
import { users } from "../models/user.model.js";
import { list } from "../models/list.model.js";

export const userLogin = async (req, response) => {
  try {
    console.log(req.body);
    con.sync().then(async (request, resp) => {
      let user = await users.findOne({
        where: {
          name: req.body.username,
          password: req.body.password,
        },
      });
      if (user) {
        // response.status(200).json(user);
        // console.log(user.id);
        let user_id = user.id;
        // console.log(user_id);
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
          .catch(() => {
            resp.status(500).json("Error");
          });
      } else {
        response.status(404).json("User does not exists!!!");
      }
    });
  } catch {
    response.status(500).json("error");
  }
};
